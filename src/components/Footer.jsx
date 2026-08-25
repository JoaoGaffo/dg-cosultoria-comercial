import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__marca">DG Consultoria Comercial</p>
          <p className="footer__submarca">Método DG — Arquitetura Comercial</p>
          <p className="footer__desc">Estratégia, processos, desenvolvimento e gestão para construir operações comerciais de alta performance.</p>
        </div>
        <nav className="footer__col">
          <h4 className="eyebrow">Navegação</h4>
          <ul>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/metodo-dg">Método DG</NavLink></li>
            <li><NavLink to="/solucoes">Soluções</NavLink></li>
            <li><NavLink to="/livro">Livro</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </nav>
        <div className="footer__col">
          <h4 className="eyebrow">Contato</h4>
          <ul>
            <li><a href="https://wa.me/+5513996805974" target="_blank" rel="noreferrer">WhatsApp comercial</a></li>
            <li><a href="mailto:consultoriacomercial.dg@gmail.com">consultoriacomercial.dg@gmail.com</a></li>
            <li><a href="https://www.instagram.com/consultoriacomercial.dg" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>© {year} Dayane Gaffo Consultoria Comercial. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
