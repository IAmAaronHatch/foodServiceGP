const yelp = require('yelp-fusion');


module.exports = {
    getRest: (req, res) => {
        const client = yelp.client(process.env.REACT_APP_API_YELP_KEY);
        let {lat, lon, price, cat} =req.body
        const searchRequest = {
            term: cat,
            latitude: lat,
            longitude: lon,
            limit: 50,
            price: `${price}`,
            open_now: true
        }
        client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses;
        const prettyJson = JSON.stringify(firstResult, null, 4);
        res.send(prettyJson)
    }).catch(e => {
        console.log(e);
    });
}
}