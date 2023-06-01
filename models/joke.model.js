const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String, required: true, minlength: [2, 'Not enough characters']
        },
        punchline: {
            type: String, required: true
        },
    }, {timestamps: true}
)

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke