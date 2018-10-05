import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFiveList } from '../../Redux/reducers/rest'
import object from '../../_util/methods.js'
let { RandomizePt1 } = object
class LessRandom extends Component {

    random = (rest) => {
        let { getFiveList } = this.props
        let newFive = RandomizePt1(rest)
        getFiveList(newFive)
    }
    render() {
        return (
            <div>
                <button style={styles} onClick={() => this.random(this.props.rest)}>Randomize!</button>          
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        rest: state.rest.data
    }
}

export default connect(mapStateToProps, {getFiveList})(LessRandom)

const styles = {
    height: '3vh',
    width: '8vw',
    padding: '5px',
    backgroundColor: '#d64933',
    borderRadius: '5px',
    fontSize: '16px',
    color: 'white'
}