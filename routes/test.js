const router = require("express").Router();
const exel = require("@formulajs/formulajs");

router.get("/", (req, res) => {
    res.send((exel.SUM([1, 2 , 3]).toString()));
});

module.exports = router;