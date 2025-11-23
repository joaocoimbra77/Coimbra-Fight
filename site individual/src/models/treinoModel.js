var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT idTreino, mes, dias_treino FROM treino JOIN usuario ON fkUsuario=idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(mes,dias_treino,horas,fkUsuario) {
    var instrucao = `
        INSERT INTO treino (mes, dias_treino, horas, fkUsuario) VALUES (${mes},${dias_treino},${horas},${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};