const router = require("express").Router();
const exel = require("@formulajs/formulajs");
const mongoose = require('mongoose');
const bank = require('../database/schemas/bank');


router.get("/", async (req, res) => {
    const banks = await bank.find({},(err, bancos) => {
        if (err) console.error(err)
        console.log(bancos);
        return;
    });
    res.send(banks);
});

module.exports = router;