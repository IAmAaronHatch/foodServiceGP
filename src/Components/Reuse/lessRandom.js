import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFiveList } from '../../Redux/reducers/rest'

class LessRandom extends Component {

    random = (rest) => {
        let { getFiveList } = this.props
        let sorted = [...rest]
        let newFive = sorted.sort(function(a,b) {return 0.5 - Math.random() })
        newFive.splice(4, 45)
        console.log(newFive)
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
