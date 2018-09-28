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
            let { phone } = req.body
            console.log('ctrl', phone)
            // get the ranks,
            // check how many are in array with .length
            // add +=1
            // if length == 5, replace the 0 index and splice out index 5 so there is always 5 in arr.
            let ranking = await db.createRank({user_id})
            let newFav = []
            if(ranking.length < 5) {
                newFav = await db.createFavorites([restId, user_id, name, phone])
            } else {
                newFav = await db.updateFavoriteRank([restId, user_id, name, phone])
            }
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
    deleteFavorite: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.deleteFavorite([id]).then(results => {
            res.status(200).send(results)
        })
    }

}