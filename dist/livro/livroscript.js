/* ============================================
   LIVROSCRIPT.JS — Landing Page do Livro
   DG — Arquitetura Comercial | Dayane Gaffo
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     ANO DINÂMICO NO RODAPÉ
     ------------------------------------------ */
  var anoEl = document.getElementById('ano')
  if (anoEl) anoEl.textContent = new Date().getFullYear()

  /* ------------------------------------------
     FALLBACK DA CAPA DO LIVRO
     Se a imagem não existir, mostra o card de fallback
     ------------------------------------------ */
  var capaImg = document.getElementById('capa-img')
  if (capaImg) {
    capaImg.addEventListener('error', function () {
      capaImg.style.display = 'none'
      var fallback = document.getElementById('capa-fallback')
      if (fallback) fallback.style.display = 'flex'
    })
  }

  /* ------------------------------------------
     TROCA DO BOTÃO PARA HOTMART
     Quando a Hotmart estiver pronta, troque a const abaixo:
     HOTMART_URL = '' → coloque a URL real
     O botão muda automaticamente.
     ------------------------------------------ */
  var HOTMART_URL = '' // <- cole a URL da Hotmart aqui quando disponível

  if (HOTMART_URL) {
    var btns = document.querySelectorAll('.btn--primary')
    btns.forEach(function (btn) {
      btn.href = HOTMART_URL
      btn.target = '_blank'
      btn.rel = 'noreferrer'
      // Remove o ícone do WhatsApp e troca o texto
      btn.innerHTML = 'Comprar na Hotmart →'
    })
    var aviso = document.querySelector('.comprar__hotmart-aviso')
    if (aviso) aviso.style.display = 'none'
  }

  /* ------------------------------------------
     ANIMAÇÃO DE ENTRADA SUAVE
     ------------------------------------------ */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll(
    '.cap-card, .paraquem-card, .numero-card, .autora__grid'
  ).forEach(function (el) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    observer.observe(el)
  })

  document.addEventListener('animationend', function () {})

  // Adiciona classe quando o elemento fica visível
  var style = document.createElement('style')
  style.textContent = '.visivel { opacity: 1 !important; transform: none !important; }'
  document.head.appendChild(style)

})