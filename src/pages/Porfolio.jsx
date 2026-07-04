import { NavLink } from 'react-router-dom'
import '../styles/Portfolio.css'

const CASES = [
  {
    segmento: 'Serviços B2B',
    desafio: 'Equipe comercial sem processo definido e resultados imprevisíveis mês a mês.',
    entrega: 'Diagnóstico completo, desenho de funil comercial e indicadores de acompanhamento.',
  },
  {
    segmento: 'Vendas high ticket',
    desafio: 'Closers atuando sem script, com baixa taxa de conversão em propostas de alto valor.',
    entrega: 'Treinamento de equipe de Closers e estruturação de processo de negociação.',
  },
  {
    segmento: 'Operação em crescimento',
    desafio: 'Crescimento dependente de poucas pessoas-chave, sem padronização de processos.',
    entrega: 'Estruturação de processos replicáveis e ritmo de gestão com CRM e dashboards.',
  },
]

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-hero">
        <div className="container">
          <p className="eyebrow">Cases</p>
          <h1>
            Resultados construídos com <span className="gold-text">diagnóstico</span>, processo e
            acompanhamento próximo.
          </h1>
          <p className="portfolio-hero__lead">
            Cada projeto nasce de uma realidade diferente. Por isso, em vez de fórmulas prontas,
            mostramos aqui o tipo de transformação que conduzimos junto às empresas.
          </p>
        </div>
      </section>

      <section className="section section-light cases">
        <div className="container cases__grid">
          {CASES.map((c) => (
            <article className="case-card" key={c.segmento}>
              <span className="eyebrow">{c.segmento}</span>
              <h3>Desafio</h3>
              <p>{c.desafio}</p>
              <h3>Entrega</h3>
              <p>{c.entrega}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section concorrencia">
        <div className="container concorrencia__inner">
          <p className="eyebrow">Diferencial</p>
          <h2>
            Diagnóstico gratuito antes da recomendação — sempre.
          </h2>
          <p>
            Cada empresa possui desafios, objetivos e realidades diferentes. Por isso, a
            consultoria não trabalha com soluções genéricas ou fórmulas prontas. Antes de qualquer
            recomendação, é realizado um diagnóstico detalhado da operação comercial para
            compreender processos, gargalos e oportunidades específicas do negócio — e, a partir
            disso, desenvolvidas estratégias personalizadas.
          </p>
          <NavLink to="/contato" className="btn btn-primary">Quero um diagnóstico gratuito</NavLink>
        </div>
      </section>
    </>
  )
}