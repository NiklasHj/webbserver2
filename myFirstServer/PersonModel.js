const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

exports.newPerson = (name, email, age) => {
    var person = new Person({
        name: name,
        email: email,
        age: age
    })
    return person
}

exports.getAllPeople = async () => {
    let people = await Person.find({})
    return people
}