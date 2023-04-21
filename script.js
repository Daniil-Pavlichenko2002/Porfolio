document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__meny').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.footer').classList.toggle('footer__fixed');
    document.querySelector('.project__bottom').classList.toggle('button__fixed');
    })

