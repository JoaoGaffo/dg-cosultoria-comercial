import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/images/logoRemoveBG.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src={logo}
            className="footer__logo"
            alt="Logotipo da Dayane Gaffo Consultoria Comercial"
          />
          <p>
            Consultoria comercial que estrutura, organiza e escala vendas — com
            diagnóstico próprio para cada operação.
          </p>
        </div>

        <nav className="footer__col">
          <h4 className="eyebrow">Navegação</h4>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/servicos">Serviços</NavLink>
            </li>
            {/* <li><NavLink to="/portfolio">Cases</NavLink></li> */}
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h4 className="eyebrow">Contato</h4>
          <ul>
            <li>
              <a
                href="https://wa.me/5513996805974"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp comercial
              </a>
            </li>
            <li>
              <a href="mailto:consultoriacomercial.dg@gmail.com">
                consultoriacomercial.dg@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/consultoriacomercial.dg"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {year} Dayane Gaffo Consultoria Comercial. Todos os direitos
          reservados.
        </p>
        <p>CNPJ 67.622.243/0001-32</p>
      </div>
    </footer>
  );
}