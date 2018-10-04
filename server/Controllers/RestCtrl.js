const yelp = require('yelp-fusion');

module.exports = {
    getRest: (req, res) => {
        const client = yelp.client(process.env.REACT_APP_API_YELP_KEY);
        let { lat, lon, price, cat, local } = req.body
        const searchRequest = {
            term: 'food',
            latitude: lat,
            longitude: lon,
            location: local,
            categories: cat,
            limit: 50,
            price: `${price}`,
            open_now: true,

        }
        client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses;
            const prettyJson = JSON.stringify(firstResult, null, 4);
            res.send(prettyJson)
        }).catch(e => {
            console.log(e);
        })
    },
    getById: (req, res) => {
        const client = yelp.client
            (process.env.REACT_APP_API_YELP_KEY);
        let { id } = req.params
        client.business(id).then(response => {
            res.send(response.jsonBody)
        }).catch(e => {
            console.log(e)
        })

    },
    getCuisine: async (req, res) => {
        try {
            const db = req.app.get('db')

            let cuisine = await db.getCuisine()
            console.log('cuisine', cuisine)
            res.status(200).send(cuisine)
        }
        catch (error) {
            console.log(error)
            res.status(500).send('We let you down')
        }
    }
}