const router = require("express").Router();

const test = require("./Bancos");

router.use("/Bancos", Bancos);

module.exports = router;