import "./styles.scss";

export function Card({ titulo, assuntos, data, status, entregaTrabalho }) {
  let corPrimaria = "";
  let corSegundaria = "";

  switch (status) {
    case "Completo":
      corPrimaria = "#A3E5BA";
      corSegundaria = "#EFFBE2";
      break;
    case "Em andamento":
      corPrimaria = "#DCA3E5";
      corSegundaria = "#EDE2FB";
      break;
    case "Evento":
      corPrimaria = "#F6E448";
      corSegundaria = "#FAF4C1";
      break;
    default:
      corPrimaria = "#C3C3C3";
      corSegundaria = "#F2F2F2";
      break;
  }

  return (
    <div className="card" style={{ backgroundColor: corSegundaria }}>
      <div className="card-cabecalho" style={{ backgroundColor: corPrimaria }}>
        <h2>{titulo}</h2>
      </div>
      <div className="card-conteudo">
        <h3>Assuntos</h3>
        <pre>{assuntos}</pre>
      </div>
      <p className="tag">{data}</p>
      {entregaTrabalho && <p className="tag">Entrega Trab.</p>}
    </div>
  );
}
