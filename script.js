document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
  }

  var methodBtns = document.querySelectorAll('.method-btn');
  var phoneGroup = document.getElementById('phone-field-group');
  var emailGroup = document.getElementById('email-field-group');
  var hint = document.getElementById('contact-method-hint');

  function selectMethod(method) {
    methodBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.method === method);
    });
    if (method === 'phone') {
      phoneGroup.style.display = 'block';
      emailGroup.style.display = 'none';
      hint.textContent = "Please provide your phone number and we'll reach out.";
    } else {
      phoneGroup.style.display = 'none';
      emailGroup.style.display = 'block';
      hint.textContent = "Please provide your email and we'll reach out.";
    }
  }

  methodBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectMethod(btn.dataset.method);
    });
  });

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = "Thanks for reaching out — we'll respond within 24 hours.";
      status.classList.add('visible');
      form.reset();
      selectMethod('phone');
    });
  }
});
