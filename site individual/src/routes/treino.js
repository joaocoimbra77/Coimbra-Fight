var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    treinoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    treinoController.listar(req, res);
});

module.exports = router;