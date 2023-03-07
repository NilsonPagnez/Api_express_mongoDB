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

    async update(req, res) {
        
        try{
            const { id } = req.params
        
            await GameModel.findByIdAndUpdate(id, req.body)

            return res.status(200).json({message: "Game atualizado"})
        }catch(err){
            return res.status(404).json({message: "falha ao atualizar produto"})
        }
    }

    async destroy(req, res) {
        
        try{
            const { id } = req.params
    
            const gamesDeleted = await GameModel.findByIdAndDelete(id)
            
            if(!gamesDeleted) {
                return res.status(404).json({message: 'Game inexistente'})
            }
            return res.status(200).json({message: "Game deletado"})
            
        }catch(err){
            return res.status(404).json({message: 'Falha ao deletar o jogo'})

        }
    }
}

module.exports = new GameController