/* ============================================
   LINKTREESCRIPT.JS — Dayane Gaffo
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     FALLBACK DE LOGO
     Se a imagem não carregar, exibe o monograma DG
     ------------------------------------------ */
  var logoImg      = document.getElementById('lt-logo-img')
  var logoFallback = document.getElementById('lt-logo-fallback')

  if (logoImg) {
    logoImg.addEventListener('error', function () {
      logoImg.style.display = 'none'
      if (logoFallback) logoFallback.style.display = 'block'
    })
  }

  /* ------------------------------------------
     ANIMAÇÃO DE ENTRADA
     Cada elemento aparece em sequência ao carregar
     ------------------------------------------ */
  var items = document.querySelectorAll(
    '.lt__logo, .lt__name, .lt__sub, .lt__tagline, .lt__link, .lt__section-label, .lt__social, .lt__footer'
  )

  items.forEach(function (el, i) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'

    setTimeout(function () {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 80 + i * 55)
  })

  /* ------------------------------------------
     ANO DINÂMICO NO RODAPÉ
     ------------------------------------------ */
  var footer = document.querySelector('.lt__footer')
  if (footer) {
    footer.textContent = '© ' + new Date().getFullYear() + ' Dayane Gaffo Consultoria Comercial'
  }

})
