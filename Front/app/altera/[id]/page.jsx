"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Alteracao() {
  const params = useParams();
  //  console.log(params)
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    async function getAgendamento() {
      const response = await fetch(
        "http://localhost:3004/agendamentos/" + params.id
      );
      const dado = await response.json();
      reset({
        titulo: dado.titulo,
        ano: dado.ano,
        isbn: dado.isbn,
        aluno: dado.aluno,
        disciplina: dado.disciplina,
        genero_livro: dado.genero_livro,
        professor: dado.professor,
        entrega: dado.entrega,
        retirada: dado.retirada,
        prevista: dado.prevista,
        restricao: dado.restricao,
        motivo_restricao: dado.motivo_restricao,
        turma: dado.turma,
        matricula_aluno: dado.matricula_aluno,
        capa: dado.capa
      });
    }
    getAgendamento();
  }, []);

  async function alteraDados(data) {
    const agendamento = await fetch(
      "http://localhost:3004/agendamentos/" + params.id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...data }),
      }
    );
    if (agendamento.status == 200) {
      // alert("Ok! Filme cadastrado com sucesso")
      toast.success("Ok! Informações de agendamento alterado com sucesso");
    } else {
      // alert("Erro...")
      toast.error("Erro... Não foi possível concluir a alteração");
    }
  }

  return (
    <div className="container">
      <h2 className="mt-2">Cadastro de Agendamentos</h2>
      <form onSubmit={handleSubmit(alteraDados)}>

        <div className="container">
          <h4 className="mt-5 mb-2">Dados do Livro</h4>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              {...register("titulo")}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-6">
            <label htmlFor="disciplina" className="form-label">
              Disciplina
            </label>
            <select
              id="disciplina"
              className="form-select"
              {...register("classif")}
              required
            >
              <option value="portugues">Selecione</option>
              <option value="portugues">Lingua Portuguesa</option>
              <option value="matematica">Matematica</option>
              <option value="historia">Historia</option>
              <option value="geografia">Geografia</option>
              <option value="geometria">Geometria</option>
              <option value="biologia">Biologia</option>
              <option value="fisica">Fisica</option>
              <option value="quimica">Quimica</option>
              <option value="filosofia">Filosofia</option>
              <option value="sociologia">Sociologia</option>
              <option value="ingles">Ingles</option>
              <option value="artes">Artes</option>
              <option value="espanhol">Espanhol</option>
              <option value="religiao">Ensino Religioso</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              {...register("isbn")}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="ano" className="form-label">
              Ano
            </label>
            <input
              type="text"
              className="form-control"
              id="ano"
              {...register("ano")}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-12">
            <label htmlFor="capa" className="form-label">
              Foto da Capa
            </label>
            <input
              type="url"
              className="form-control"
              id="capa"
              {...register("capa")}
              required
            />
          </div>
        </div>

        <div className="container">
          <h4 className="mt-5 mb-2">Dados do Aluno</h4>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <label htmlFor="aluno" className="form-label">
              Nome do aluno
            </label>
            <input
              type="text"
              className="form-control"
              id="aluno"
              {...register("aluno")}
              required
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="turma" className="form-label">
              Turma
            </label>
            <input
              type="turma"
              className="form-control"
              id="turma"
              {...register("turma")}
              required
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="matricula_aluno" className="form-label">
              Matricula
            </label>
            <input
              type="text"
              className="form-control"
              id="matricula_aluno"
              {...register("matricula_aluno")}
              required
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="professor" className="form-label">
              Professor
            </label>
            <input
              type="text"
              className="form-control"
              id="professor"
              {...register("professor")}
            />
          </div>
        </div>

        <div className="container">
          <h4 className="mt-5 mb-2">Dados de Retirada</h4>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="retirada" className="form-label">
              Data de Retirada
            </label>
            <input
              type="date"
              className="form-control"
              id="retirada"
              {...register("retirada")}
              required
            />
          </div>
            <div className="col-sm-4">
              <label htmlFor="prevista" className="form-label">
                Data prevista 
              </label>
              <input
                type="date"
                className="form-control"
                id="prevista"
                {...register("prevista")}
                required
                />
            </div>
          <div className="col-sm-4">
            <label htmlFor="entrega" className="form-label">
              Data de Entrega
            </label>
            <input
              type="date"
              className="form-control"
              id="entrega"
              {...register("entrega")}
              required
            />
          </div>
      </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="restricao" className="form-label">
              Restrição
            </label>
            <input
              type="text"
              className="form-control"
              id="restricao"
              {...register("restricao")}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="motivo_restricao" className="form-label">
              Motivo:
            </label>
            <input
              type="text"
              className="form-control"
              id="motivo_restricao"
              {...register("motivo_restricao")}
            />
          </div>
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary me-3 m-3" />
        <input
          type="button"
          value="Limpar"
          className="btn btn-danger"
          onClick={() => reset()}
        />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
