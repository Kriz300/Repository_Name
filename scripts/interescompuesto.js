//cuota
let interescompuesto = (ci, i, p) => {
    var cf = ci * Math.pow(1+ i / 100, p);
    return cf;
}

module.exports = {
    interescompuesto
}