import React, { Component } from 'react';
import {loadModules} from 'esri-loader'
 

const styles = {
container: {
height: '99.9vh',

},
mapDiv: {
height: '100%',

},
}

class Map extends Component {
state ={
coordinates: []
}

componentDidMount() {
loadModules(["esri/Map", "esri/views/MapView", "esri/tasks/support/Query", "esri/tasks/QueryTask", "esri/Graphic","esri/layers/GraphicsLayer","esri/symbols/SimpleMarkerSymbol","esri/layers/FeatureLayer","esri/geometry/Point" ,"esri/PopupTemplate","dojo/domReady!"])
.then(([Map, MapView, Query, QueryTask, Graphic,GraphicsLayer,SimpleMarkerSymbol,FeatureLayer,Point , popupTemplate]) => {
 

const map = new Map({ basemap: "streets" });
const view = new MapView({ container: "viewDiv", map: map, zoom: 11, center: [-89.8253, 35.2269] });

const query = new Query();
query.where = 'Permit_No IS NOT NULL';
query.outFields = ['*'];
query.returnGeometry = true;
// Define the query task
const queryTask = new QueryTask({
url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
});

queryTask.execute(query)
.then(function(result){
result.features.forEach(function(item) {
let g = new Graphic({
geometry: {
type: 'point',
longitude: item.attributes['Longitude'],
latitude: item.attributes['Latitude']
},
attributes: item.attributes,
symbol: {
type: 'simple-marker',
color: 'black',
width: 10,
style: 'short-dot'
}
});
view.graphics.add(g);
});
view.goTo({
target: view.graphics
});
})
})
}
 

 

render() {
return ( <div style = { styles.container } >
<div id = 'viewDiv'style = { styles.mapDiv } >

</div> </div>
);
}
}

export default Map;