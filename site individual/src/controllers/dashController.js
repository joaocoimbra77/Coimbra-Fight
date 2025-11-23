var dashModel = require("../models/dashModel");

function graficos(req, res) {
    var fkUsuario = req.params.idVar;
    dashModel.graficos(fkUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiFre(req, res) {
    var fkUsuario = req.params.idVar;
    dashModel.kpiFre(fkUsuario).then(function(resultado1){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado1);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiInt(req, res) {
    var fkUsuario = req.params.idVar;
    dashModel.kpiInt(fkUsuario).then(function(resultado2){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado2);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiMedia(req, res) {
    var fkUsuario = req.params.idVar;
    dashModel.kpiMedia(fkUsuario).then(function(resultado3){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado3);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    graficos,
    kpiFre,
    kpiInt,
    kpiMedia
}