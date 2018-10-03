import React, { Component } from 'react'
import Map from '../RP/Map'
import Nav from '../Reuse/Nav'
import LessRandom from '../Reuse/lessRandom';
import { connect } from 'react-redux'
import { createFavorite } from '../../Redux/reducers/favorites'
import { setRestLat, setRestLon } from '../../Redux/reducers/rest'
import './ListView.css'
import ChildList from './ChildList';

class ListView extends Component {

    componentDidMount() {
        if (!this.props.fiveList.length) {
            this.props.history.push('/')
        }
    }
    coords = (lat, lon) => {
        this.props.setRestLat(lat)
        this.props.setRestLon(lon)
    }

    render() {
        let { fiveList } = this.props
        return (
            <div >
                <Nav />
                <div>
                    <Map styles={{ height: '40vh', width: '100%' }} zoom='10' />
                </div>
                <div style={{ height: '60vh', backgroundColor: 'render' }}>
                    <div className='top-list'>
                        {fiveList.map((rest) => (
                            <div className="restListItem" key={rest.id} >
                                <ChildList key={rest.id} rest={rest}/>
                            </div>
                        ))}
                    </div>
                </div>
                <LessRandom />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        fiveList: state.rest.fiveList,
        user: state.user.data
    }
}

export default connect(mapStateToProps, { createFavorite, setRestLat, setRestLon })(ListView)
