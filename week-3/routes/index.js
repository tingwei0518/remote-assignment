const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    res.send("<h1>Hello, My Server!</h1>");
});

router.get("/myName",(req, res) => {
    const name = req.cookies.username;
    if (name){
        res.send(`<h1>Name: ${name}</h1>`);
    }else{
        res.render("name");
    }  
});

router.post("/myName",(req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/myName");
});

router.get("/trackName",(req, res) => {
    let { name } = req.query;
    res.cookie("username", name);
    res.redirect("/myName");
});

module.exports = router;