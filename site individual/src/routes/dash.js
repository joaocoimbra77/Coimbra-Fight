var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/cadastrar", function (req, res) {

    dashController.cadastrar(req, res);
});

router.get("/graficos/:idVar", function (req, res) {

    dashController.graficos(req, res);
});

router.get("/kpiFre/:idVar", function (req, res) {

    dashController.kpiFre(req, res);
});

router.get("/kpiInt/:idVar", function (req, res) {

    dashController.kpiInt(req, res);
});

router.get("/kpiMedia/:idVar", function (req, res) {

    dashController.kpiMedia(req, res);
});

module.exports = router;