import React, { Component } from 'react';
import {loadModules, loadCss} from 'esri-loader'


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

class Map extends Component {
	componentDidMount() {
		//add any widgets or necessary features for the map.
		loadModules([
			'esri/Map',
			'esri/views/MapView',
			'esri/widgets/Locate',
			"esri/widgets/Track",
		]).then(([Map, MapView, Locate, Track]) => {

			//determines type of map

      const map = new Map({
        basemap: 'streets-navigation-vector'
			});
			
			//initial scale and map size

      const mapView = new MapView({
        container: 'mapDiv',
        map,
        zoom: 3
			});

			//find my location
			
			const locate = new Locate({
				view: mapView,
				useHeadingEnabled: false,
				//not needed because it's in the track function.
				// goToOverride: function(view, options) {
				// 	options.target.scale = 5000;
				// 	return view.goTo(options.target);
				// }
			});
			//adds the button to the map
				mapView.ui.add(locate, "top-left");
				//--------track current location start------//
			var track = new Track({
				view: mapView,
				// graphic: new Graphic({
				// 	symbol: {
				// 		type: "simple-marker",
				// 		size: "9px",
				// 		color: "green",
				// 		outline: {
				// 			color: "#efefef",
				// 			width: "1.2px"
				// 		}
				// 	}
				// }),
				useHeadingEnabled: false,
				goToLocationEnabed: false,
				goToOverride: function(view, options) {
					options.target.scale = null;
					return view.goTo(options);
				}
			});
		
			mapView.ui.add(track, "top-left");
//--------track current location end------------//

      this.setState({
        map,
        mapView
      });

    });
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

export default Map;