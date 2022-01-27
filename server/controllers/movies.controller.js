const Movie = require('../models/movies.model');

module.exports.healthCheck = (request,response) => {
    response.send("Health Check set up in Controller")
}

module.exports.index = (request,response) => {
    response.json({
        message: "Hello, World"
    });
}