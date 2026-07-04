
import { useState } from 'react'
import '../styles/Contato.css'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', empresa: '', mensagem: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const texto = encodeURIComponent(
      `Olá, Dayane! Me chamo ${form.nome}${form.empresa ? `, da empresa ${form.empresa}` : ''}. ${form.mensagem}`
    )
    window.open(`https://wa.me/5513996805974?text=${texto}`, '_blank')
  }

  return (
    <>
      <section className="contato-hero">
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1>
            Vamos estruturar a sua <span className="gold-text">operação comercial</span> juntas.
          </h1>
          <p className="contato-hero__lead">
            Conte um pouco sobre a sua empresa e o seu momento atual — a resposta acontece
            diretamente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="section section-light contato">
        <div className="container contato__grid">
          <form className="contato-form" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={handleChange}
            />

            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nome da sua empresa"
              value={form.empresa}
              onChange={handleChange}
            />

            <label htmlFor="mensagem">Conte sobre o seu momento comercial</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              required
              placeholder="Hoje qual é o principal desafio nas suas vendas?"
              value={form.mensagem}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary">Enviar pelo WhatsApp</button>
          </form>

          <aside className="contato-info">
            <h3 className="eyebrow">Outros canais</h3>
            <ul>
              <li>
                <span>WhatsApp</span>
                <a href="https://wa.me/5513996805974" target="_blank" rel="noreferrer">
                  +55 13 99680-5974
                </a>
              </li>
              <li>
                <span>E-mail</span>
                <a href="mailto:consultoriacomercial.dg@gmail.com">consultoriacomercial.dg@gmail.com</a>
              </li>
              <li>
                <span>Instagram</span>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  @consultoriacomercial.dg
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}