import "./app.scss";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="container-pagina">
      <Header />

      <section className="sessao-atividades">
        <p className="atividades-titulo">Conteúdos</p>

        <div className="container-atividades"></div>
      </section>
    </div>
  );
}
