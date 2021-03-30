const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('To-do app')
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Running on port 8000...')
})