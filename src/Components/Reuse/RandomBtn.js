import React, { Component } from 'react'
import { connect } from 'react-redux'

class RandomBtn extends Component {
randomize = (arr) => {
    // let mapped = arr.map(x => x.sort(function (a, b) { return 0.5 - Math.random()}))
    let sorted = arr.sort(function(a, b){return 0.5 - Math.random()})
    sorted.splice(4, 15)
    return sorted
}

    render() {
        console.log('props.rest', this.props.rest)
        return (
            <div>   
                <button onClick={() => this.randomize(this.props.rest.data)}>Randomize!</button>
                <button onClick={() => console.log(this.props.rest)}>Console log</button>       
            </div>
        )
    }
}

//this.props.rest.restaurants == [{},{},{}] == {restaurant: {}}

let mapStateToProps = state => {
    return {
        rest: state.rest
    }
}

export default connect(mapStateToProps)(RandomBtn)
