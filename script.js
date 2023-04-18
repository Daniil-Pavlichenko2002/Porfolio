document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__meny').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.footer').classList.toggle('footer__fixed');
    document.querySelector('.services__button').classList.toggle('button__fixed');
    })

// let arr = [1, 2, 3 ,4, 5]
// let newArr = arr.filter((item) => item !== 1 )
// console.log(newArr)

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');
// console.log(arr )

const str = ["background-color"]
let f = (str) => {
  return str.split('')
}
f()