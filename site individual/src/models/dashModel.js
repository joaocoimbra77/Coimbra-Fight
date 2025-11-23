var database = require("../database/config")

function graficos(fkUsuario) {
    var instrucao = `
        select mes, SUM(dias_treino) as dias, SUM(horas) as horas from treino where fkUsuario = ${fkUsuario} group by mes order by mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiFre(fkUsuario) {
    var instrucao = `
        select mes,SUM(dias_treino) as dias, SUM(horas) as hora from treino where fkUsuario = ${fkUsuario} group by mes order by dias desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiInt(fkUsuario) {
    var instrucao = `
        select mes, case when dias_treino < 8 then 'Baixa' when dias_treino < 15 then 'Boa' else 'Alta' end as intensidade from treino where fkUsuario = ${fkUsuario} order by mes desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiMedia(fkUsuario) {
    var instrucao = `
        select round(sum(horas) / count(distinct mes), 0) as media from treino where fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficos,
    kpiFre,
    kpiInt,
    kpiMedia
};