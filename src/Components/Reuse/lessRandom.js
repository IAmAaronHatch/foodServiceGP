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
                <button onClick={() => this.random(this.props.rest)}>New List</button>          
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
