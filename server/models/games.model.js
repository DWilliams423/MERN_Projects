const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    gameTitle: {
        type: String,
        required: [true, "Game title is required"],
        minlength: [3, "Game title must be at least 3 characters"],
        maxlength: [100, "Game title may not exceed 100 characters"]
    },
    gameGenre: {
        type: String,
        enum: ['Action/Adventure', 'Platformer', 'Puzzle', 'RPG', 'Shooter'],
        required: [true, "Please select a game genre"]
    },
    gamePlatform: {
        type: String,
        enum: ['Atari', 'Dreamcast', 'PC', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'XBox'],
        required: [true, "Please select a platform"]
    },
    gameImg: {
        type: String,
        required: false
    },
    gameBriefDescrip: {
        type: String,
        required: [true, "Please provide a brief description of your experience"],
        minlength: [3, "Description must be at least 3 characters long"],
        maxlength: [20, "Brief! Save it for the full review!"]
    },
    gameFullReview: {
        type: String,
        required: [true, "Please describe your experience"],
        minlength: [3, "Full review must be at least 3 characters long"],
        maxlength: [500, "Full review may not exceed 500 characters"]
    },
    recsScore: {
        type: String,
        enum: ['⭐(Solid Experience)', '⭐⭐(Excellent Experience)', '⭐⭐⭐(Exceptional Experience)'],
        required: [true, "Please select a MyRecs score"]
    }
})

module.exports = mongoose.model('Game', GameSchema);