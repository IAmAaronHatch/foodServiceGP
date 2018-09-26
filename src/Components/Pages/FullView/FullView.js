import React, { Component } from 'react'
import {loadModules, loadCss} from 'esri-loader'
import { setLat, setLon } from '../../../Redux/reducers/user'
import { connect } from 'react-redux'


loadCss('https://js.arcgis.com/4.8/esri/css/main.css');

class FullView extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){

        let geoFindMe= async ()=> {
            let { setLat, setLon} = this.props
            var output = document.getElementById("out");
          
            if (!navigator.geolocation){
              output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
              return;
            }
          
            function success(position) {
              var lat  = position.coords.latitude;
              var lon = position.coords.longitude;
              setLat(lat)
              setLon(lon)
            }
          
            function error() {
              alert('cannot find your location')
            }
           await navigator.geolocation.getCurrentPosition(success, error);
          }
          geoFindMe()

        loadModules([
			'esri/Map',
			'esri/views/MapView',
            "esri/Graphic",
            'esri/geometry/Point',
            "esri/layers/GraphicsLayer",
            "esri/tasks/RouteTask",
            "esri/tasks/support/RouteParameters",
            "esri/tasks/support/FeatureSet",
            "esri/core/urlUtils",
		]).then(([Map, MapView, Graphic, Point, GraphicsLayer, RouteTask, RouteParameters, FeatureSet, urlUtils]) => {

            urlUtils.addProxyRule({
                urlPrefix: "route.arcgis.com",
                proxyUrl: "/sproxy/"
            });

            const routeTask = new RouteTask({
                url: "https://utility.arcgis.com/usrsvcs/appservices/E2uQI1CqLxhWKDdv/rest/services/World/Route/NAServer/Route_World/solve"
            });

            const routeLayer = new GraphicsLayer();

            const routeParams = new RouteParameters({
                stops: new FeatureSet(),
                outSpatialReference: { // autocasts as new SpatialReference()
                    wkid: 3857
                }
            });
        
            // Define the symbology used to display the stops
            const stopSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                style: "cross",
                size: 15,
                outline: { // autocasts as new SimpleLineSymbol()
                    width: 4
                }
            };
        
              // Define the symbology used to display the route
            const routeSymbol = {
                type: "simple-line", // autocasts as SimpleLineSymbol()
                color: [0, 0, 255, 0.5],
                width: 5
            };

            const map = new Map({
                basemap: 'streets-navigation-vector',
                layers: [routeLayer],
            });
                
            //initial scale and map size
            const mapView = new MapView({
                container: 'mapDiv',
                center: [this.props.lon || -109.0452, this.props.lat || 36.9991],
                map,
                zoom: 11
            });

            let cur = new Point({
                latitude: this.props.lat,
                longitude: this.props.lon
            })
            
            let rest = new Point({
                latitude: '40.7134',
                longitude: '-111.87175'
            })

            function addStop(point) {
                // Add a point at the location of the map click
                var stop = new Graphic({
                    geometry: point,
                    symbol: stopSymbol
                });

                routeLayer.add(stop);
            
                // Execute the route task if 2 or more stops are input
                routeParams.stops.features.push(stop);

                if (routeParams.stops.features.length >= 2) {
                    routeTask.solve(routeParams).then(showRoute);
                }
            }

            //Adds points to the routeParams
            addStop(cur)
            addStop(rest)
            // Adds the solved route to the map as a graphic
            function showRoute(data) {
                var routeResult = data.routeResults[0].route;
                routeResult.symbol = routeSymbol;
                routeLayer.add(routeResult);
            }

            this.setState({
                map,
                mapView,
            });
    
        });
    }


    render() {
        return (
            <div id="mapDiv" style={{ minHeight: '100vh'}}></div>
        )
    }
}

let mapStateToProps=state=>{
    return {
		lat: state.user.userLat,
        lon: state.user.userLon
    }
}

export default connect(mapStateToProps, { setLat, setLon })(FullView)
