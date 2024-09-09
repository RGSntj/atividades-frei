import "./app.scss";
import { Card } from "./components/card";
import { Header } from "./components/header";

export function App() {
  const cards = [
    {
      titulo: "Componentes",
      assuntos: "- Objetos e listas de Objetos.",
      data: "26/Agosto",
      status: "Completo",
    },
    {
      titulo: "Renderização e Efeito",
      assuntos: "- Componentes na renderização.",
      data: "2/Setembro",
      status: "Em andamento",
    },
    {
      titulo: "Consumindo APIs - Parte 1",
      assuntos: "- Componentes na renderização.",
      data: "9/Setembro",
      entregaTrabalho: true,
    },
    {
      titulo: "Prova Prática e Teórica",
      assuntos: "- Criando um projeto React.",
      data: "16/Setembro",
      status: "Evento",
    },
  ];

  return (
    <div className="container-pagina">
      <Header />

      <section className="sessao-atividades">
        <p className="atividades-titulo">Conteúdos</p>

        <div className="container-atividades">
          {cards.map((c) => {
            return (
              <Card
                titulo={c.titulo}
                assuntos={c.assuntos}
                data={c.data}
                status={c.status}
                entregaTrabalho={c.entregaTrabalho}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
