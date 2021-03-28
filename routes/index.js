const router = require("express").Router();

const Bancos = require("./Bancos");

router.use("/Bancos", Bancos);

module.exports = router;