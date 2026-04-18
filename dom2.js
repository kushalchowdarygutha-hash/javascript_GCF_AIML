var myh1 = document.querySelector('h1');
myh1.style.color = 'red';
myh1.style.textAlign = 'Center'
myh1.style.fontSize = '45px'
myh1.style.fontFamily = 'Arial, sans-serif';

const myh2 = document.querySelector('h1');
   myh2.addEventListener('click', function(e));
    e.target.removeEventListener('click', arguments.callee);