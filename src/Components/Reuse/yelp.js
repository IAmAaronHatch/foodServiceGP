import yelp from 'yelp-fusion'
import React, { Component } from 'react'

const apiKey = '';

const searchRequest = {
    term: 'food',
};

const client = yelp.client(apiKey);


export default class Yelp extends Component {
getYelp = () => {
    client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
    }).catch(e => {
        console.log(e);
    });
}
    render () {
        return (
            <div>
                <button onClick={() => this.getYelp()}>Yelp</button>
            </div>
        )
    }
}





