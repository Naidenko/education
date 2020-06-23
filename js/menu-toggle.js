let toggle = document.querySelector('.header__toggle'),
    menu = document.querySelector('.header-nav'),
    header = document.querySelector('.page-header');

toggle.addEventListener('click', function() {
    if(menu.classList.contains('menu--close')){
        menu.classList.remove('menu--close');
        header.classList.remove('logo--closed');
        header.classList.add('logo--opened')
    } else {
        menu.classList.add('menu--close');
        header.classList.remove('logo--opened');
        header.classList.add('logo--closed');
    }
})
