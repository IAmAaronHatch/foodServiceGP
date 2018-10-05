import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import methods from '../../_util/methods'

class Nav extends Component {
	
	openNav = () => {
		document.getElementById("mySidenav").style.width = "80px";
	}
	
	closeNav = () => {
		document.getElementById("mySidenav").style.width = "0px";
	}
	
	render() {
		let { logoutUser } = methods;
		return (
			<div>
				<div id="mySidenav" className="sidenav">
					<a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
					{this.props.user?
					//need a different icon for logging out
						<Link to='/' onClick={logoutUser}><img src={'https://static.thenounproject.com/png/1528129-200.png'} alt='signout'/></Link>
					:
						<Link to='/'><img src={'https://static.thenounproject.com/png/1528129-200.png'} alt='signin'/></Link>
				}
					<Link to='/'><img onClick={() => window.location.reload()} src={'https://static.thenounproject.com/png/113952-200.png'} alt='new search'/></Link>
					<Link to='/favorites'><img src={'https://static.thenounproject.com/png/670685-200.png'} alt='favorites'/></Link>
				</div>

				<div>
					<span onClick={this.openNav}>Open</span>
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state)=>{
	return {
		user: state.user.data
	}
}

export default connect(mapStateToProps)(Nav)
