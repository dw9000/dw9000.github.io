// Código para el menú desplegable de Bootstrap

document.addEventListener('click', function(event) {
  var navbarCollapse = document.getElementById('navbarNav');
  var isOpen = navbarCollapse.classList.contains('show');
  var toggler = document.querySelector('.navbar-toggler');
  // Si el menú está abierto y el clic NO fue dentro del menú ni en el botón
  if (
    isOpen &&
    !navbarCollapse.contains(event.target) &&
    !toggler.contains(event.target)
  ) {
    var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    bsCollapse.hide();
  }
});

// Modo oscuro Para el boton de escritorio y Movil

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', '1');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', '0');
  }
}

// Alternar modo oscuro desde ambos botones
document.getElementById('darkModeToggle').onclick = function() {
  setDarkMode(!document.body.classList.contains('dark-mode'));
};
document.getElementById('darkModeToggleMobile').onclick = function() {
  setDarkMode(!document.body.classList.contains('dark-mode'));
};

// Mantener preferencia al recargar
if (localStorage.getItem('darkMode') === '1') {
  document.body.classList.add('dark-mode');
}