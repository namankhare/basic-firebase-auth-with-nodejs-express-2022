const express = require("express");
const app = express();
const port = 3000;

//firebase
const { register, signIn } = require('./auth');
require('./firebase.service')



app.post("/login", (req, res) => {
    let data = req.body;
    let email = data.email
    let password = data.password
    signIn(email, password)
        .then((value) => {
            return res.send(value)
        })
        .catch((err) => {
            return res.send(err)
        })
})

app.post("/signup", (req, res) => {
    let data = req.body;
    let email = data.email
    let password = data.password
    register(email, password)
        .then((value) => {
            return res.send(value)
        })
        .catch((err) => {
            return res.send(err)
        })

})


app.listen(3000, () => {
    console.log("http://localhost:3000");
})