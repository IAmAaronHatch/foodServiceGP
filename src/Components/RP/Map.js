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
			'esri/widgets/Locate',
			"esri/widgets/Track",
			"esri/Graphic",
		]).then(([Map, MapView, Locate, Track, Graphic]) => {

			//determines type of map

      const map = new Map({
        basemap: 'streets-navigation-vector'
			});
			
			//initial scale and map size
      const mapView = new MapView({
				container: 'mapDiv',
				center: [this.props.lat, this.props.lon],
        map,
        zoom: 3
			});
//--------track current location end------------//

      this.setState({
        map,
        mapView
      });

    });
	}

//-------Move map to current location------//

	componentDidUpdate(prevProps) {
	if(prevProps.lon!==this.props.lon){
		loadModules(['esri/Point']).then(([Point])=>{

			var pt = new Point({
				latitude: this.props.lat,
				longitude: this.props.lon
			});
				this.state.mapView.goTo(pt)
			})
		}
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
		lon: state.user.userLon
	}
}

export default connect(mapStateToProps)(ESRIMap);