import React, { Component } from 'react';
// import axios from 'axios'
import './Landing.css'
import Modal from 'react-modal'
import Map from '../../RP/Map'
import { connect } from 'react-redux'
import RandomBtn from '../../Reuse/RandomBtn';
import { setLat, setLon } from '../../../Redux/reducers/user'


class Landing extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
    }
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
              <span>Random</span>
              <span onClick={() => this.props.setPriceRange(1)}>$</span>
              <span onClick={() => this.props.setPriceRange(2)}>$$</span>
              <span onClick={() => this.props.setPriceRange(3)}>$$$</span>
              <span onClick={() => this.props.setPriceRange(4)}>$$$$</span>
            </div>
          </div>
          <div className='type-drop'>
            <button className='type-dropbtn'>Cuisine</button>
            <div className='type-dropcontent'>
              <span onClick={() => this.props.setCuisine()}></span>
            </div>
          </div>

          <button onClick={this.geoFindMe}>Location</button>

          <span>- or -</span>
          <input placeholder='zip' />
          <button >Search</button>
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
    userLon: state.user.userLon
  }
}

export default connect(mapStateToProps, { setLat, setLon })(Landing);