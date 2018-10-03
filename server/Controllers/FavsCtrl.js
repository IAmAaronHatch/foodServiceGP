module.exports = {
    getFavorites: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.session.user
            let favorites = await db.getFavorites({id})
            res.status(200).send(favorites)
        } catch (error) {
            res.status(500).send(error)
            console.log('get fave', error)
        }
    },
    createFavorite: async (req, res) => {
        try {
            let db = req.app.get('db')
            let user_id  = req.session.user.id
            let { restId } = req.params
            let { name, phone, lat, lon } = req.body
            let newFav = await db.createFavorites([user_id, restId, name, phone, lat, lon])
            res.status(200).send(newFav)
        } catch (error) {
            console.log('creating fav',error)
            res.status(500).send(error)
        }
    },
   
    changeDesc: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { desc } = req.body
            let { restId } = req.params 
            let { id } = req.session.user
            let updated = await db.updateDesc({ desc, restId, id })
            res.status(200).send(updated)
        } catch (error) {
            console.log('had a problem changing desc', error)
            res.status(500).send(error)
        }
    },
    
    deleteFavorite: async (req, res) => {
        try {
            let { id } = req.session.user
            let { restId } = req.params
            let db = req.app.get('db')
            let deleted = await db.deleteFavorite({restId, id})
            res.status(200).send(deleted)
        } catch (error) {
            console.log('problem deleteing', error) 
            res.status(500).send(error)
        }
        
    }

}