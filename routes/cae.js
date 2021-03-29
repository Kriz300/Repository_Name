const router = require("express").Router();
const bancos = require("../scripts/bancos");

//CAE
router.get("/:plazo&:monto", async (req, res) => {
    var tabla = await bancos.bancos(parseInt(req.params["monto"]), parseInt(req.params["plazo"]));
    res.send(tabla);
});

module.exports = router;