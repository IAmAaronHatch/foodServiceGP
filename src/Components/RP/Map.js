import React, { Component } from 'react';
import {loadModules, loadCss} from 'esri-loader'
import { connect } from 'react-redux';


//css strictly for the way the map views
loadCss('https://js.arcgis.com/4.8/esri/css/main.css');

// const styles = {
// container: {
// height: '100vh',

// },
// mapDiv: {
// height: '100%',

// },
// }

class ESRIMap extends Component {
	constructor(props){
		super(props)
		this.state={
			map:{},
			mapView:{}
		}
	}
	componentDidMount() {
		//add any widgets or necessary features for the map.
		loadModules([
			'esri/Map',
			'esri/views/MapView',
			"esri/Graphic",
		]).then(([Map, MapView, Graphic]) => {

			//determines type of map

      const map = new Map({
        basemap: 'streets-navigation-vector'
			});
			
			//initial scale and map size
      const mapView = new MapView({
				container: 'mapDiv',
				center: [this.props.lon || -109.0452, this.props.lat || 36.9991],
        map,
        zoom: this.props.zoom || 3
			});

      this.setState({
        map,
				mapView,
      });

    });
	}

//-------Move map to current location------//

	componentDidUpdate(prevProps) {
		let {lat, lon, restaurants} = this.props;
		loadModules(['esri/geometry/Point', 'esri/Graphic', 'esri/symbols/SimpleMarkerSymbol']).then(([Point, Graphic, Simple])=>{
			if(prevProps.lon!==lon){

				let pt = new Point({
					latitude: lat,
					longitude: lon
				});
				let symbol = new Simple({
					style:"diamond",
					outline: {
						style: "none"
				},
				color: [0, 112, 255, 1]
				})
				let PG = new Graphic({
					geometry: pt,
					symbol
				})
					this.state.mapView.graphics.add(PG)
					this.state.mapView.goTo({target:PG, zoom:12})
			}
//------Adds a graphic for each restaurant in 5 list------//
			if(restaurants.length){
				restaurants.forEach((rest)=>{
					let { latitude, longitude } = rest.coordinates
					let point = new Point({
						latitude,
						longitude
					})

					let symbol = new Simple({
						style:"circle",
						outline: {
							style: "none"
					},
					color: [0, 112, 255, 1]
					})
					let PG= new Graphic({
						geometry: point,
						symbol
					})
						this.state.mapView.graphics.add(PG)
				})
			}
		})
	}

  render() {
    return (
      <div>
        <div id="mapDiv" style={this.props.styles}>
				{/* sets the size for the map(will need to change to be dynamic for each view) */}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
	return {
		lat: state.user.userLat,
		lon: state.user.userLon,
		restaurants: state.rest.fiveList
	}
}

export default connect(mapStateToProps)(ESRIMap);