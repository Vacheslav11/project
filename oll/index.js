'use strict';

//const  box = document.getElementById('box');
//console.log(box);
//const  btns =document.getElementsByTagName('button');
//console.log(btns[1]);
//const circles = document.getElementsByClassName('circle');
//console.log(circles);
//const hearts = document.querySelectorAll('.heart');
//console.log(hearts);
//hearts.forEach(item => {
//    console.log(item);
//});
//const oneHeart = document.querySelector('.heart');
//console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper'),
    btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

//box.style.cssText = 'background-color: blur; width: 500px';

//btns[1].style.borderRadius = '100%';
//circles[0].style.backgroundColor = 'red';


//for ( let i = 0; i < hearts.length; i++ ) {
//    hearts[i].style.backgroundColor = 'blue';
//}

//hearts.forEach(item =>{
//    item.style.backgroundColor = 'blue';
//});

const div = document.createElement('div');
//const text = document.createTextNode('тут быд я');

//div.classList.add('black');

//document.querySelector('.wrapper').append(div);
//wrapper.appendChild(div); //добавляет елемент
//wrapper.prepend(div);

//wrapper.insertBefore(div, hearts[2]);

//hearts[0].before(div); ставит до елемента
//hearts[0].after(div); после елемента

//circles[0].remove(); удаляет елменет по индексу

//wrapper.removeChild(hearts[1]); //удаляет по индексу
//hearts[0].replaceWith(circles[0]); //поменяли местами по индексам

//wrapper.replaceChild(circles[0], hearts [0]);// перывый заменяет.

div.classList.add( 'black');
wrapper.append(div);

div.innerHTML = "Hello";
div.innerHTML = "<h1>Hello</h1>"; // структура

div.textContent = "hello";// Только текст

div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>'); // перед елементом
// afterbegin  - вставляет код в начало елемента
// beforeend - вставляет код в конец елемента
//afterend -  после елемента

//btn.onclick = function () {
//    alert('click');
//};

//btn.addEventListener('click', () => {
//    alert('click');
//});

//let i = 0 ;
const deleteElement = (e) => {
   console.log(e.currentTarget);
    console.log(e.type);
//   i++;
//   if (i === 1){
//       btn.removeEventListener('click', deleteElement);
//   }
};

//btn.addEventListener('mouseenter', (e) =>{
//    console.log(e.target);
//    e.target.remove();
//    console.log('Hover');
//})

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
    item.addEventListener('click',deleteElement, {once: true} )
});

const link = document.querySelector('a');

link.addEventListener('click', function (event){
    event.preventDefault();
    console.log(event.target);
})

