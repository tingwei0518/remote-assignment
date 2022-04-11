const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    const { number } = req.query;

    if ( !number ){
        return res.send("<h1>Lack of Parameter</h1>");    
    } else if ( !(/^[0-9]*[1-9][0-9]*$/.test( number )) ) {
        return res.send("<h1>Wrong Parameter</h1>");
    } else {
        const trueNumber = Number(number) ;
        const answer = trueNumber * (trueNumber + 1) / 2;
        return res.send(`<h1>${answer}</h1>`);
    }
});

module.exports = router;