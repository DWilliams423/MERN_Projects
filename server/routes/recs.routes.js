const DiningController = require('../controllers/dining.controller');
const GamesController = require('../controllers/games.controller');
const MoviesController = require('../controllers/movies.controller');
const UserController = require('../controllers/user.contoller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    // Dining DB Routes
    app.get('/api/healthcheck', DiningController.healthCheck);
    app.post('/api/recs/dining', DiningController.createDining);
    app.get('/api/recs/dining', DiningController.getAllDining);
    app.get('/api/recs/dining/:id', DiningController.getDining);
    app.put('/api/recs/dining/:id', DiningController.updatedDining);
    app.delete('/api/recs/dining/:id', DiningController.deleteDining);
    // Games DB Routes
    app.get('/api/healthcheck', GamesController.healthCheck);
    app.post('/api/recs/games', GamesController.createGame);
    app.get('/api/recs/games', GamesController.getAllGame);
    app.get('/api/recs/games/:id', GamesController.getGame);
    app.put('/api/recs/games/:id', GamesController.updatedGame);
    app.delete('/api/recs/games/:id', GamesController.deleteGame);
    // Register Routes
    app.post('/api/recs/login', UserController.login);
    app.post('/api/recs/user/register', UserController.register);
    app.post('/api/recs/user', UserController.getAllUsers);
    app.get('/api/recs/user', UserController.getAllUsers);
    app.get('/api/recs/user/loggedin', authenticate, UserController.getLoggedInUser);
    app.get('/api/recs/user/logout', UserController.logout)
}