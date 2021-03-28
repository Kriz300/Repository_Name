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
    banco = new bank({
        nombre: "Prueba",
        VIP: [1, 2, 3]
    });

    banco.save()
        .then(result => console.log(result))
        .catch(err => console.error(err));
    res.send(banks);
});

module.exports = router;