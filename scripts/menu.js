// scripts/menu.js
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  // Toggle the side menu
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  // Toggle sub-menus
  const subMenuHeaders = document.querySelectorAll('.sub-menu-header');
  subMenuHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const subMenu = this.parentElement;
      subMenu.classList.toggle('open');
    });
  });
});
