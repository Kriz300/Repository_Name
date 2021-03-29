//interes
let interesinverso = (ci, cf, p) => {
    var i = 100*(-1+Math.pow(cf/ci,(1/p)));
    return i;
}

module.exports = {
    interesinverso
}