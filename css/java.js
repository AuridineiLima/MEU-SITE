// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Form contato
document.getElementById('formContato').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada! Vou te responder em breve.');
  this.reset();
});
