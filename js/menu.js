const menuBtn = document.querySelector('.header__menu-btn')
const burgerLineTop = document.querySelector('.header__burger-line--top')
const burgerLineBottom = document.querySelector('.header__burger-line--bottom')
const mobileMenu = document.querySelector('.header__mobile-menu')
const header = document.querySelector('.header')
let ariaExpanded = menuBtn.getAttribute('aria-expanded')

// if (!mobileMenu.classList.contains('menu-closed')) {
//   mobileMenu.classList.add('menu-closed');
// }

function getTopToMenu() {
  mobileMenu.style.top = header.offsetHeight + "px";
}

//* Функция трансформации бургер-меню
function burgerToggle() {
  burgerLineTop.classList.toggle('header__burger-line--top-active');
  burgerLineBottom.classList.toggle('header__burger-line--bottom-active');
}

//* Функция переключения aria-expanded у кнокпи бургера
function menuExpandedToggle() {
  ariaExpanded = !ariaExpanded;
  menuBtn.setAttribute('aria-expanded', !ariaExpanded);
}

//* Функция скролла к секциям
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth'
    })

    e.preventDefault()
  }
}

menuBtn.addEventListener('click', function () {
  burgerToggle()
  menuExpandedToggle()
  getTopToMenu()
  mobileMenu.classList.toggle('menu-closed');
})

//** Меню-линки и обработчик событий по клику на них */

function menusLinksEvents(links) {
  if (links.length > 0) {
    links.forEach(menuLink => {
      menuLink.addEventListener('click', function (e) {
        if (links == mobileMenuLinks) {
          onMenuLinkClick(e);
          burgerToggle();
          menuExpandedToggle();
          mobileMenu.classList.toggle('menu-closed');
        }
        else {
          onMenuLinkClick(e);
        }
      })
    })
  }
}

const mobileMenuLinks = document.querySelectorAll('.header__mobile-nav-link[data-goto]');
const desktopMenuLinks = document.querySelectorAll('.header__nav-link[data-goto]');

menusLinksEvents(mobileMenuLinks);
menusLinksEvents(desktopMenuLinks);