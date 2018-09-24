module.exports = {
    getAll: async (req,res) =>{
        try {
            let db = req.app.get('db')
            let favorites = await db.getFavorites(req.params)
            console.log(111111)
            res.status(200).send(favorites)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}