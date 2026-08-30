import { NavLink } from 'react-router-dom'
import '../styles/MetodoDG.css'

const PILARES = [
  { num: '01', titulo: 'Diagnóstico', texto: 'Antes de propor qualquer solução, é preciso compreender o cenário. O Método DG começa pelo diagnóstico da operação, do profissional, do processo e do cliente. É aqui que identificamos gargalos, perdas, comportamentos, oportunidades e os pontos que precisam ser estruturados antes de qualquer intervenção.', tag: 'Diagnosticar antes de prescrever.' },
  { num: '02', titulo: 'Processo', texto: 'Vendas precisam deixar de existir apenas na experiência individual de cada profissional. O processo organiza a jornada comercial: entrada do lead, abordagem, qualificação, reunião, apresentação da solução, negociação, fechamento e follow-up. Cada etapa precisa ter objetivo, lógica e próximo passo definidos.', tag: 'Quando existe processo, existe algo que pode ser ensinado, acompanhado e melhorado.' },
  { num: '03', titulo: 'Pessoas', texto: 'Processos não vendem sozinhos. Pessoas executam processos. O Método DG considera perfil, comportamento, repertório, desenvolvimento e capacidade de execução dos profissionais. O objetivo não é criar vendedores robotizados — é dar estrutura para que cada profissional desenvolva seu próprio estilo sem abandonar os fundamentos.', tag: null },
  { num: '04', titulo: 'Condução Comercial', texto: 'Uma boa venda não é uma sequência de frases prontas. É uma condução. Validação de contexto, conexão, investigação, diagnóstico, apresentação da solução, negociação, tratamento de objeções, fechamento e follow-up fazem parte de uma jornada que precisa acontecer de maneira natural e intencional.', tag: null },
  { num: '05', titulo: 'Gestão e Indicadores', texto: 'Aquilo que não é acompanhado dificilmente pode ser melhorado. Tempo de resposta, conversão, avanço entre etapas, perdas, follow-up, ciclo comercial e outros indicadores permitem identificar o que realmente acontece dentro da operação. Dados transformam percepção em diagnóstico.', tag: 'Dados transformam percepção em diagnóstico.' },
]

const APLICACOES = [
  { titulo: 'Consultoria Comercial', desc: 'Aplicação da metodologia na análise e estruturação de operações comerciais.', link: '/servicos' },
  { titulo: 'Treinamentos e Formação', desc: 'Desenvolvimento de vendedores, closers, representantes, gestores e equipes.', link: '/servicos' },
  { titulo: 'Playbook Método DG', desc: 'Organização prática dos processos, frameworks, perguntas, objeções e ferramentas comerciais.', link: '/contato' },
  { titulo: 'DG Blueprint', desc: 'Estrutura orientada para que o profissional construa seu próprio script e processo comercial.', link: '/contato' },
  { titulo: 'Livro DG — Arquitetura Comercial', desc: 'A consolidação conceitual, estratégica e prática da metodologia desenvolvida por Dayane Gaffo.', link: '/livro' },
]

export default function MetodoDG() {
  return (
    <>
      <section className="metodo-hero">
        <div className="container">
          <p className="eyebrow">Método DG — Arquitetura Comercial</p>
          <h1>Vender bem não é talento. <span className="gold-text">É processo.</span></h1>
          <p className="metodo-hero__lead">
            Uma metodologia desenvolvida por Dayane Gaffo a partir de mais de 20 anos de experiência prática em vendas, liderança, formação de equipes e estruturação de operações comerciais.
          </p>
        </div>
      </section>

      {/* POR QUE O MÉTODO DG EXISTE */}
      <section className="section section-light porque">
        <div className="container">
          <p className="eyebrow">Por que o Método DG existe</p>
          <h2 className="porque__title">Empresas não precisam apenas de vendedores melhores. Precisam de operações comerciais melhores.</h2>
          <div className="porque__grid">
            <div>
              <p>Ao longo de mais de duas décadas atuando no mercado, Dayane Gaffo encontrou o mesmo problema em empresas de diferentes portes e segmentos:</p>
              <ul className="porque__lista">
                <li>Processos que existiam apenas na cabeça dos vendedores</li>
                <li>Profissionais treinados no produto, mas não em como conduzir uma venda</li>
                <li>Equipes dependentes de talento individual</li>
                <li>Scripts genéricos que ignoravam o perfil do cliente</li>
                <li>Follow-ups improvisados e gestores sem clareza sobre onde as vendas eram perdidas</li>
                <li>Empresas tentando resolver problemas estruturais cobrando apenas mais performance dos vendedores</li>
              </ul>
            </div>
            <div className="porque__conclusao">
              <blockquote>"Antes de cobrar resultado, é preciso construir a arquitetura capaz de produzi-lo."</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É ARQUITETURA COMERCIAL */}
      <section className="section arquitetura">
        <div className="container arquitetura__inner">
          <p className="eyebrow">O que é Arquitetura Comercial?</p>
          <h2>Não basta ter um funil. Todas as partes da operação precisam conversar entre si.</h2>
          <p>Arquitetura Comercial é a organização intencional de tudo aquilo que sustenta uma operação de vendas. Ela define como o lead entra, como é atendido, como é qualificado, quais informações precisam ser descobertas, como a solução é apresentada, como objeções são tratadas, como a negociação é conduzida e quais indicadores mostram se esse processo está funcionando.</p>
          <p>Quando essa arquitetura não existe, cada vendedor cria o próprio processo. Quando ela existe, a empresa deixa de depender exclusivamente do improviso e passa a construir conhecimento comercial que pode ser desenvolvido, acompanhado e aprimorado.</p>
        </div>
      </section>

      {/* OS 5 PILARES */}
      <section className="section section-light pilares-metodo">
        <div className="container">
          <p className="eyebrow">Os pilares do Método DG</p>
          <h2 className="pilares-metodo__title">Da estratégia à execução — cinco pilares que sustentam a Arquitetura Comercial.</h2>
          <div className="pilares-metodo__list">
            {PILARES.map((p) => (
              <article className="pilar-metodo" key={p.num}>
                <span className="pilar-metodo__num">{p.num}</span>
                <div className="pilar-metodo__content">
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                  {p.tag && <span className="pilar-metodo__tag">"{p.tag}"</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section className="section aplicacoes">
        <div className="container">
          <p className="eyebrow">Da estratégia à execução</p>
          <h2 className="aplicacoes__title">O Método DG não termina no diagnóstico. Ele chega à rotina comercial.</h2>
          <p className="aplicacoes__sub">É dessa metodologia que nascem diferentes ferramentas e aplicações do ecossistema DG:</p>
          <div className="aplicacoes__grid">
            {APLICACOES.map((item) => (
              <article className="aplicacao-card" key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
                <NavLink to={item.link} className="aplicacao-card__link">Conhecer →</NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto-metodo">
        <div className="container">
          <blockquote>
            "Hoje, vendedores deixam de nascer vendedores<br />
            e passam a <strong>se formar</strong> vendedores."
          </blockquote>
          <cite>Dayane Gaffo — Fundadora do Método DG</cite>
          <p>O Método DG parte do princípio de que vendas podem ser ensinadas. Técnica pode ser desenvolvida. Processo pode ser construído. E experiência pode ser transformada em conhecimento replicável.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-metodo">
        <div className="container cta-metodo__inner">
          <h2>Conheça como o Método DG pode ser aplicado à realidade da sua operação comercial.</h2>
          <div className="cta-metodo__btns">
            <NavLink to="/contato" className="btn btn-primary">Agendar diagnóstico gratuito</NavLink>
            <NavLink to="/servicos" className="btn btn-outline">Ver soluções</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
