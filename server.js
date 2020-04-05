const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'))
})

app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (e, notes) => {
    if (e) { console.log(e) }
    res.json(JSON.parse(notes))
  })
})

app.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (e, notes => {
    if (e) { console.log(e) }
    res.json(JSON.parse(notes))

    // const notes = JSON.parse(notes)

    notes.push(req.body)

    fs.writeFile('./db/db.json', JSON.stringify(notes)) e => {
      if (e) { console.log(e) }
      res.sendStatus(200)
    })
  })
})

app.delete('/api/notes/:id', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }
  })
})

app.listen(process.env.PORT || 3000)