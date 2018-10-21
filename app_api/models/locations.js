let mongoose = require('mongoose');

let openingTimeShema = new mongoose.Schema({
    days: {type: 'String', required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

let reviewSchema = new mongoose.Schema({
    authors: String,
    rating: {type: Number, required: true, min:0, max: 5},
    reviewText: String,
    createOn: {type: Date, "default": Date.new}
});

let locationShema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type:Number, "default": 0, min:0, max:5},
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeShema],
    reviews:[reviewSchema]
});

mongoose.model('Location', locationShema , 'location' );