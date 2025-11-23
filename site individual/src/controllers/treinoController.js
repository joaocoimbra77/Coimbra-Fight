var treinoModel = require("../models/treinoModel");

function listar(req, res) {
    treinoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function name(params) {
    
}

function cadastrar(req, res) {
    var mes = req.body.mesServer;
    var dias_treino = req.body.treinoServer;
    var horas = req.body.horasServer;
    var fkUsuario = req.body.idServer;

    if (mes == undefined) {
        res.status(400).send("Seu mes está undefined!");
    }

    treinoModel.cadastrar(mes,dias_treino,horas,fkUsuario).then(function(resposta){
        res.status(200).send("Treino criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}