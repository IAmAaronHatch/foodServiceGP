import React, { Component } from 'react';
import './Landing.css'
import Modal from 'react-modal'
import Map from '../../RP/Map'
import { connect } from 'react-redux'
import RandomBtn from '../../Reuse/RandomBtn';
import { setLat, setLon, setCity } from '../../../Redux/reducers/user'
import { setCuisine, setPrice, setCuisineList } from '../../../Redux/reducers/rest'
import { login, randomNum, error, yelpWithId, cuisineNames } from '../../../_util/methods'
import Nav from '../../Reuse/Nav'


class Landing extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
      input: '',
      userCuisine: "",
      priceList: false,
      cuisineList: false
    }
  }
componentDidMount = () => {
  cuisineNames().then(resp=>{

    this.props.setCuisineList(resp.data)
  })
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

  navigator.geolocation.getCurrentPosition(success, error);
}

  

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  yelpId = (restId) => {
    yelpWithId(restId)
  }

  cuisineState=(name)=>{
    this.setState({userCuisine:name})
  }

  changePriceList=()=>{
    this.setState({
      priceList: !this.state.priceList
    })
  }

  changeCuisineList=()=>{
    this.setState({
      cuisineList: !this.state.cuisineList
    })
  }

  render() {
    let { price, setPrice, cuisine, setCuisine, userLat, setCity} = this.props
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          className='modal'
          overlayClassName='Overlay'
        >
           {this.state.priceList? 
          <div className='dropdown' id="price2" onMouseLeave={this.changePriceList}>
            <button className='dropbtn button2'>{price !=="1, 2, 3, 4"? "$".repeat( +price) : "Price"}</button>
             <div className='dropdown-content' >
              <span onClick={() => setPrice(randomNum())}>Random</span>
              <span onClick={() => setPrice('1')}>$</span>
              <span onClick={() => setPrice('2')}>$$</span>
              <span id='priceList' onClick={() => setPrice('3')}>$$$</span>
              <span onClick={() => setPrice('4')}>$$$$</span>
            </div>
          </div>
            :
            <div className='dropdown' id="price1" onMouseEnter={this.changePriceList}>
            <button className='dropbtn button1'>{price !=="1, 2, 3, 4"? "$".repeat( +price) : "Price"}</button> 
            </div>
            }

            {this.state.cuisineList?
          <div className='type-drop' onMouseLeave={this.changeCuisineList}>
            <button className='type-dropbtn button2' >{this.state.userCuisine || "Cuisine"}
            </button>
            <div className='type-dropcontent'>
            {cuisine.map((cuisine) => (
              <span key={cuisine.name} onClick={() =>{ setCuisine(cuisine.cuisine_id); this.cuisineState(cuisine.name)}}>
              {cuisine.name}
              </span>
             ))}
            </div>
          </div>
             :
          <div className='type-drop' onMouseEnter={this.changeCuisineList}>
            <button className='type-dropbtn button1'>{this.state.userCuisine || "Cuisine"}
            </button>
            </div>
            }

          <button id="locator" onClick={this.geoFindMe}>Location</button>
             
             <input hidden id="latInput" value={userLat} onChange={()=>{console.log('none')}}/>

          <span>- or -</span>
          <input id="cityInput" placeholder='city' onChange={this.handleInput} />
          <button id="cityBtn" onClick={() => setCity(this.state.input)}>Search</button>
          <br />


          <button onClick={login}>Login</button>

          <RandomBtn />
          <Nav/>
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
    cuisine: state.rest.cuisine,
    price: state.rest.price,
    phone: state.rest.phone
  }
}

export default connect(mapStateToProps, { setLat, setLon, setCuisine, setPrice, setCity, setCuisineList })(Landing);
