import React, { Component } from 'react';
import {loadModules, loadCss} from 'esri-loader'


//css strictly for the way the map views
loadCss('https://js.arcgis.com/4.8/esri/css/main.css');

const styles = {
container: {
height: '100vh',

},
mapDiv: {
height: '100%',

},
}

class Map extends Component {
	componentDidMount() {
		//add any widgets or necessary features for the map.
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Locate']).then(([Map, MapView, Locate]) => {

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
				goToOverride: function(view, options) {
					options.target.scale = 5000;
					return view.goTo(options.target);
				}
			});
		//adds the button to the map
			mapView.ui.add(locate, "top-left");

      this.setState({
        map,
        mapView
      });

    });
  }

  render() {
    return (
      <div>
				{/* sets the size for the map(will need to change to be dynamic for each view) */}
        <div id="mapDiv" style={{height: 'calc(100vh - 190px)'}}>
        </div>
      </div>
    );
  }
}

export default Map;