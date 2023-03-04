const GameModel = (require('../models/GameModule'))

class GameController {
    async store(req,res) {
        const createdGame = await GameModel.create(req.body)

        return res.status(200).json(createdGame)
    }

    async index(req, res) {
        const games = await GameModel.find()
        
        return res.status(200).json( games )
    }

    async show(req, res) {
        try{

            const { id } = req.params
    
            const game = await GameModel.findById(id)
    
            if(!game) {
                return res.status(404).json({message: "game inexistente"})
            } 
            
            return res.status(200).json(game)
        }catch(err){
            
            return res.status(404).json({message: "verifique o ID do game"})
        }
        
    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = new GameController