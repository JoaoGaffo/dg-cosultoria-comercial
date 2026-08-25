import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../assets/images/LogotipoHorizontalRemoveBG.png'

const NAV_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Método DG', to: '/metodo-dg' },
  { label: 'Soluções', to: '/servicos' },
  { label: 'Livro', to: '/livro' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <NavLink to="/" className="header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="DG Consultoria Comercial" className="header__logo" />
        </NavLink>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contato" className="btn btn-primary header__cta" onClick={() => setMenuOpen(false)}>
            Falar com a equipe
          </NavLink>
        </nav>

        <button className="header__toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
