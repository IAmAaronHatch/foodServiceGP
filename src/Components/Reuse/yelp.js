import yelp from 'yelp-fusion'
import React, { Component } from 'react'

const apiKey = 'uFNYN0fSsYbRqmJ039zwSyzkfQY3mhdL8st74PUblNPLQf7K8JyhmIyEDKwydfg8NLMzlRZ6nhoz-OfE4wfuhrhnLKH-Qkw4rS-t9KTN29E8FZbVvU8TGqrIYWaqW3Yx';

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





