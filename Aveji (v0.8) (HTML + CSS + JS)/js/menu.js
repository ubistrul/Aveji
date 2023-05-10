const menuBtn = document.querySelector('.header__menu-btn')
const burgerLineTop = document.querySelector('.header__burger-line--top')
const burgerLineBottom = document.querySelector('.header__burger-line--bottom')
const mobileMenu = document.querySelector('.header__mobile-menu')
const header = document.querySelector('.header')
let ariaExpanded = menuBtn.getAttribute('aria-expanded')

// if (!mobileMenu.classList.contains('menu-closed')) {
//   mobileMenu.classList.add('menu-closed');
// }

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

menuBtn.addEventListener('click', function () {
  burgerToggle()
  menuExpandedToggle()

  mobileMenu.classList.toggle('menu-closed');
}
)

//** */

const menuLinks = document.querySelectorAll('.header__mobile-nav-link[data-goto]')
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);

  })

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;
      // console.log(gotoBlock);
      // console.log(gotoBlockValue);
      // console.log(scrollY)

      window.scrollTo({

        top: gotoBlockValue,
        behavior: 'smooth'
      })

      e.preventDefault()

      burgerToggle()
      menuExpandedToggle()
      mobileMenu.classList.toggle('menu-closed');

    }
  }
}

console.log(header)
