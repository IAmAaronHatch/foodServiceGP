// module.exports = {
    // getFavorites: async (req,res) =>{
    //     try {
    //         let db = req.app.get('db')
    //         let favorites = await db.getFavorites(req.params)
    //         res.status(200).send(favorites)
    //     } catch (error) {
    //         res.status(500).send(error)
    //     }
    // },
    // createFavorite: async (req, res) => {
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
    
// }