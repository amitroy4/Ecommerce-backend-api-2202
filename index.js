const express = require('express')
const app = express()

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amitroyrock6071:Q4AeKB199aWfeMrR@cluster0.oxq39mj.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log('DB Connected!'));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8000, function () {
    console.log("server is running");
})



// username : amitroyrock6071
// password: Q4AeKB199aWfeMrR