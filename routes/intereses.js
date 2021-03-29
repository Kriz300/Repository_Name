const router = require("express").Router();
const excel = require("@formulajs/formulajs");
const bancos = require("../scripts/bancos");
const interesCompuesto = require("../scripts/interescompuesto");

//cuota mensual
router.get("/:plazo&:monto&:interes", (req, res) => {
	var tabla = [], cae;

	console.log(req.params["plazo"]);
	console.log(req.params["monto"]);
	console.log(req.params["interes"]);
	console.log(req.params);


	var capFinal = interesCompuesto.interescompuesto(parseInt(req.params["monto"]), parseFloat(req.params["interes"]),parseInt(req.params["plazo"]));
	var valor_cuota = capFinal/parseInt(req.params["plazo"]);

	cae = excel.RATE(parseInt(req.params["plazo"]), valor_cuota, (parseInt(req.params["monto"])*-1))*1200;
	tabla.push(["Credito Personalizado (Interes)", ((cae).toFixed(2))+"%", valor_cuota, parseFloat(req.params["interes"]), valor_cuota*parseInt(req.params["plazo"])]);

    res.send(tabla);
});

module.exports = router;