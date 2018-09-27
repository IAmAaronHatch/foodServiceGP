import React, { Component } from 'react';
import { loadModules, loadCss } from 'esri-loader'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


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
	constructor(props) {
		super(props)
		this.state = {
			map: {},
			mapView: {}
		}
	}
	componentDidMount() {
		//add any widgets or necessary features for the map.
		loadModules([
			'esri/Map',
			'esri/views/MapView',
			"esri/Graphic",
			"esri/layers/GraphicsLayer",
			'esri/geometry/Point',
			'esri/symbols/SimpleMarkerSymbol'
		]).then(([Map, MapView, Graphic, GraphicsLayer, Point, Simple]) => {

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

			if(this.props.restaurants.length){
				let {restaurants} = this.props
				restaurants.forEach((rest) => {
					let { latitude, longitude } = rest.coordinates
					let point = new Point({
						latitude,
						longitude
					})

					let symbol = new Simple({
						style: "circle",
						outline: {
							style: "none"
						},
						color: [0, 112, 255, 1]
					})
					let PG = new Graphic({
						geometry: point,
						symbol
					})
					mapView.graphics.add(PG)
				})
			}

			this.setState({
				map,
				mapView
			});

		});
	}

	clear = () => {
		// eslint-disable-next-line
		this.state.mapView.graphics.items = []
	}

	//-------Move map to current location------//

	componentDidUpdate(prevProps) {
		let { lat, lon, restaurants } = this.props;
		let { mapView } = this.state;
		
		loadModules(['esri/geometry/Point', 'esri/Graphic', 'esri/symbols/SimpleMarkerSymbol']).then(([Point, Graphic, Simple]) => {
			if (prevProps.lon !== lon) {

				let pt = new Point({
					latitude: lat,
					longitude: lon
				});
				let symbol = new Simple({
					style: "diamond",
					outline: {
						style: "none"
					},
					color: [0, 112, 255, 1]
				})
				let PG = new Graphic({
					geometry: pt,
					symbol
				})
				mapView.graphics.add(PG)
				mapView.goTo({ target: PG, scale: 10000 })
			}
			if (prevProps.restaurants[0] !== restaurants[0]) {
				this.clear()
				restaurants.forEach((rest) => {
					let { latitude, longitude } = rest.coordinates
					let point = new Point({
						latitude,
						longitude
					})

					let symbol = new Simple({
						style: "circle",
						outline: {
							style: "none"
						},
						color: [0, 112, 255, 1]
					})
					let PG = new Graphic({
						geometry: point,
						symbol
					})
					mapView.graphics.add(PG)
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

export default withRouter(connect(mapStateToProps)(ESRIMap));