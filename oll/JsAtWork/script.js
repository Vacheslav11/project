// function func() {
//     window.smth = 'string';
// }
// const someRes = getData();
// const node = document.querySelector('.class');
//
// setInterval(function () {
//     if (node ) {
//         node.innerHTML  =someRes;
//     }
// }, 1000);

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('hello');
//         console.log('hello!');
//     }
// }
//
// const sayHello = outer();


// const ws = new WeakSet();
// const obj = {};
// const foo = {};
//
// ws.add(window);
// ws.add(obj);
//
// ws.has(window); // true
// ws.has(foo); // false, foo не добавлен в WeakSet
//
// ws.delete(window); // удаляет window из WeakSet
// ws.has(window); // false, window был удалён

// function createElement(){
//     const div = document.createElement('div');
//     div.id = 'test';
//     document.body.append(testDiv);
// }
//
// createElement()
//
// function deleteElement() {
//     document.body.replaceChild(document.getElementById('test'));
//
// }
//
// deleteElement();


//Функции-конструкторы

// const num = new Number(3);
// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello =function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
//
// User.prototype.exit = function (name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };
//
// // const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
//
// ivan.exit();
//
// ivan.hello();
// alex.hello();
//
// console.log(ivan);
// console.log(alex);

//Контекст вызова. This

// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// function User1(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello!"+ this.name);
//     }
// }
// let ivan = new User1('Ivan', 23);

// function sayName() {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };
//
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//
// function count (num) {
//     return this*num;
// }
//
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13))


//1) Обычная функция: this = window, но если use strict - undefined
//2) Контекст у методов объекта - сам обьект
//3) this в конструкторах и классах - это новый экземпляр обьекта
//4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };
const double = a => a * 2;

console.log(double(4));


//классы

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25,10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());

//
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
//
// console.log(long.calcArea());
// console.log(square.calcArea());


