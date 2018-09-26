import React, { Component } from 'react';
import './Landing.css'
import Modal from 'react-modal'
import Map from '../../RP/Map'
import { connect } from 'react-redux'
import RandomBtn from '../../Reuse/RandomBtn';
import { setLat, setLon, setCity } from '../../../Redux/reducers/user'
import { setCuisine, setPrice, getCuisine } from '../../../Redux/reducers/rest'


class Landing extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
      input: ''
    }
  }
componentDidMount = () => {
  this.props.getCuisine()
}
  
  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

    window.location = location
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }


geoFindMe=()=> {

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
  navigator.geolocation.getCurrentPosition(success, error);
}

  randomNum = () => {
    return Math.floor(Math.random() * 4) + 1
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {

    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          className='modal'
          overlayClassName='Overlay'
        >
          <div className='dropdown'>
            <button className='dropbtn'>Price</button>
            <div className='dropdown-content'>
              <span onClick={() => this.props.setPrice(this.randomNum())}>Random</span>
              <span onClick={() => this.props.setPrice('1')}>$</span>
              <span onClick={() => this.props.setPrice('2')}>$$</span>
              <span onClick={() => this.props.setPrice('3')}>$$$</span>
              <span onClick={() => this.props.setPrice('4')}>$$$$</span>
            </div>
          </div>
          <div className='type-drop'>
            <button className='type-dropbtn'>Cuisine</button>
            <div className='type-dropcontent'>
            {this.props.cuisine.map((cuisine) => (
              <span key={cuisine.name} onClick={() => this.props.setCuisine(cuisine.cuisine_id)}>
              {cuisine.name}
              </span>
             ))}

            </div>
          </div>

          <button onClick={this.geoFindMe}>Location</button>

          <span>- or -</span>
          <input placeholder='city' onChange={this.handleInput} />
          <button onClick={() => this.props.setCity(this.state.input)}>Search</button>
          <br />


          <button onClick={this.login}>Login</button>
          {/* Login successfully logs you in as well as takes you directly to favorites */}

          <RandomBtn />
        </Modal>
        <Map styles={{ height: '100vh' }} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    userLat: state.user.userLat,
    userLon: state.user.userLon,
    cuisine: state.rest.cuisine
  }
}

export default connect(mapStateToProps, { setLat, setLon, setCuisine, setPrice, setCity, getCuisine })(Landing);
