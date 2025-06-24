// Código para el menú desplegable de Bootstrap

document.addEventListener('click', function(event) {
  var menu = document.getElementById('navbarNavMobile');
  var toggler = document.querySelector('.custom-toggler');
  var isMenuOpen = menu.classList.contains('show');
  if (!isMenuOpen) return;
  // Si el clic NO es dentro del menú ni en el botón hamburguesa
  if (!menu.contains(event.target) && !toggler.contains(event.target)) {
    var collapse = bootstrap.Collapse.getOrCreateInstance(menu);
    collapse.hide();
  }
});

// Efecto suave al mostrar/ocultar el menú hamburguesa móvil
const menu = document.getElementById('navbarNavMobile');
if (menu) {
  menu.addEventListener('show.bs.collapse', function () {
    menu.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1), opacity 0.3s';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(30px)';
    setTimeout(() => {
      menu.style.opacity = '1';
      menu.style.transform = 'translateY(0)';
    }, 10);
  });
  menu.addEventListener('hide.bs.collapse', function () {
    menu.style.transition = 'transform 0.3s, opacity 0.2s';
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(30px)';
    setTimeout(() => {
      menu.style.transition = '';
      menu.style.opacity = '';
      menu.style.transform = '';
    }, 300);
  });
}

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