const express = require("express");
const noteModel = require("../models/note.model");
const cors = require("cors")
const path = require("path")
const app = express()

app.use(express.json())
app.use(cors()) //starts accepting cross origin websites
app.use(express.static("./Public")) // this middleware makes the specified folder available publicly

app.post("/api/notes", async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created success",
        note
    })
})

app.get("/api/notes", async(req, res)=>{
    const notes = await noteModel.find() // always return in format of array of object

    res.status(200).json({
        message : "note fetched success",
        notes
    })
})

// delete API

app.delete("/api/notes/:id", async(req, res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message:"Note deleted success"
    })
})

//PATCH API

app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id;
    const {description} = req.body;

    await noteModel.findByIdAndUpdate(id, {description});

    res.status(200).json({
        message: "note updated success"
    })
})
    console.log(__dirname) //__dirname gives the path of the folder where we're in.

    app.use('*name', (req,res)=>{
        res.sendFile(path.join(__dirname, "..", "/Public/index.html")) // .. gets out of the file and then get in the Public file
    }) //when a user tries to fetch an api that doesn't exist, so this returns a file

module.exports = app;