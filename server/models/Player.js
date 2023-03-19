const mongoose = require('mongoose');

const { Schema } =mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;