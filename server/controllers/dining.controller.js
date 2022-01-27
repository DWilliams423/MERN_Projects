const Dining = require('../models/dining.model');

module.exports.healthCheck = (request,response) => {
    response.send("Health Check set up in Controller")
}

module.exports.index = (request,response) => {
    response.json({
        message: "Hello, World"
    });
}

module.exports.createDining = (request,response) => {
    const {
        diningName, 
        diningType,
        diningPrice,
        diningSite,
        diningBriefDescrip,
        diningFullReview,
        recsScore
    } = request.body;
    console.log(request.body)
    Dining.create({
        diningName, 
        diningType,
        diningPrice,
        diningSite,
        diningBriefDescrip,
        diningFullReview,
        recsScore
    })
        .then(dining => response.json(dining))
        .catch((err) => response.status(400).json(err));
}

module.exports.getAllDining = (request,response) => {
    Dining.find({})
        .then(dining => response.json(dining))
        .catch((err) => response.status(400).json(err));
}

module.exports.getDining = (request,response) => {
    Dining.findOne({_id: request.params.id})
        .then(dining => response.json(dining))
        .catch((err) => response.status(400).json(err));
}

module.exports.updatedDining = (request,response) => {
    Dining.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedDining => response.json(updatedDining))
        .catch((err) => response.status(400).json(err));
}

module.exports.deleteDining = (request,response) => {
    Dining.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err));
}