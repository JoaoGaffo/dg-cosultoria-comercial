import "../styles/Sobre.css";
import DayaneFundoBranco from "../assets/images/DayaneGaffoSentada.png";

const TRAJETORIA = [
  {
    titulo: "Liderança comercial",
    texto:
      "Mais de 20 anos de experiência em vendas e gestão estratégica, liderando equipes comerciais de alta performance.",
  },
  {
    titulo: "Posições de gestão",
    texto:
      "Atuou como Comercial Manager, Marketing Manager e Account Manager em diferentes segmentos de mercado, incluindo grandes instituições como a GSS.",
  },
  {
    titulo: "Formação de equipes",
    texto:
      "Ampla experiência na formação, treinamento e gestão de equipes de Closers, SDRs e BDRs, com foco em performance e conversão de vendas.",
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
      <section className="sobre-hero">
        <div className="container sobre-hero__inner">
          <p className="eyebrow">Sobre</p>
          <h1>
            DG - <span className="gold-text">Consultoria Comercial</span>
          </h1>
          <p className="sobre-hero__lead">
            Fundada por Dayane Gaffo, profissional apaixonada pelo universo das
            vendas e pelo desenvolvimento de pessoas, dedicada à otimização de
            processos comerciais e à construção de operações de vendas
            previsíveis e escaláveis.
          </p>
        </div>
      </section>

      <section className="section section-light sobre-bio">
        <div className="container sobre-bio__grid">
            <img
              src={DayaneFundoBranco}
              className="sobre-bio__logo"
              alt="Logotipo da Dayane Gaffo Consultoria Comercial"
            />
          <div className="sobre-bio__text">
            <h2>Mais de 20 anos estruturando operações comerciais</h2>
            <p>
              Dayane Gaffo é uma profissional com mais de 20 anos de experiência
              nas áreas comercial, vendas e gestão estratégica, atuando na
              liderança de equipes de alta performance e no desenvolvimento de
              operações comerciais voltadas para crescimento e resultados.
            </p>
            <p>
              Ao longo de sua trajetória, ocupou posições de liderança como
              Comercial Manager, Marketing Manager e Account Manager, acumulando
              experiência em diferentes segmentos de mercado, incluindo empresas
              prestadoras de serviços e grandes instituições, como a GSS.
            </p>
            <p>
              Também atuou diretamente na estruturação de operações comerciais
              em pequenas empresas, desenvolvendo processos de vendas,
              organizando fluxos comerciais e expandindo equipes por meio da
              implantação de funções estratégicas como SDR, BDR e Closer. Esse
              trabalho contribuiu para fortalecer a operação comercial, elevar a
              performance das equipes, aumentar a eficiência dos processos e
              impulsionar o crescimento do faturamento de forma estruturada e
              sustentável.
            </p>
            <p>
              Com ampla experiência na formação e liderança de equipes
              comerciais, acredita que o sucesso de uma operação de vendas
              depende da combinação entre pessoas bem preparadas, processos
              sólidos, indicadores confiáveis e gestão estratégica.
            </p>
            <p>
              Hoje, por meio da DG Consultoria Comercial, ajuda empresários e
              gestores a estruturarem seus processos comerciais, desenvolverem
              equipes de alta performance e construírem operações de vendas
              organizadas, previsíveis e preparadas para crescer de forma
              consistente.
            </p>
          </div>
        </div>
      </section>

      <section className="section trajetoria">
        <div className="container">
          <p className="eyebrow">Trajetória</p>
          <h2 className="trajetoria__title">
            Experiência prática aliada a dados e tecnologia.
          </h2>
          <div className="trajetoria__grid">
            {TRAJETORIA.map((item) => (
              <article className="trajetoria-card" key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light missao">
        <div className="container missao__grid">
          <div className="missao-card">
            <h3 className="eyebrow">Missão</h3>
            <p>
              Estruturar processos comerciais sólidos que devolvam
              previsibilidade, controle e liberdade para empresas e
              profissionais de vendas.
            </p>
          </div>
          <div className="missao-card">
            <h3 className="eyebrow">Como atuamos</h3>
            <p>
              Cada empresa possui desafios, objetivos e realidades diferentes.
              Por isso, a consultoria não trabalha com soluções genéricas ou
              fórmulas prontas — antes de qualquer recomendação, é feito um
              diagnóstico detalhado da operação.
            </p>
          </div>
          <div className="missao-card">
            <h3 className="eyebrow">Compromisso</h3>
            <p>
              Atendimento próximo, humanizado e consultivo, com soluções sob
              medida para aumentar a eficiência comercial e promover um
              crescimento sustentável.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}