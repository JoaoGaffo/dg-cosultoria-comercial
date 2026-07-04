import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Servicos.css";

const PRODUTOS = [
  {
    id: "PR1",
    nome: "Estruturação de processo comercial",
    resumo: "Mapeamento completo da operação comercial atual.",
    prazo: "10 dias corridos",
    paraQuem:
      "Pequenas empresas, profissional único responsável pelo comercial, prestadores de serviço e vendedores high ticket.",
    entregaveis: [
      "Mapeamento da situação atual: como chegam os leads",
      "Quem atende e como ocorre o follow-up",
      "Taxa de conversão e principais gargalos",
      "Perda de clientes e tempo de resposta",
      "Organização do time comercial",
    ],
    execucao:
      "Análise realizada através de reunião com o responsável pelo comercial ou por preenchimento de formulário. Entrega via WhatsApp ou e-mail.",
    resultado:
      "Organização básica do processo comercial, com pipeline mais visível e aumento estimado de +10% a +25% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR2",
    nome: "Treinamento de vendedores (até 5 profissionais)",
    resumo: "Treinamento individual para Closers, SDRs e BDRs.",
    prazo: "15 dias corridos",
    paraQuem:
      "Pequenas empresas com até 5 profissionais entre dono, SDR, BDR, Closer, recepcionista ou estagiário.",
    entregaveis: [
      "Análise individual de cada vendedor (Closer / SDR / BDR)",
      "Treinamento via call individual com roleplay interativo",
    ],
    execucao:
      "1ª reunião via call para análise e levantamento do perfil individual. 2ª reunião via call para instrução, treinamento e alinhamento de expectativas.",
    resultado:
      "Organização média do processo comercial, com aumento estimado de +20% a +50% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR3",
    nome: "Treinamento de equipe de vendedores (até 5 profissionais)",
    resumo: "Treinamento em grupo, com foco na equipe como um todo.",
    prazo: "15 dias corridos",
    paraQuem:
      "Pequenas e médias empresas com equipe comercial de até 5 profissionais.",
    entregaveis: [
      "Análise da equipe completa de Closers, SDRs e BDRs",
      "Treinamento via call com roleplay interativo em grupo",
    ],
    execucao:
      "1ª reunião via call para análise e levantamento do perfil da equipe. 2ª reunião via call para instrução, treinamento e alinhamento de expectativas com todo o time.",
    resultado:
      "Organização média do processo comercial, com aumento estimado de +20% a +50% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR4",
    nome: "Criação de funil de vendas",
    resumo: "Construção do funil completo, do primeiro contato ao pós-venda.",
    prazo: "30 dias corridos",
    paraQuem:
      "Pequenas e médias empresas com equipe comercial de até 5 profissionais.",
    entregaveis: [
      "Métodos de prospecção: tráfego pago, tráfego orgânico, cold call, indicação e porta a porta",
      "Qualificação de leads (SQL/MQL)",
      "Otimização da reunião de apresentação",
      "Estrutura de proposta: análise do produto, formato e momento",
      "Negociação, fechamento e pós-venda",
      "Cadência de follow-up e remarketing",
    ],
    execucao:
      "Reunião via call com o responsável pelo comercial ou com a equipe.",
    resultado:
      "Organização alta do processo comercial, com aumento estimado de +50% a +100% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR5",
    nome: "Treinamento de Prospecção B2B",
    resumo: "Domínio completo dos canais de prospecção ativa.",
    prazo: "30 dias corridos",
    paraQuem:
      "Pequenas e médias empresas com equipe comercial de até 5 profissionais.",
    entregaveis: [
      "Análise de tráfego pago",
      "Análise de tráfego orgânico",
      "Treinamento de cold call",
      "Técnicas para indicação e para porta a porta (PaP)",
      "Treinamento de remarketing",
      "Treinamento de follow-up",
    ],
    execucao:
      "Reunião via call com o responsável pelo comercial ou com a equipe.",
    resultado:
      "Organização alta do processo comercial, com aumento estimado de +50% a +150% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR6",
    nome: "Scripts de vendas",
    resumo: "Playbook e roteiro de vendas sob medida.",
    prazo: "30 dias corridos",
    paraQuem:
      "Pequenas e médias empresas com equipe comercial de até 5 profissionais.",
    entregaveis: [
      "Playbook de vendas exclusivo para o negócio",
      "Roteiro de vendas estruturado por etapa do funil",
    ],
    execucao: "Envio por WhatsApp ou e-mail.",
    resultado:
      "Organização alta do processo comercial, com aumento estimado de +50% a +150% na conversão em curto prazo (30–60 dias).",
  },
  {
    id: "PR7",
    nome: "Criação de indicadores comerciais/BI",
    resumo: "Painel de indicadores para acompanhar a operação com clareza.",
    prazo: "30 dias corridos",
    paraQuem:
      "Pequenas e médias empresas com equipe comercial de até 5 profissionais.",
    entregaveis: [
      "Quantidade de leads",
      "Taxa de conversão",
      "Ticket médio",
      "Ciclo de vendas",
      "CAC (Custo de Aquisição de Cliente)",
      "Metas por vendedor e por equipe",
      "Previsão de faturamento",
    ],
    execucao:
      "Reunião via call com o responsável pelo comercial ou com a equipe.",
    resultado:
      "Organização alta do processo comercial, com aumento estimado de +50% a +150% na conversão em curto prazo (30–60 dias).",
  },
];

const PLANOS = [
  { id: "PL1", nome: "Plano Essencial", produtos: ["PR1", "PR4", "PR6"] },
  { id: "PL2", nome: "Plano Equipe", produtos: ["PR1", "PR4", "PR5", "PR6"] },
  {
    id: "PL3",
    nome: "Plano Performance",
    produtos: ["PR1", "PR3", "PR4", "PR5", "PR6"],
  },
  {
    id: "PL4",
    nome: "Plano Comercial Completo",
    produtos: ["PR1", "PR2", "PR4", "PR5", "PR6"],
  },
  {
    id: "PL5",
    nome: "Plano Avançado",
    produtos: ["PR1", "PR3", "PR4", "PR5", "PR6"],
    extra: true,
  },
  {
    id: "PL6",
    nome: "Plano Master",
    produtos: ["PR1", "PR2", "PR4", "PR5", "PR6"],
    extra: true,
  },
];

function nomeProduto(id) {
  return PRODUTOS.find((p) => p.id === id)?.nome ?? id;
}

export default function Servicos() {
  const [aberto, setAberto] = useState(null);

  function toggle(id) {
    setAberto((atual) => (atual === id ? null : id));
  }

  return (
    <>
      <section className="servicos-hero">
        <div className="container">
          <p className="eyebrow">Serviços</p>
          <h1>
            Consultoria comercial B2B que{" "}
            <span className="gold-text">estrutura, organiza</span> e escala suas
            vendas.
          </h1>
          <p className="servicos-hero__lead">
            Atuamos do diagnóstico à implementação — estratégias, processos e
            indicadores para mais controle sobre as vendas e melhores decisões.
          </p>
          <NavLink to="/contato" className="btn btn-primary servicos-hero__cta">
            Quero meu diagnóstico gratuito
          </NavLink>
        </div>
      </section>

      {/* DIAGNÓSTICO GRATUITO */}
      <section className="section-light diagnostico-banner">
        <div className="container diagnostico-banner__inner">
          <div className="diagnostico-banner-text">
            <h2>
              O primeiro passo é um diagnóstico
              <br /> comercial <span className="gold-text">gratuito</span>.
            </h2>
            <p>
              Antes de qualquer recomendação, a DG analisa de perto a sua
              operação — processos, gargalos e oportunidades — para entender se,
              e como, a consultoria pode ajudar. Sem fórmulas prontas.
            </p>
          </div>
          <NavLink to="/contato" className="btn btn-primary">
            Agendar diagnóstico gratuito
          </NavLink>
        </div>
      </section>

      {/* PRODUTOS — ACCORDION */}
      <section className="section produtos">
        <div className="container">
          <p className="eyebrow">Nossos produtos</p>
          <h2 className="produtos__title">
            Cada produto resolve uma etapa específica da sua operação comercial.
          </h2>
          <p className="produtos__subtitle">
            Clique em um produto para ver o que está incluído.
          </p>

          <div className="produtos__list">
            {PRODUTOS.map((produto) => {
              const estaAberto = aberto === produto.id;
              return (
                <article
                  className={`produto-card ${estaAberto ? "produto-card--aberto" : ""}`}
                  key={produto.id}
                >
                  <button
                    type="button"
                    className="produto-card__header"
                    onClick={() => toggle(produto.id)}
                    aria-expanded={estaAberto}
                  >
                    <div className="produto-card__heading">
                      <span className="produto-card__id">{produto.id}</span>
                      <div>
                        <h3>{produto.nome}</h3>
                        <p className="produto-card__resumo">{produto.resumo}</p>
                      </div>
                    </div>
                    <span className="produto-card__icon" aria-hidden="true">
                      {estaAberto ? "–" : "+"}
                    </span>
                  </button>

                  <div className="produto-card__body">
                    <div className="produto-card__body-inner">
                      <div className="produto-card__grid">
                        <div>
                          <h4>O que está incluído</h4>
                          <ul>
                            {produto.entregaveis.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="produto-card__meta">
                          <div>
                            <h4>Como funciona</h4>
                            <p>{produto.execucao}</p>
                          </div>
                          <div>
                            <h4>Indicado para</h4>
                            <p>{produto.paraQuem}</p>
                          </div>
                          <div>
                            <h4>Prazo de entrega</h4>
                            <p>{produto.prazo}</p>
                          </div>
                          <div>
                            <h4>Resultado esperado</h4>
                            <p>{produto.resultado}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="section section-light planos">
        <div className="container">
          <p className="eyebrow">Planos</p>
          <h2 className="planos__title">
            Qual plano mais se adequa às suas necessidades?
          </h2>
          <p className="planos__subtitle">
            Cada plano combina diferentes produtos da consultoria, pensados para
            o momento da sua operação comercial.
          </p>

          <div className="planos__grid">
            {PLANOS.map((plano) => (
              <article className="plano-card" key={plano.id}>
                <span className="plano-card__id">{plano.id}</span>
                <h3>{plano.nome}</h3>
                <ul className="plano-card__produtos">
                  {plano.produtos.map((produtoId) => (
                    <li key={produtoId}>{nomeProduto(produtoId)}</li>
                  ))}
                  {plano.extra && (
                    <li className="plano-card__produtos--extra">
                      + produto adicional
                    </li>
                  )}
                </ul>
                <NavLink
                  to="/contato"
                  className="btn btn-outline plano-card__cta"
                >
                  Tenho interesse
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-servicos">
        <div className="container cta-servicos__inner">
          <h2>
            Vamos começar pelo diagnóstico gratuito da sua operação comercial?
          </h2>
          <NavLink to="/contato" className="btn btn-primary">
            Solicitar diagnóstico gratuito
          </NavLink>
        </div>
      </section>
    </>
  );
}