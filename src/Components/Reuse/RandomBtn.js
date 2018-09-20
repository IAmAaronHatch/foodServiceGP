import React, { Component } from 'react'
import { connect } from 'react-redux'
class RandomBtn extends Component {
logme = () => {
    console.log('hi im props', this.props.rest.restaurants)
}
randomize = (arr) => {
    // let mapped = arr.map(x => x.sort(function (a, b) { return 0.5 - Math.random()}))
    let sorted = arr.sort(function(a, b){return 0.5 - Math.random()})
    return sorted.splice(4, 15)
}

    render() {
        console.log(1234123, this.props.rest)
        return (
            <div>   
                <button onClick={this.logme}>Click Me</button>
                <button onClick={() => this.randomize(this.props.rest.restaurants)}>2</button>
            </div>
        )
    }
}

//this.props.rest.restaurants == [{},{},{}] == {restaurant: {}}

let mapStateToProps = state => {
    return {
        rest: state.rest.data
    }
}

export default connect(mapStateToProps)(RandomBtn)
