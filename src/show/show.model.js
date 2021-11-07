const mongoose= require('mongoose');

const showSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    channel: {
        type: String,
        // default:"not supplied"
    },
    time: {
        type: Number,
        

    }
    
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;