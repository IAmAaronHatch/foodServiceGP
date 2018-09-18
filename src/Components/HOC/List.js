import React, { Component } from 'react'

export default function List (WrappedComponent) {
    return class  extends Component {

        render () {
            return <WrappedComponent/>
        }
    }
}