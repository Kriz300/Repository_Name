const router = require("express").Router();

const bancos = require("./bancos");

router.use("/bancos", bancos);

module.exports = router;