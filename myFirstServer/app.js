const express = require('express')
const databaseModule = require('./databaseModule')
const personModel = require('./PersonModel')
const messageModel = require('./MessageModel')

const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("pages/index.ejs", { name: "" })
});

app.post('/', (req, res) => {
  let person = personModel.newPerson(req.body.name, req.body.email, req.body.age)
  databaseModule.storeElement(person)

  res.render("pages/index.ejs", { name: " " + req.body.name })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
