module.exports = {
    getFavorites: async (req, res) => {
        try {
            let db = req.app.get('db')
            let favorites = await db.getFavorites(req.params)
            res.status(200).send(favorites)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createFavorite: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { restId } = req.params
            let user_id  = req.session.user.id
            let { name } = req.body
            let newFav = await db.createFavorites([restId, user_id, name])
            res.status(200).send(newFav)

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    // changeOrder: async (req, res) => {
    //     try {
    //         let db = req.app.get('db')
    //     } catch (error) {
    //         res.status(500).send(error)
    //     }
    // },
    // deleteFavorite: (req, res) => {
    //     let {id} = req.params
    //     let db = req.app.get('db')
    //     db.deleteFavorite([id]).then(results => {
    //         res.status(200).send(results)
    //     })
    // }

}