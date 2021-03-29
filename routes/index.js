const router = require("express").Router();

const cae = require("./cae");
const cuotamensual = require("./cuotamensual");
const intereses = require("./intereses");

router.use("/cae", cae);
router.use("/cuotamensual", cuotamensual);
router.use("/intereses", intereses);

module.exports = router;