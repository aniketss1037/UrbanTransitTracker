const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:aOhThvx5hh0ZIBzL@cluster0.fpiudak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post('/login',(req,res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
        if(user.password === password){
            res.json("Success")
        }else{
            res.json("Incorrect Password")
        }
        }else{
            res.json("No record found")
        }
    })
    
})

app.post('/register',(req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(emp))
    .catch(err => res.json(err))
})
app.listen(3001, () =>{
    console.log("Server is running")
})

