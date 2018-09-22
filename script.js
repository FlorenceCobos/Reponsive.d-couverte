document.querySelector('[data-action="toggleMenu"]').addEventListener('click', function () {
  if(window.innerWidth <= 700) {
    let menu = document.querySelector('nav');
      menu.classList.toggle('hidden');
    }
})
