const {Router} = require('express')

const GameController = require('./controllers/GameController')

const routes = Router()

routes.get('/health', (req, res) =>{
    return res.status(200).json({message: 'server is on'})
})

routes.post('/games', GameController.store)
routes.get('/games', GameController.index)
routes.get('/games/:id', GameController.show)
routes.put('/games/:id', GameController.update)
routes.delete('/games/:id', GameController.destroy)

module.exports = routes