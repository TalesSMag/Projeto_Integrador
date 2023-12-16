import Link from "next/link"

async function getAgendamento(id) {
  const response = await fetch("http://localhost:3004/Agendamentos/"+id)
  const dado = await response.json()
  // console.log("=".repeat(40))
  console.log(dado)
  // console.log("=".repeat(40))
  return dado
}

export default async function Consulta({params}) {

  const agendamento = await getAgendamento(params.id)
  
  return (
    <div className="container">
      <h2 className="mt-2">Consulta de Livro</h2>
      <form>
        <div className="row">
          <div className="col-sm-6">
            <p className="form-label">Capa do Livro</p>
            <img src={agendamento.capa} alt={`Capa do Livro ${agendamento.capa}`} width={150} height={210} className="mx-auto d-block"/>
          </div>
          <div className="col-sm-12">
            <label htmlFor="titulo" className="form-label">Título do Livro</label>
            <input type="text" className="form-control" id="titulo" value={agendamento.titulo} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="ano" className="form-label">Ano</label>
            <input type="text" className="form-control" id="ano" value={agendamento.ano} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="isbn" className="form-label">ISBN</label>
            <input type="text" className="form-control" id="isbn" value={agendamento.isbn} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="motivo_restricao" className="form-label">Disciplina</label>
            <input type="text" className="form-control" id="motivo_restricao" value={agendamento.motivo_restricao} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="aluno" className="form-label">Nome do aluno:</label>
            <input type="text" className="form-control" id="aluno" value={agendamento.aluno} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="matricula_aluno" className="form-label">Matricula</label>
            <input type="text" className="form-control" id="matricula_aluno" value={agendamento.matricula_aluno} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="professor" className="form-label">Professor</label>
            <input type="text" className="form-control" id="professor" value={agendamento.professor} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="prevista" className="form-label">Prevista</label>
            <input type="text" className="form-control" id="prevista" value={agendamento.prevista} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="turma" className="form-label">Turma</label>
            <input type="text" className="form-control" id="turma" value={agendamento.turma} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="retirada" className="form-label">Retirada</label>
            <input type="text" className="form-control" id="retirada" value={agendamento.retirada} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="entrega" className="form-label">Entrega</label>
            <input type="text" className="form-control" id="entrega" value={agendamento.entrega} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="restricao" className="form-label">Restricao</label>
            <input type="text" className="form-control" id="restricao" value={agendamento.restricao} readOnly />
          </div>
          <div className="col-sm-6">
            <label htmlFor="motivo_restricao" className="form-label">Motivo</label>
            <input type="text" className="form-control" id="motivo_restricao" value={agendamento.motivo_restricao} readOnly />
          </div>
        </div>
        <br />
        <Link className="btn btn-primary float-end mb-3" href="/listagem">Voltar</Link>
      </form>
    </div>
  )
}