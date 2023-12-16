
const mysql = require("mysql2/promise");

const Agen = mysql.createPool(process.env.CONNECTION_STRING);

const dataAtual = new Date().toISOString().split("T")[0];

async function selectAgendamentos(){
    const results = await Agen.query("SELECT * FROM agendamentos;");
    return results[0];
}

async function selectAgend(id){
    const results = await Agen.query("SELECT * FROM agendamentos WHERE id=?;", [id]);
    return results[0];
}

async function insertAgend(Agend){
    const values = [Agend.entrega, Agend.prevista, Agend.retirada, Agend.aluno, Agend.matricula, Agend.restricao, Agend.motivo_restricao, Agend.professor, Agend.disciplina, Agend.genero_livro, Agend.autor, Agend.titulo, Agend.isbn, Agend.ano, Agend.capa];
    await Agen.query("INSERT INTO agendamentos (entrega,prevista,retirada,aluno,matricula,restricao,motivo_restricao,professor,disciplina,genero_livro,autor,titulo,isbn,ano,capa) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", values);
}

async function updateAgend(id, Agend){
    const values = [Agend.entrega, Agend.prevista, Agend.retirada, Agend.aluno, Agend.matricula, Agend.restricao, Agend.motivo_restricao, Agend.professor, Agend.disciplina, Agend.genero_livro, Agend.autor, Agend.titulo, Agend.isbn, Agend.ano, Agend.capa, id];
    await Agen.query("UPDATE agendamentos SET entrega=?, prevista=?, retirada=?, aluno=?, matricula=?, restricao=?, motivo_restricao=?, professor=?, disciplina=?, genero_livro=?, autor=?, titulo=?, isbn=?, ano=?, capa=?  WHERE id=?", values);
}

async function deleteAgend(id){
    const values = [id];
    await Agen.query("DELETE FROM agendamentos WHERE id=?", values);
}
/*
async function loginAgend(adm){
    const values = [adm.usuario, adm.senha];
    const results = await Agen.query("SELECT * FROM agendamentos WHERE usuario=?, senha=?;", values);
    return results[0];
}
*/
module.exports = {
    selectAgendamentos,
    selectAgend,
    insertAgend,
    updateAgend,
    deleteAgend
}