import { NavLink } from "react-router-dom";
import "../styles/Sobre.css";
import DayaneImage from "../assets/images/DayaneGaffoSentada.png";

const TRAJETORIA = [
  {
    titulo: "Liderança comercial",
    texto:
      "Mais de 20 anos de experiência em vendas e gestão estratégica, liderando equipes comerciais de alta performance em diferentes segmentos.",
  },
  {
    titulo: "Posições de gestão",
    texto:
      "Commercial Manager, Marketing Manager e Account Manager em diferentes segmentos de mercado, incluindo grandes instituições como a GSS.",
  },
  {
    titulo: "Formação de equipes",
    texto:
      "Ampla experiência na formação, treinamento e gestão de equipes de Closers, SDRs e BDRs, com foco em performance, relacionamento e conversão.",
  },
  {
    titulo: "Dados e tecnologia",
    texto:
      "Visão moderna e orientada por dados: domínio de CRM, Business Intelligence (BI), dashboards gerenciais e soluções baseadas em Inteligência Artificial.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* ABERTURA */}
      <section className="sobre-hero">
        <div className="container sobre-hero__inner">
          <p className="eyebrow">Sobre</p>
          <h1>Dayane Gaffo</h1>
          <p className="sobre-hero__cargo">
            Fundadora do Método DG | Consultora Comercial | Autora
          </p>
          <p className="sobre-hero__lead">
            Mais de 20 anos dedicados a vendas, liderança e estruturação
            comercial transformaram experiência prática em uma metodologia
            própria para desenvolver profissionais e construir operações
            comerciais mais estruturadas, profissionais e previsíveis.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="section section-light sobre-bio">
        <div className="container sobre-bio__grid">
          <div className="sobre-bio__foto">
            <img src={DayaneImage} alt="Dayane Gaffo" />
          </div>
          <div className="sobre-bio__text">
            <h2>
              Mais de 20 anos entre vendas, pessoas e operações comerciais.
            </h2>
            <p>
              A trajetória de Dayane Gaffo foi construída dentro da realidade
              comercial: vendendo, negociando, liderando profissionais, formando
              equipes e estruturando operações em diferentes segmentos e
              momentos de negócio.
            </p>
            <p>
              Ao longo de mais de duas décadas, ocupou posições como Commercial
              Manager, Marketing Manager e Account Manager, liderou equipes
              comerciais de alta performance e atuou tanto em grandes
              instituições quanto na realidade de pequenas empresas.
            </p>
            <p>
              Foi também na prática que acompanhou a evolução das estruturas
              comerciais, participando da formação e expansão de equipes com
              profissionais em diferentes funções — SDRs, BDRs, Closers,
              vendedores e gestores.
            </p>
            <p>
              Essa experiência permitiu observar um problema que se repetia em
              diferentes empresas: operações dependentes de profissionais
              talentosos, conhecimento comercial concentrado em poucas pessoas e
              vendedores obrigados a descobrir, sozinhos, como vender.
            </p>
            <blockquote className="sobre-bio__quote">
              "Vender bem não deveria depender de talento. Deveria depender de
              processo."
            </blockquote>
            <p>
              Foi da união entre experiência prática, gestão, desenvolvimento de
              pessoas e estruturação comercial que nasceu o Método DG —
              Arquitetura Comercial.
            </p>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="section trajetoria">
        <div className="container">
          <p className="eyebrow">Trajetória</p>
          <h2 className="trajetoria__title">
            Uma trajetória que se transformou em método.
          </h2>
          <div className="trajetoria__grid">
            {TRAJETORIA.map((item) => (
              <article className="trajetoria-card" key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
          <div className="trajetoria__metodo-destaque">
            <div>
              <p className="eyebrow">Método DG — Arquitetura Comercial</p>
              <p>
                A síntese de mais de duas décadas de experiência em vendas,
                liderança, formação de equipes e estruturação de operações
                comerciais transformada em uma metodologia própria.
              </p>
            </div>
            <NavLink to="/metodo-dg" className="btn btn-primary">
              Conheça o Método DG →
            </NavLink>
          </div>
        </div>
      </section>

      {/* DA EXPERIÊNCIA À AUTORIA */}
      <section className="section section-light autoria">
        <div className="container autoria__grid">
          <div>
            <p className="eyebrow">Da Experiência à Autoria</p>
            <h2>
              Quando conhecimento deixa de ser apenas experiência e passa a ser
              legado.
            </h2>
            <p>
              O livro DG — Arquitetura Comercial nasce da decisão de organizar,
              registrar e compartilhar aquilo que foi desenvolvido ao longo de
              décadas — para que o conhecimento comercial não fique restrito à
              experiência de poucos, mas possa ser ensinado, aplicado,
              acompanhado e aperfeiçoado por muitos.
            </p>
            <NavLink to="/livro" className="btn btn-primary autoria__cta">
              Conheça o livro DG — Arquitetura Comercial →
            </NavLink>
          </div>
          <div className="autoria__capa">
            <div className="autoria__capa-placeholder">
              <span>DG</span>
              <p>
                Arquitetura
                <br />
                Comercial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPÓSITO / MÉTODO / COMPROMISSO */}
      <section className="section missao">
        <div className="container missao__grid">
          <div className="missao-card">
            <h3 className="eyebrow">Propósito</h3>
            <p>
              Profissionalizar vendas por meio de processos que possam ser
              ensinados, aplicados, acompanhados e aperfeiçoados.
            </p>
          </div>
          <div className="missao-card">
            <h3 className="eyebrow">Método</h3>
            <p>
              Transformar experiência e estratégia comercial em estruturas
              claras, respeitando a realidade de cada empresa, profissional,
              produto, serviço e cliente.
            </p>
          </div>
          <div className="missao-card">
            <h3 className="eyebrow">Compromisso</h3>
            <p>
              Defender uma venda profissional, consultiva e humana — com
              técnica, processo e responsabilidade, sem depender de fórmulas
              prontas ou abordagens artificiais.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto-sobre">
        <div className="container">
          <blockquote>
            "Hoje, vendedores deixam de nascer vendedores
            <br />e passam a <strong>se formar</strong> vendedores."
          </blockquote>
          <cite>Dayane Gaffo — Fundadora do Método DG</cite>
        </div>
      </section>
    </>
  );
}
