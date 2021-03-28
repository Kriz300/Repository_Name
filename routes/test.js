const router = require("express").Router();
const exel = require("@formulajs/formulajs");
const mongoose = require('mongoose');
const bank = require('../database/schemas/bank.js');


router.get("/", async (req, res) => {
    const banks = await bank.find({},(err) => {
        if (err) console.error(err)
    });
    res.send(banks);
});

module.exports = router;