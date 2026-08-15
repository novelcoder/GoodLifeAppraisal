document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('contact-form-wrap').style.display = 'none';
    document.getElementById('contact-thanks').style.display = 'block';
  });
});
