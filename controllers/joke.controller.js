const Joke = require('../models/joke.model')

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}
// Ninja Bonus: return a random joke
module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            const index = Math.floor(Math.random() * allJokes.length)
            console.log(index)
            res.json({ joke: allJokes[index]})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}