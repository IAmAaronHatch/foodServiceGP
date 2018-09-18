import React, { Component } from 'react';
import './Landing.css'
import Modal from 'react-modal'



class Landing extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
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

  render() {
    return (
      <div className="App">
        {/* <Routing /> */}
        <Modal
          isOpen={this.state.modalIsOpen}>
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

            <div className='type-drop'>
              <button className='type-dropbtn'>Type</button>
              <div className='type-dropcontent'>
                <span className='type-span'>Random</span>
                <span className='type-span'>Type 1</span>

                {/* Here we will need to get all the restaurant info, and map through the 'cuisines' category to get the types of food */}

              </div>
            </div>
            
          
          <button>Location</button>
          <span>- or -</span>
          <input placeholder='zipcode' />
          <button >Search</button>

          <br />
          <button>Randomize!</button>
          <br />
          <button onClick={this.login}>Login</button>
        </Modal>
      </div>
    );
  }
}

export default Landing;