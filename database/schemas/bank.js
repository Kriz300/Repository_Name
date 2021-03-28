const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    intereses: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("bank", BankSchema, "Bancos");