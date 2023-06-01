const JokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.post('/api/jokes', JokeController.createNewJoke)
    app.get('/api/jokes/random', JokeController.findRandomJoke)
    app.get('/api/jokes/:id', JokeController.findOneJoke)
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke)
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}