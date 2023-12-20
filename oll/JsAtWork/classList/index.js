const btns = document.querySelector('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'tdsds'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     }else {
//         btns[1].classList.remove('red');
//     }
//     btns[1].classList.toggle('red');
// });
//console.log(btns[0].classList);

// wrapper.addEventListener('click', (event) => {
//     if ( event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);




////////////

const div = document.createElement("div");
div.className = "foo";

// Начальное состояние: <div class="foo"></div>
console.log(div.outerHTML);

// Используем classList API для удаления и добавления классов
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// Если класс "visible" присутствует в списке классов, то он будет удалён, а иначе наоборот добавлен
div.classList.toggle("visible");

// Добавление/удаление класса "visible" в зависимости от условия, передаваемого вторым аргументом
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// Добавление или удаление нескольких классов сразу
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// Добавление или удаление нескольких классов с использованием spread-синтаксиса
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// Замена класса "foo" классом "bar"
div.classList.replace("foo", "bar");

