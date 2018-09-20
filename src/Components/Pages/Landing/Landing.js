import React, { Component } from 'react';
// import axios from 'axios'
import './Landing.css'
import Modal from 'react-modal'
import Map from '../../RP/Map'
import { connect } from 'react-redux'
import { getRestaurants } from '../../../Redux/reducers/rest'
import { Link } from 'react-router-dom'


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


  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Modal
          isOpen={this.state.modalIsOpen}
          className='modal'
          overlayClassName='Overlay'
          >
          <div className='dropdown'>
            <button className='dropbtn'>Price</button>
            <div className='dropdown-content'>
              <span>Random</span>
              <span>$</span>
              <span>$$</span>
              <span>$$$</span>
              <span>$$$$</span>
            </div>
          </div>

            
        
          <button>Location</button>
          <span>- or -</span>
          <input placeholder='zipcode' />
          <button >Search</button>

          <br />
          <Link to='/restaurants'><button>Randomize!</button></Link>
          <br />
          <button onClick={this.login}>Login</button>
          <button onClick={() => this.props.getRestaurants()}>Get Rest</button>
        </Modal>
        <Map styles={{ height: 'calc(120vh - 175px)' }}/>
      </div>
    );
  }
}

export default connect(null, {getRestaurants})(Landing);