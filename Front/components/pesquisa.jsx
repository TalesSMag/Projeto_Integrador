import { useForm } from "react-hook-form"

export default function Pesquisa(props) {
  const { register, handleSubmit } = useForm()
  return (
    <form className="row row-cols-lg-auto-4 g-3"
      onSubmit={handleSubmit(props.filtra)}
      onReset={props.mostra}>
      <div className="col-sm-10">
        <input type="text" className="form-control mt-2"
          placeholder="Turma/ Aluno / Titulo"
          {...register("pesq")}/>
      </div>
      <div className="col-sm-2 mt-4">
        <button className="btn" style={{backgroundColor: "#212529", color: "white"}} type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg></button>
      </div>
    </form>
  )
}
