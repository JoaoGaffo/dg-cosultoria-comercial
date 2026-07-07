import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/images/LogotipoHorizontalRemoveBG.png'

const NAV_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  // { label: 'Cases', to: '/portfolio' },
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
          <img className="header__logo" src={logo} alt="Logotipo da Dayane Gaffo Consultoria Comercial" />
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

        <button
          className="header__toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}