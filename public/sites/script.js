const WA_NUMBER = '5513996805974';


(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

(function () {
  const targets = document.querySelectorAll(
    '.produto-card, .adicional, .step, .depoimento__quote, .contato__left, .form'
  );

  if (!targets.length) return;

  targets.forEach((el) => el.classList.add('fade-up'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => io.observe(el));
})();

(function () {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

(function () {
  const form = document.getElementById('form-contato');
  if (!form) return;

  const required = form.querySelectorAll('[required]');
  required.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('has-error')) validateField(field);
    });
  });

  function validateField(field) {
    const errorEl = document.getElementById('erro-' + field.id);
    if (!errorEl) return true;

    if (!field.value.trim()) {
      field.classList.add('has-error');
      errorEl.textContent = 'Este campo é obrigatório.';
      return false;
    }

    field.classList.remove('has-error');
    errorEl.textContent = '';
    return true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    required.forEach((field) => {
      if (!validateField(field)) valid = false;
    });

    if (!valid) return;

    const nome       = getValue('nome');
    const empresa    = getValue('empresa');
    const produto    = getValue('produto');
    const obs        = getValue('obs');

    let msg = `Olá, Dayane! 👋 Vim pela sua página de sites e gostaria de solicitar uma proposta.\n\n`;
    msg += `*Nome:* ${nome}\n`;
    if (empresa) msg += `*Empresa / área:* ${empresa}\n`;
    if (produto) msg += `*Preciso de:* ${produto}\n`;
    if (obs)     msg += `\n*Observações:* ${obs}`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  });

  function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }
})();