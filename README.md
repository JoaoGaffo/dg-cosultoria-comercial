# Site Institucional — Dayane Gaffo Consultoria Comercial

Site institucional em React, construído a partir da identidade visual (logo "DG", paleta
navy/dourado, fontes Sirivennela + Ancizar Sans) e do briefing respondido pela Dayane.

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

## Estrutura de arquivos

```
src/
  styles/
    global.css         -> variáveis de cor, tipografia, botões e utilitários globais
  components/
    Header.jsx / .css  -> menu fixo com logo "DG" e navegação
    Footer.jsx / .css  -> rodapé com links e contatos
    WhatsappButton.jsx / .css -> botão flutuante de WhatsApp (pedido no briefing)
  pages/
    Home.jsx / .css       -> página inicial (hero, o que a marca faz, pilares, público, CTA)
    Sobre.jsx / .css      -> sobre a Dayane, biografia, trajetória, missão
    Servicos.jsx / .css   -> etapas da consultoria e para quem é
    Portfolio.jsx / .css  -> cases / diferencial da consultoria
    Contato.jsx / .css    -> formulário que redireciona para o WhatsApp
  App.jsx              -> definição das rotas (react-router-dom)
  main.jsx             -> ponto de entrada da aplicação
index.html             -> carrega as fontes Sirivennela e Ancizar Sans via Google Fonts
```

## Pontos de atenção / próximos passos

- O número de WhatsApp usado em todos os links está como placeholder
  (`5500000000000`) — troque pelo número real da Dayane em:
  `Footer.jsx`, `WhatsappButton.jsx` e `Contato.jsx`.
- O e-mail, LinkedIn e Instagram também estão como placeholder no `Footer.jsx` e `Contato.jsx`.
- O slogan usado no Hero foi a Opção 2 do briefing ("Chega de caos comercial..."). As outras duas
  opções de slogan enviadas podem ser usadas em outras peças de divulgação, se preferir.
- Os textos de "Cases" na página Portfólio são exemplos estruturais (a Dayane não enviou cases
  reais no briefing) — substitua pelos cases reais quando estiverem disponíveis.
- O logo usado é tipográfico (monograma "DG" com a fonte Sirivennela). Se você tiver o arquivo
  de logo em SVG/PNG da identidade visual, pode substituir o `<span className="header__monogram">`
  por uma `<img>`.
# dg-cosultoria-comercial
