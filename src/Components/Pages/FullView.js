import React, { Component } from 'react'
import {loadModules, loadCss} from 'esri-loader'

loadCss('https://js.arcgis.com/4.8/esri/css/main.css');

class FullView extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){

        loadModules([
			'esri/Map',
			'esri/views/MapView',
			'esri/widgets/Locate',
			"esri/widgets/Track",
            "esri/Graphic",
            'esri/geometry/Point',
		]).then(([Map, MapView, Locate, Track, Graphic, Point]) => {

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
            mapView
          });
    
        });
    }


    render() {
        return (
            <div>
                FullView

                <iframe src={this.props.restaurant.menu}>
                    You're browser does not support Iframes.
                </iframe>
            </div>
        )
    }
}

export default FullView
