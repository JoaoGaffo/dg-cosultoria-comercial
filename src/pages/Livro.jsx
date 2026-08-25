import { NavLink } from "react-router-dom";
import "../styles/Livro.css";

const CAPITULOS = [
  {
    num: "01",
    titulo: "Quem é Dayane Gaffo?",
    gancho:
      "A trajetória que deu origem ao método — mais de duas décadas dentro do universo comercial, entre vendas, liderança e formação de equipes.",
  },
  {
    num: "02",
    titulo: "Como nasceu a Arquitetura Comercial",
    gancho:
      "A percepção que mudou tudo: operações que dependem de talento estão construídas sobre areia.",
  },
  {
    num: "03",
    titulo: "Por que vendedores bons fracassam",
    gancho:
      '"O fracasso de um vendedor raramente nasce da falta de talento. Quase sempre nasce da falta de direção."',
  },
  {
    num: "04",
    titulo: "Por que empresas perdem talentos",
    gancho:
      "A saída de um profissional não é o início do problema. É o último capítulo de uma história que começou muito antes.",
  },
  {
    num: "05",
    titulo: "A venda é um organismo",
    gancho:
      "Vendas não são um dom, uma técnica ou persuasão. São um organismo inteiro funcionando em harmonia.",
  },
  {
    num: "06",
    titulo: "Os Pilares da Arquitetura Comercial",
    gancho:
      "A transição entre compreender a ideia e começar a transformá-la em realidade.",
  },
  {
    num: "07",
    titulo: "Implantando a Arquitetura Comercial",
    gancho:
      "Do conceito à execução. Como estruturar processos, desenvolver pessoas e construir uma operação previsível.",
  },
  {
    num: "08",
    titulo: "O Futuro das Operações Comerciais",
    gancho:
      "O que muda quando vendedores deixam de nascer vendedores e passam a se formar vendedores.",
  },
];

export default function Livro() {
  return (
    <>
      {/* HERO */}
      <section className="livro-hero">
        <div className="livro-hero__bg" aria-hidden="true" />
        <div className="container livro-hero__inner">
          <div className="livro-hero__text">
            <p className="eyebrow">Método DG — Arquitetura Comercial</p>
            <h1>
              A venda não começa quando
              <br />o cliente diz <span className="gold-text">"Olá."</span>
            </h1>
            <p className="livro-hero__lead">
              Uma obra sobre vendas? Em parte, sim. Mas quem chegar à última
              página perceberá que o que mudou não foi apenas a forma de vender.
              Foi a forma de enxergar.
            </p>
            <a
              href="https://wa.me/+5513996805974?text=Ol%C3%A1%2C%20Dayane!%20Tenho%20interesse%20em%20adquirir%20o%20livro%20DG%20%E2%80%94%20Arquitetura%20Comercial."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary livro-hero__cta"
            >
              <svg
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.5 1.8 6.4L4 29l7.8-1.8c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm6 16.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1-.5-1.7-1-2.4-1.9-.5-.6-.1-.9.2-1.2.3-.3.5-.5.7-.8.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.7c.2.2 1.7 2.6 4.1 3.5 2 .8 2.4.6 2.8.6.5 0 1.5-.6 1.7-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z" />
              </svg>
              Quero meu exemplar
            </a>
          </div>
          <div className="livro-hero__cover">
            <div className="livro-cover-placeholder">
              <span>DG</span>
              <p>
                Arquitetura
                <br />
                Comercial
              </p>
              <small>Dayane Gaffo</small>
            </div>
          </div>
        </div>
      </section>

      {/* ÂNCORA */}
      <section className="livro-ancora">
        <div className="container">
          <blockquote>
            "Vender bem não é talento. É processo."
            <cite>— Dayane Gaffo</cite>
          </blockquote>
        </div>
      </section>

      {/* SOBRE O LIVRO */}
      <section className="section livro-sobre">
        <div className="container livro-sobre__grid">
          <div>
            <p className="eyebrow">Sobre a obra</p>
            <h2>Uma obra que não ensina apenas como vender melhor.</h2>
            <p>
              Existem livros que ensinam técnicas. Existem livros que apresentam
              ferramentas. E existem aqueles que fazem algo mais raro:
              transformam a maneira como passamos a enxergar aquilo que
              acreditávamos já conhecer.
            </p>
            <p>
              O Método DG — Arquitetura Comercial pertence a esse segundo grupo.
              Ao longo de 472 páginas, Dayane Gaffo parte das pessoas para
              reconstruir o significado das técnicas — e não o contrário.
            </p>
            <p>
              Esse detalhe muda tudo. Porque transforma vendas em
              desenvolvimento, liderança em formação e resultados em
              consequência.
            </p>
          </div>
          <div className="livro-numeros">
            <div className="livro-num">
              <span>472</span>
              <p>páginas</p>
            </div>
            <div className="livro-num">
              <span>8</span>
              <p>capítulos</p>
            </div>
            <div className="livro-num">
              <span>+20</span>
              <p>anos de experiência condensados</p>
            </div>
            <div className="livro-num">
              <span>1</span>
              <p>metodologia própria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPÍTULOS */}
      <section className="section section-light livro-caps">
        <div className="container">
          <p className="eyebrow">O que você vai encontrar</p>
          <h2 className="livro-caps__title">
            Uma jornada de 8 capítulos que reconstrói a lógica comercial.
          </h2>
          <div className="livro-caps__grid">
            {CAPITULOS.map((c) => (
              <article className="cap-card" key={c.num}>
                <span className="cap-card__num">{c.num}</span>
                <h3>{c.titulo}</h3>
                <p>{c.gancho}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section livro-paraquem">
        <div className="container">
          <p className="eyebrow">Para quem é</p>
          <h2>Para quem quer transformar vendas em processo.</h2>
          <div className="livro-paraquem__grid">
            <article className="livro-pq-card">
              <h3>Para empresas e gestores</h3>
              <p>
                Que querem parar de depender de talentos isolados e construir
                operações comerciais capazes de formar profissionais
                continuamente.
              </p>
            </article>
            <article className="livro-pq-card">
              <h3>Para vendedores e closers</h3>
              <p>
                Que desejam compreender a lógica por trás da venda e conduzir
                cada etapa com mais método, segurança e profissionalismo.
              </p>
            </article>
            <article className="livro-pq-card">
              <h3>Para líderes comerciais</h3>
              <p>
                Que perceberam que cobrar resultado sem construir estrutura não
                é gestão — é improviso. E que o verdadeiro papel da liderança é
                formar pessoas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA / COMPRAR */}
      <section className="section section-light livro-comprar">
        <div className="container livro-comprar__inner">
          <div>
            <p className="eyebrow">Adquira o livro</p>
            <h2>DG — Arquitetura Comercial</h2>
            <p>
              Fale diretamente com a equipe da Dayane Gaffo para adquirir seu
              exemplar. O atendimento acontece pelo WhatsApp em horário
              comercial.
            </p>
            <ul className="livro-comprar__lista">
              <li>Livro digital completo (472 páginas)</li>
              <li>Acesso imediato após confirmação</li>
              <li>Atendimento direto pelo WhatsApp</li>
            </ul>
            <a
              href="https://wa.me/+5513996805974?text=Ol%C3%A1%2C%20Dayane!%20Tenho%20interesse%20em%20adquirir%20o%20livro%20DG%20%E2%80%94%20Arquitetura%20Comercial."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary livro-comprar__btn"
            >
              <svg
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.5 1.8 6.4L4 29l7.8-1.8c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm6 16.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1-.5-1.7-1-2.4-1.9-.5-.6-.1-.9.2-1.2.3-.3.5-.5.7-.8.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.7c.2.2 1.7 2.6 4.1 3.5 2 .8 2.4.6 2.8.6.5 0 1.5-.6 1.7-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z" />
              </svg>
              Quero meu exemplar
            </a>
            <p className="livro-comprar__hotmart">
              Em breve disponível também na Hotmart.
            </p>
          </div>
          <div className="livro-comprar__cover">
            <div className="livro-cover-placeholder livro-cover-placeholder--sm">
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
    </>
  );
}
