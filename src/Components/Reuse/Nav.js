import React, { Component } from 'react'
import './nav.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../Redux/reducers/user'
import { logoutUser } from '../../_util/methods'



class Nav extends Component {
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
	}

	openNav = () => {
		let{isOpen} = this.state
		this.setState({
			isOpen: !isOpen
		})

		if(isOpen){
			document.getElementById("mySidenav").style.width = "60px";
		} else {
			this.closeNav()
		}
	}

	closeNav = () => {
		document.getElementById("mySidenav").style.width = "0px";
	}

	logout = () => {
		let { logout, history } = this.props
		logout(logoutUser)
		history.push('/')
	}

	render() {
		let { user } = this.props
		return (
			<div id='nav'>
				<div id="mySidenav" className="sidenav">
					{
						user ?
							
							<img onClick={this.logout} id='logout' src={'https://static.thenounproject.com/png/1350667-200.png'}/>
							:
							<Link to='/'> <img src={'https://static.thenounproject.com/png/801390-200.png'} alt='signin' /> </Link>

					}
					
					<Link to='/'><img src={'https://static.thenounproject.com/png/113952-200.png'} alt='new search'/></Link>
					<Link to='/favorites'><img src={'https://static.thenounproject.com/png/670685-200.png'} alt='favorites'/></Link>
				</div>

				<div>
					<img style={imageSty} src={'https://static.thenounproject.com/png/918393-200.png'} onClick={this.openNav}/>
				</div>
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		user: state.user.data
	}
}

export default withRouter(connect(mapStateToProps, {logout})(Nav))

const imageSty = {
	height: '20px',
	width: '20px',
	marginLeft: '1vw',
	marginTop: '2vh' 

}