import React, { Component } from 'react';
import {loadModules, loadCss} from 'esri-loader'

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
    loadModules(['esri/Map', 'esri/views/MapView']).then(([Map, MapView]) => {

      const map = new Map({
        basemap: 'streets'
      });

      const mapView = new MapView({
        container: 'mapDiv',
        map,
        zoom: 3
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
        <div id="mapDiv" style={this.props.styles}>
        </div>
      </div>
    );
  }
}

export default Map;