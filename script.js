(() => {
  'use strict';

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Reveal on scroll =====
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // ===== Form validation + submit =====
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const fields = {
    name: form.querySelector('#name'),
    phone: form.querySelector('#phone'),
    message: form.querySelector('#message'),
  };

  function setError(input, msg) {
    const wrap = input.closest('.field');
    const err = wrap.querySelector('.error');
    if (msg) {
      wrap.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
      err.textContent = msg;
    } else {
      wrap.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
      err.textContent = '';
    }
  }

  function validate(input) {
    const v = input.value.trim();
    if (input.hasAttribute('required') && !v) {
      setError(input, 'שדה חובה');
      return false;
    }
    if (input.id === 'phone' && v) {
      const digits = v.replace(/\D/g, '');
      if (digits.length < 9) {
        setError(input, 'מספר טלפון לא תקין');
        return false;
      }
    }
    setError(input, '');
    return true;
  }

  Object.values(fields).forEach((input) => {
    if (!input) return;
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('invalid')) validate(input);
    });
  });

  function buildMessage() {
    const name = fields.name.value.trim();
    const phone = fields.phone.value.trim();
    const msg = fields.message.value.trim();
    return (
      `שלום שי,\n` +
      `שמי ${name}.\n` +
      `טלפון: ${phone}\n` +
      (msg ? `הודעה: ${msg}\n` : '') +
      `\nנשלח מהאתר.`
    );
  }

  function validateAll() {
    const ok = [fields.name, fields.phone].every((i) => validate(i));
    return ok;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateAll()) {
      statusEl.textContent = 'יש למלא את השדות המסומנים.';
      return;
    }
    statusEl.textContent = 'שולח...';
    const body = new URLSearchParams({
      'form-name': 'contact',
      name: fields.name.value.trim(),
      phone: fields.phone.value.trim(),
      message: fields.message.value.trim(),
    }).toString();
    fetch(form.action || location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          statusEl.textContent = 'הפנייה נשלחה בהצלחה. אחזור אליך בהקדם.';
          form.reset();
        } else {
          console.error('Netlify form error:', res.status, res.statusText);
          statusEl.textContent = 'אירעה שגיאה, ניתן לנסות שוב או ליצור קשר בטלפון.';
        }
      })
      .catch((err) => {
        console.error('Netlify form fetch error:', err);
        statusEl.textContent = 'אירעה שגיאה, ניתן לנסות שוב או ליצור קשר בטלפון.';
      });
  });

  const waBtn = document.getElementById('send-whatsapp');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      if (!validateAll()) {
        statusEl.textContent = 'יש למלא את השדות המסומנים.';
        return;
      }
      const text = encodeURIComponent(buildMessage());
      window.open(`https://wa.me/972508624070?text=${text}`, '_blank', 'noopener');
    });
  }

  // ===== Accessibility panel =====
  const a11yToggle = document.getElementById('a11y-toggle');
  const a11yPanel = document.getElementById('a11y-panel');
  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', () => {
      const open = !a11yPanel.hidden;
      a11yPanel.hidden = open;
    });
    document.addEventListener('click', (e) => {
      if (!a11yPanel.hidden && !a11yPanel.contains(e.target) && e.target !== a11yToggle) {
        a11yPanel.hidden = true;
      }
    });
    a11yPanel.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-a11y]');
      if (!btn) return;
      const action = btn.dataset.a11y;
      const html = document.documentElement;
      const current = parseFloat(getComputedStyle(html).fontSize);
      if (action === 'bigger') html.style.fontSize = Math.min(current + 2, 28) + 'px';
      else if (action === 'smaller') html.style.fontSize = Math.max(current - 2, 12) + 'px';
      else if (action === 'contrast') document.body.classList.toggle('a11y-contrast');
      else if (action === 'links') document.body.classList.toggle('a11y-links');
      else if (action === 'reset') {
        html.style.fontSize = '';
        document.body.classList.remove('a11y-contrast', 'a11y-links');
      }
    });
  }
})();
