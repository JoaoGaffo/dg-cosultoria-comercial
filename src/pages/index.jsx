import { NavLink } from "react-router-dom";
import "../styles/index.css";
import dayaneImage from "../assets/images/dayaneHero.png";
import livroCapa from "../assets/images/capa-livro.png";

const PILARES = [
  {
    title: "Diagnóstico",
    text: "Antes de qualquer recomendação, mapeamos processos, gargalos e oportunidades reais da sua operação.",
  },
  {
    title: "Estrutura",
    text: "Construímos processos comerciais sob medida, pensados para o momento e a realidade da sua empresa.",
  },
  {
    title: "Performance",
    text: "Implementamos indicadores e ritmos de gestão que dão previsibilidade e elevam os resultados do time.",
  },
  {
    title: "Escala",
    text: "Estruturamos o crescimento para que ele seja sustentável — sem depender de heróis individuais.",
  },
];

const ECOSSISTEMA = [
  {
    titulo: "Consultoria",
    descricao:
      "Diagnóstico, estruturação e implementação do Método DG dentro da operação comercial.",
    link: "/servicos",
  },
  {
    titulo: "Treinamentos",
    descricao:
      "Desenvolvimento de vendedores, closers, representantes e equipes comerciais.",
    link: "/servicos",
  },
  {
    titulo: "Livro",
    descricao:
      "DG — Arquitetura Comercial. A base conceitual e estratégica do Método DG em uma obra completa.",
    link: "/livro",
  },
  {
    titulo: "Playbook",
    descricao:
      "Aplicação prática dos fundamentos, processos e ferramentas do Método DG.",
    link: "/contato",
  },
  {
    titulo: "Blueprint",
    descricao:
      "Estrutura orientada para construir o próprio script e processo comercial.",
    link: "/contato",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="eyebrow">Método DG — Arquitetura Comercial</p>
            <h1 className="hero__title">
              Vender bem
              <br />
              não é talento.
              <br />
              <span className="gold-text">É processo.</span>
            </h1>
            <p className="hero__lead">
              Uma metodologia criada a partir de mais de 20 anos de experiência
              em vendas, gestão e estruturação comercial para transformar
              conhecimento em processo, processo em performance e performance em
              resultados previsíveis.
            </p>
            <p className="hero__autor">
              Dayane Gaffo — Fundadora do Método DG | Consultora Comercial |
              Autora
            </p>
            <div className="hero__actions">
              <NavLink to="/metodo-dg" className="btn btn-primary">
                Conheça o Método DG
              </NavLink>
              <NavLink to="/contato" className="btn btn-outline">
                Agendar diagnóstico
              </NavLink>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img className="hero__image" src={dayaneImage} alt="Dayane Gaffo" />
          </div>
        </div>
      </section>

      {/* O MÉTODO DG */}
      <section className="section metodo">
        <div className="container metodo__grid">
          <div>
            <p className="eyebrow">O Método DG</p>
            <h2 className="metodo__title">
              Arquitetura comercial para transformar vendas em processo.
            </h2>
            <p className="metodo__text">
              O Método DG nasce de mais de duas décadas de experiência prática
              em vendas, liderança e estruturação de operações comerciais.
            </p>
            <p className="metodo__text">
              Uma metodologia desenvolvida para organizar toda a jornada
              comercial — da estratégia à execução — conectando processos,
              pessoas, abordagem, indicadores e gestão.
            </p>
            <p className="metodo__text">
              Mais do que ensinar técnicas de vendas, o Método DG estrutura como
              uma operação comercial deve pensar, funcionar, vender e evoluir.
            </p>
            <NavLink to="/metodo-dg" className="btn btn-primary metodo__cta">
              Conheça o Método DG
            </NavLink>
          </div>
          <div className="metodo__numeros">
            <div className="metodo-num">
              <span>+20</span>
              <p>anos de experiência prática</p>
            </div>
            <div className="metodo-num">
              <span>5</span>
              <p>pilares da arquitetura comercial</p>
            </div>
            <div className="metodo-num">
              <span>1</span>
              <p>metodologia própria</p>
            </div>
          </div>
        </div>
      </section>

      {/* DA METODOLOGIA À APLICAÇÃO */}
      <section className="section section-light pilares">
        <div className="container">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="pilares__title">Da metodologia à aplicação.</h2>
          <p className="pilares__sub">
            Cada operação possui desafios diferentes. Por isso, o Método DG não
            entrega fórmulas prontas: utiliza diagnóstico, estrutura,
            desenvolvimento e gestão para construir processos comerciais
            aplicáveis à realidade de cada negócio.
          </p>
          <div className="pilares__grid">
            {PILARES.map((p) => (
              <article className="pilar-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA MÉTODO DG */}
      <section className="section ecossistema">
        <div className="container">
          <p className="eyebrow">Ecossistema Método DG</p>
          <h2 className="ecossistema__title">
            Uma metodologia. Diferentes formas de transformar sua operação
            comercial.
          </h2>
          <div className="ecossistema__grid">
            {ECOSSISTEMA.map((item) => (
              <article className="eco-card" key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <NavLink to={item.link} className="eco-card__link">
                  Conhecer →
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section section-light paraquem">
        <div className="container">
          <p className="eyebrow">Para quem é</p>
          <h2 className="paraquem__title">
            Para quem quer transformar vendas em processo.
          </h2>
          <p className="paraquem__lead">
            Empresários, gestores comerciais, vendedores, closers,
            representantes e profissionais que desejam construir uma operação
            comercial mais estruturada, profissional e previsível.
          </p>
          <div className="paraquem__grid">
            <article className="paraquem-card">
              <h3>Para empresas</h3>
              <p>
                Estruturação da operação, processos, indicadores, gestão e
                desenvolvimento da equipe. Pare de depender de talento
                individual e construa uma operação que pode ser ensinada,
                acompanhada e aperfeiçoada.
              </p>
              <NavLink
                to="/servicos"
                className="btn btn-outline paraquem-card__cta"
              >
                Ver soluções
              </NavLink>
            </article>
            <article className="paraquem-card">
              <h3>Para profissionais de vendas</h3>
              <p>
                Método, abordagem, condução comercial, negociação, fechamento e
                follow-up. Desenvolva sua capacidade de diagnóstico e aprenda a
                conduzir cada etapa do processo com mais segurança e
                profissionalismo.
              </p>
              <NavLink
                to="/servicos"
                className="btn btn-outline paraquem-card__cta"
              >
                Ver treinamentos
              </NavLink>
            </article>
          </div>
        </div>
      </section>

      {/* DAYANE — AUTORIDADE */}
      <section className="section autoridade">
        <div className="container autoridade__grid">
          <div className="autoridade__foto-wrap">
            <img src={dayaneImage} alt="Dayane Gaffo" />
          </div>
          <div>
            <p className="eyebrow">Dayane Gaffo</p>
            <h2>Experiência prática transformada em método.</h2>
            <div className="autoridade__items">
              <span>+20 anos em vendas e gestão comercial</span>
              <span>
                Experiência na liderança de equipes comerciais de alta
                performance
              </span>
              <span>Fundadora do Método DG</span>
              <span>Consultora Comercial</span>
              <span>
                Autora de <em>DG — Arquitetura Comercial</em>
              </span>
            </div>
            <NavLink to="/sobre" className="btn btn-primary">
              Conheça a trajetória
            </NavLink>
          </div>
        </div>
      </section>

      {/* LIVRO */}
      <section className="section-light livro-home">
        <div className="container livro-home__inner">
          <div className="livro-home__cover" aria-hidden="true">
            <img src={livroCapa} alt="Capa do livro DG — Arquitetura Comercial" />
          </div>
          <div className="livro-home__text">
            <p className="eyebrow">Livro</p>
            <h2>DG — Arquitetura Comercial</h2>
            {/* <img className="hero__image" src={livroCapa} alt="Dayane Gaffo" /> */}
            <p>
              Vendas não deveriam depender do talento de poucos. Deveriam
              depender de processos que possam ser ensinados, aplicados, medidos
              e aperfeiçoados.
            </p>
            <p>
              A consolidação conceitual, estratégica e prática do Método DG em
              uma obra completa — 472 páginas, 8 capítulos, mais de duas décadas
              de experiência.
            </p>
            <NavLink to="/livro" className="btn btn-primary">
              Conheça o livro
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-final">
        <div className="container cta-final__inner">
          <h2>Sua operação comercial não precisa depender de improviso.</h2>
          <p>
            Estruture processos. Desenvolva pessoas. Construa previsibilidade.
          </p>
          <div className="cta-final__btns">
            <NavLink to="/contato" className="btn btn-primary">
              Agendar diagnóstico
            </NavLink>
            <NavLink to="/metodo-dg" className="cta-final__link">
              Conhecer o Método DG →
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
