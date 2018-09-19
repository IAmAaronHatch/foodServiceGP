import React, { Component } from 'react';
import {loadModules, loadCss} from 'esri-loader'

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
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Locate']).then(([Map, MapView, Locate]) => {

      const map = new Map({
        basemap: 'streets-navigation-vector'
      });

      const mapView = new MapView({
        container: 'mapDiv',
        map,
        zoom: 3
			});
			
			const locate = new Locate({
				view: mapView,
				useHeadingEnabled: false,
				goToOverride: function(view, options) {
					options.target.scale = 1500;
					return view.goTo(options.target);
				}
			});
		
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
        <div id="mapDiv" style={{height: 'calc(100vh - 190px)'}}>
        </div>
      </div>
    );
  }
}

export default Map;