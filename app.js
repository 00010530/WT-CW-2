const express = require('express')
const app = express()

const fs = require('fs')

app.set('view engine', 'pug')

app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', (req, res) => {
    const task = req.body.task
    
    if (task.trim() === '') {
        res.render('create', { error: true })
    } else {
        fs.readFile('./data/tasks.json', (err, data) => {
            if (err) throw err

            const tasks = JSON.parse(data)

            tasks.push({
                id: id(),
                task: task,
            })

            fs.writeFile('./data/tasks.json', JSON.stringify(tasks), err => {
                if (err) throw err

                res.render('create', { success: true })
            })
        })
    }
})

const tasks = ['First task', 'Second task']

app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks: tasks})
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Running on port 8000...')
})

function id () {
    return '_' + Math.random().toString(36).substr(2, 9);
}