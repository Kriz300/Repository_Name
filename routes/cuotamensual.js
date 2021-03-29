const router = require("express").Router();
const excel = require("@formulajs/formulajs");
const bancos = require("../scripts/bancos");
const interesInverso = require("../scripts/interesinverso");

//intereses
router.get("/:plazo&:monto&:valor_cuota", async (req, res) => {
	var tabla = [], cae;

	var capFinal = 12 * parseInt(req.params["valor_cuota"]);
	var intereses = interesInverso.interesinverso(parseInt(req.params["monto"]), capFinal, parseInt(req.params["plazo"]));

	cae = excel.RATE(parseInt(req.params["plazo"]), parseInt(req.params["valor_cuota"]), (parseInt(req.params["monto"])*-1))*1200;
	tabla.push(["Credito Personalizado (Cuota Mensual: " + req.params["valor_cuota"] + ")", ((cae).toFixed(2))+"%", parseInt(req.params["valor_cuota"]), (intereses).toFixed(2), parseInt(req.params["valor_cuota"])*parseInt(req.params["plazo"])]);
	
	var temp = await bancos.bancos(parseInt(req.params["monto"]), parseInt(req.params["plazo"]));
	temp.forEach(element => {
		tabla.push(element);
	});
	
    res.send(tabla);
});

module.exports = router;