//importing express
const express = require('express')
const app = express();
//importing mongoose
const mongoose = require('mongoose')
//importing router file
const route = require("./routes/route.js")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connecting to the mongodb
mongoose.connect('mongodb+srv://gauravpandeyidforfunctionup:XvjHpLyNrIONLzb1@cluster0.a7th0vg.mongodb.net/ShortenUrl_group6?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => console.log("MongoDb connected"))
    .catch(err => console.log(err))
app.use('/', route)
//starting the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on Port: ', (process.env.PORT || 3000));
})