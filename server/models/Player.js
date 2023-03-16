const mongoose = require('mongoose');

const { Schema } =mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    handGrenades: {
        type: Number,
        required: false,
        min: 0,
    },
    mulligans: {
        type: Number,
        required: false,
        min: 0,
    },
    handicap: {
        type: Number,
        required: false,
        min: 0,
    },
    score: {
        type: Number,
        required: false,
        min: 0
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;