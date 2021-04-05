const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

const tasks = ['First task', 'Second task']

app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks: tasks})
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Running on port 8000...')
})