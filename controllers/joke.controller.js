const Joke = require('../models/joke.model')

const findAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

const findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}
// Ninja Bonus: return a random joke
const findRandomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            const index = Math.floor(Math.random() * allJokes.length)
            res.json({ joke: allJokes[index]})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong.', error: err})
        })
}

const createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

const updateExistingJoke = (req, res) => {
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

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong.', error: err})
        })
}

module.exports = {
    findAllJokes,
    findOneJoke,
    findRandomJoke,
    createNewJoke,
    updateExistingJoke,
    deleteJoke
}