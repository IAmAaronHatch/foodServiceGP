module.exports = {
    getCuisine: async (req, res) => {
        try {
            const db = req.app.get('db')

            let cuisine = await db.getCuisine()
            res.status(200).send(cuisine)
        }
        catch (error) {
            console.log(error)
            res.status(500).send('We let you down')
        }
    }
}