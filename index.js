const express = require('express')
const app = express();

const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect('mongodb+srv://amitroyrock6071:Q4AeKB199aWfeMrR@cluster0.oxq39mj.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log('DB Connected!'));

app.post("/createtask", function (req, res) {
    console.log("data",req.body);
    // res.send('Hello World');
})

app.listen(8000, function () {
    console.log("server is running");
})



// username : amitroyrock6071
// password: Q4AeKB199aWfeMrR