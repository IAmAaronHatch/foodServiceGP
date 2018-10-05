import React, { Component } from 'react'
import Map from '../RP/Map'
import Nav from '../Reuse/Nav'
import LessRandom from '../Reuse/lessRandom';
import { connect } from 'react-redux'
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
            <div className='main-listView' >
                <Nav />
                <div>
                    <Map styles={{ height: '50vh', width: '80%', display: 'flex', justifyContent: 'center', marginLeft: '10vw', boxShadow: '0px 3px 8px #888888' }} zoom='10' />
                </div>
                <div className='lessRandom'>
                    <LessRandom />
                </div>
                
                <div style={{ height: '60vh', backgroundColor: 'render' }}>
                    <div className='top-list'>
                        {fiveList.map((rest) => (
                            <div className="restListItem" key={rest.id} >
                                <ChildList key={rest.id} rest={rest} />
                            </div>
                        ))}

                    </div>

                </div>
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

export default connect(mapStateToProps, { setRestLat, setRestLon })(ListView)
