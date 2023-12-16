'use client'
import { useEffect, useState } from "react"
import ItemLista from "@/components/ItemLista"
import { useRouter } from "next/navigation"
import Pesquisa from "@/components/Pesquisa"
import { useContext } from "react"
import { AdmContext } from "@/contexts/adm"

export default function Listagem() {
  const { admId } = useContext(AdmContext)
  
  const [agendamentos, setAgendamentos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [opcaoOrdenacao, setOpcaoOrdenacao] = useState('')

  const router = useRouter()

  useEffect(() => {
    async function getAgendamentos() {
      const response = await fetch("http://localhost:3004/agendamentos")
      const dados = await response.json()
      setAgendamentos(dados)
      setIsLoading(false)
    }
    getAgendamentos()
  }, [])

  async function excluiAgendamento(id) {
    const response = await fetch("http://localhost:3004/agendamentos/" + id, {
      method: "DELETE"
    })
    const novosDados = agendamentos.filter(agendamento => agendamento.id != id)
    setAgendamentos(novosDados)
  }

  async function destacaAgendamento(id, dest_atual) {
    await fetch("http://localhost:3004/agendamentos/" + id,
      {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ destaque: !dest_atual })
      })
      const indiceAlterado = agendamentos.findIndex(agendamento => agendamento.id == id)
      const novosDados = [...agendamentos]
      novosDados[indiceAlterado].destaque = !dest_atual
      setAgendamentos(novosDados)
  }

  const listaAgendamentos = agendamentos.map(agendamento => (
    <ItemLista key={agendamento.id}
    agendamento={agendamento}
      exclui={() => excluiAgendamento(agendamento.id)}
      altera={() => router.push('altera/' + agendamento.id)}
      consulta={() => router.push('consulta/' + agendamento.id)}
      destaca={() => destacaAgendamento(A.id, agendamento.destaque)}
    />
  ))

  function BuscaAgendamentos(data) {
    const pesquisa = data.pesq.toUpperCase()
    async function getAgendamento() {
      const response = await fetch("http://localhost:3004/agendamentos")
      const dados = await response.json()

      const novosDados = dados.filter(agendamentos =>
        agendamentos.titulo.toUpperCase().includes(pesquisa) || agendamentos.aluno.toUpperCase().includes(pesquisa) //|| agendamentos.turma.toUpperCase().includes(pesquisa)
      )
      setAgendamentos(novosDados)
    }
    getAgendamento()
  }
  

  function ordenarTitulo() {
    const agendamentosOrdenados = [...agendamentos].sort((a, b) => a.titulo.localeCompare(b.titulo));
    setAgendamentos(agendamentosOrdenados);
  }

  function ordenarData() {
    const agendamentosOrdenados = [...agendamentos].sort((a, b) => a.retirada.localeCompare(b.retirada));
    setAgendamentos(agendamentosOrdenados);
  }

  function ordenarAluno() {
    const agendamentosOrdenados = [...agendamentos].sort((a, b) => a.aluno.localeCompare(b.aluno));
    setAgendamentos(agendamentosOrdenados);
  }

  function ordenarAgendamentos() {
    switch (opcaoOrdenacao) {
      case 'titulo':
        ordenarTitulo();
        break;
      case 'retirada':
        ordenarData();
        break;
      case 'aluno':
        ordenarAluno();
        break;
      default:
        mostraTodos();
        break;
    }
  }

  useEffect(() => {
    ordenarAgendamentos();
  }, [opcaoOrdenacao]);
  
  function mostraTodos() {
    async function getAgendamentos() {
      const response = await fetch("http://localhost:3004/agendamentos");
      const dados = await response.json();
      setAgendamentos(dados);
      setIsLoading(false);
    }
    getAgendamentos();
  }
  


  if (isLoading) {
    return (
      <div className="container">
        <h2>Listagem de Agendamentos</h2>
        <h5>Aguarde... Carregando os dados</h5>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="col-sm-6 mt-2">Listagem de Agendamentos</h2>
        <div className="col-sm-6 mt-2"> 
          <Pesquisa filtra={BuscaAgendamentos} mostra={mostraTodos}/>
        </div>
          <div className="col-sm-12 mt-3">
            <select className="form-select" value={opcaoOrdenacao} onChange={(e) => setOpcaoOrdenacao(e.target.value)}>
              <option value="">Selecione</option>
              <option value="titulo">Título</option>
              <option value="retirada">Recentes</option>
            </select>
          </div>
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Capa</th>
            <th>Título do Livro</th>
            <th>Aluno</th>
            <th>Retirada</th>
            <th>Entrega</th>
            <th>Previsão de entrega</th>
            
            {admId && 
            <th>Ações</th>
            }
          </tr>
        </thead>
        <tbody>
          {listaAgendamentos}
        </tbody>
      </table>
    </div>
  )
}


