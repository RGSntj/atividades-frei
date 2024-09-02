import "./styles.scss";

import logo from "../../assets/success.png";

export function Header() {
  return (
    <header className="container-header">
      <img className="logo" src={logo} alt="Logo" />
      <span className="title-header">Atividades</span>
    </header>
  );
}
