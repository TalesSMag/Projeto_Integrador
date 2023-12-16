import Link from "next/link";

export default function Titulo() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src="../logo-Castro-Alves.png"
            alt="Logo"
            width="300"
            height="80"
            className="d-inline-block align-text-top"
          />
          <h2 className="float-end mt-2 ms-2 text-white"></h2>
        </Link>
        <ul className="navbar-nav ms-auto mb-6 mb-lg-1">
          <li className="nav-item">
            <Link className="nav-link text-white fs-3 mx-5" href="/listagem">
              Agendamentos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fs-3 mx-5" href="/cadastro">
              Agendar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fs-3 mx-5" href="/config">
              Configurações
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
