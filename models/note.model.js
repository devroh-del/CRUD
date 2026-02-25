const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({ //schema is a format in mongo DB
    title: String,
    description: String
})

//model creation lets us do CRUD operations basically creates a folder in the DB
const noteModel = mongoose.model("notes", noteSchema) 

module.exports = noteModel;