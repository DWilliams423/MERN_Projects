const Game = require('../models/games.model');

module.exports.healthCheck = (request,response) => {
    response.send("Health Check set up in Controller")
}

module.exports.index = (request,response) => {
    response.json({
        message: "Hello, World"
    });
}

module.exports.createGame = (request,response) => {
    const {
        gameTitle, 
        gameGenre,
        gamePlatform,
        gameImg,
        gameBriefDescrip,
        gameFullReview,
        recsScore
    } = request.body;
    console.log(request.body)
    Game.create({
        gameTitle, 
        gameGenre,
        gamePlatform,
        gameImg,
        gameBriefDescrip,
        gameFullReview,
        recsScore
    })
        .then(game => response.json(game))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllGame = (request,response) => {
    Game.find({})
        .then(game => response.json(game))
        .catch((err) => response.status(400).json(err));
}

module.exports.getGame = (request,response) => {
    Game.findOne({_id: request.params.id})
        .then(game => response.json(game))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedGame = (request,response) => {
    Game.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedGame => response.json(updatedGame))
        .catch((err) => response.status(400).json(err));
}

module.exports.deleteGame = (request,response) => {
    Game.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}