import { NavLink } from "react-router-dom";
import "../styles/index.css";
import dayaneImage from "../assets/images/dayaneHero.png";
import logo from "../assets/images/logoRemoveBG.png";

const PILARES = [
  {
    title: "Diagnóstico",
    text: "Mapeamos a operação comercial inteira antes de qualquer recomendação — processos, gargalos e oportunidades reais.",
  },
  {
    title: "Estrutura",
    text: "Construímos processos comerciais sob medida, sem fórmulas genéricas, pensados para o momento da sua empresa.",
  },
  {
    title: "Performance",
    text: "Implementamos indicadores e ritmos de gestão que dão previsibilidade e elevam a performance do time de vendas.",
  },
  {
    title: "Escala",
    text: "Estruturamos o crescimento para que ele seja sustentável — sem depender de heróis individuais dentro do time.",
  },
];

const ADJETIVOS = [
  "Clássica",
  "Arrojada",
  "Tecnológica",
  "Humana",
  "Exclusiva",
  "Confiável",
  "Forte",
  "Próxima",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">Consultoria comercial</p>
          <h1 className="hero__title">
            Chega de caos comercial.
            <br />
            <span className="gold-text">É hora de estruturar</span> o seu
            negócio para vender caro e crescer de verdade.
            <br />
          </h1>
          <p className="hero__lead">
            Organizamos suas vendas, multiplicamos seus lucros e recuperamos a
            sua liberdade — com processos comerciais sólidos e previsíveis.
          </p>
          <div className="hero__actions">
            <NavLink to="/contato" className="btn btn-primary">
              Agendar diagnóstico
            </NavLink>
            <NavLink to="/servicos" className="btn btn-outline">
              Conhecer a consultoria
            </NavLink>
          </div>
        </div>
        <img className="hero__image" src={dayaneImage} alt="Dayane Gaffo" />
      </section>

      {/* O QUE A MARCA FAZ */}
      <section className="section intro">
        <div className="container intro__grid">
          <div className="intro__monogram-wrap" aria-hidden="true">
            <img className="intro__monogram-image" src={logo} alt="" />
          </div>
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 className="intro__title">
              Estruturamos, organizamos e melhoramos a operação de vendas da sua
              empresa.
            </h2>
            <p className="intro__text">
              Nossa consultoria comercial foi desenvolvida para empresas que
              desejam aumentar a previsibilidade dos resultados, melhorar a
              performance da equipe de vendas e criar um processo comercial
              eficiente e escalável.
            </p>
            <p className="intro__text">
              Atuamos desde o diagnóstico da operação até a implementação de
              estratégias, processos e indicadores que permitem maior controle
              sobre as vendas e melhor tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      {/* PILARES / PROCESSO */}
      <section className="section section-light pilares">
        <div className="container">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="pilares__title">
            Cada empresa tem desafios próprios — por isso, nada de fórmulas
            prontas.
          </h2>
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

      {/* PARA QUEM */}
      <section className="section publico">
        <div className="container publico__grid">
          <div>
            <p className="eyebrow">Para quem é</p>
            <h2>
              Pequenas empresas e profissionais de vendas que querem crescer com
              estrutura.
            </h2>
            <p className="publico__text">
              Vendedores high ticket, closers digitais, gerentes comerciais e
              representantes B2B que desejam organizar e estruturar seu processo
              de vendas, otimizando e maximizando resultados.
            </p>
            <ul className="publico__tags">
              {ADJETIVOS.map((adj) => (
                <li key={adj}>{adj}</li>
              ))}
            </ul>
          </div>
          <blockquote className="publico__quote">
            <p>
              “Alguém com mais de 20 anos de experiência em vendas de serviços
              de alto valor agregado, que entende o mercado e já comandou
              equipes comerciais de alta performance — atualizada em tecnologias,
             com vivência para entender o que o cliente realmente quer e o que o seu time realmente precisa”
            </p>
            <cite>— Sobre o tom da marca, Dayane Gaffo</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-final">
        <div className="container cta-final__inner">
          <h2>
            Pronto para sair do caos comercial e construir um processo
            <span className="gold-text"> sólido e escalável?</span>
          </h2>
          <NavLink to="/contato" className="btn btn-primary">
            Falar com a equipe no WhatsApp
          </NavLink>
        </div>
      </section>
    </>
  );
}