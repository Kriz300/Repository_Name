//interes
let interesinverso = (ci, cf, p) => {
    var i = 100*(-1+Math.pow(cf/ci,-p))
    return i;
}

module.exports = {
    interesinverso
}