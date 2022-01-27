const mongoose = require('mongoose');

const DiningSchema = new mongoose.Schema({
    diningName: {
        type: String,
        required: [true, "Restaurant name required"],
        minlength: [3, "Restaurant's name must be at least 3 characters"]
    },
    diningType: {
        type: String,
        enum: ['American', 'Italian', 'Japanese'],
        required: [true, "Please select a cuisine"]
    },
    diningPrice: {
        type: String,
        enum: ['$', '$$', '$$$'],
        required: [true, "Please select a price point"]
    },
    diningSite: {
        type: String,
        required: false
    },
    diningBriefDescrip: {
        type: String,
        required: [true, "Please provide a brief description of your experience"],
        minlength: [3, "Description must be at least 3 characters long"],
        maxlength: [50, "Brief! Save it for the full review!"]
    },
    diningFullReview: {
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

module.exports = mongoose.model('Dining', DiningSchema);