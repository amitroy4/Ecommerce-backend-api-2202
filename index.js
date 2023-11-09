const express = require('express')
const app = express();

const mongoose = require('mongoose');
const Task = require("./model/taskSchema")
app.use(express.json());
mongoose.connect('mongodb+srv://amitroyrock6071:Q4AeKB199aWfeMrR@cluster0.oxq39mj.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log('DB Connected!'));

app.post("/createtask", function (req, res) {
    let { title, priority } = req.body
    // console.log("data",req.body);
    // res.send('Hello World');

    let task = new Task({
        title: title,
        priority: priority,
    });
    task.save();
    res.send({ success: "data created"})
});

app.get("/createtask",async function (req, res){
    let data = await Task.find({});
    res.send(data);
})

app.post("/edittask", async function (req, res){
    let {id, title} = req.body;
    console.log(id);

    await Task.findByIdAndUpdate({_id:id},{title: title})
})
app.post("/deletetask", async function (req, res){
    let {id} = req.body;
    console.log(id);

    await Task.findByIdAndDelete({_id:id})
})

app.listen(8000, function () {
    console.log("server is running");
})



// username : amitroyrock6071
// password: Q4AeKB199aWfeMrR