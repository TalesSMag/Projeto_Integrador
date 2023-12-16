import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AdmContext } from "@/contexts/adm";

export default function ItemLista(props) {
  const { admId } = useContext(AdmContext);

  function confirmaExclusao(id, titulo) {
    // if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
    //   props.exclui(id)
    // }
    Swal.fire({
      title: `Confirma Exclusão de Agendamento "${titulo}"?`,
      text: "Esta operação não poderá ser desfeita",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim. Excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.exclui(id);
        Swal.fire("Excluído!", "Livro excluído com sucesso", "success");
      }
    });
  }

  return (
    <tr>
      <td>
        <img
          src={props.agendamento.capa}
          alt={`Capa de ${props.agendamento.titulo}`}
          width={80}
        />
      </td>
      <td className={props.agendamento.destaque ? "fw-bold" : ""}>
        {props.agendamento.titulo}
      </td>
      
      <td className={props.agendamento.destaque ? "fw-bold" : ""}>
        {props.agendamento.aluno}
      </td>
      
      
      <td className={props.agendamento.destaque ? "fw-bold" : ""}>
        {props.agendamento.retirada}
      </td>
      <td className={props.agendamento.destaque ? "fw-bold" : ""}>
        {props.agendamento.entrega}
      </td>
      <td className={props.agendamento.destaque ? "fw-bold" : ""}>
        {props.agendamento.prevista}
      </td>
      
      

      {admId && (
        <td>
          <i
            className="bi bi-trash-fill text-danger"
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={() =>
              confirmaExclusao(props.agendamento.id, props.agendamento.titulo)
            }
            title="Excluir"
          ></i>
          <i
            className="bi bi-pencil-square text-warning ms-2"
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={props.altera}
            title="Alterar"
          ></i>
          <i
            className="bi bi-search text-primary ms-2"
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={props.consulta}
            title="Consultar"
          ></i>
        </td>
      )}
    </tr>
  );
}
