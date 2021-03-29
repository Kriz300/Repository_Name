const excel = require("@formulajs/formulajs");
const mongoose = require('mongoose');
const bank = require('../database/schemas/bank');
const monto_cuotas = require("./interescompuesto");

let bancos = async (monto, plazo) => {
    var flag, cae, valor_cuota;
    var tabla = [];

    if (monto < 1000000) {
        flag = 0;
    } 
    else if (1000000 <= monto < 5000000) {
        flag = 1;
    } 
    else if (5000000 <= monto < 20000000) {
        flag = 2;
    }

    const banks = await bank.find({},(err) => {
        if (err) console.error(err)
        return;
    });

    banks.forEach(bank => {
        valor_cuota = monto_cuotas.interescompuesto(monto, bank["intereses"][flag], plazo)/plazo;
        cae = excel.RATE(plazo, valor_cuota, (monto*-1))*1200;
        tabla.push([bank.nombre, ((cae).toFixed(2))+"%", (valor_cuota).toFixed(0), (bank["intereses"][flag]).toString() + "%", (valor_cuota*plazo).toFixed(0)]);
    });
    return tabla;
}

module.exports = {
    bancos
}