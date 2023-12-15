//Переменная, строгий режим.

let numberOne = 5; //переменная
const leftBorderWith = 1; //не изменяемая переменная

numberOne = 10;
console.log(numberOne);  //10

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj) //{a:10}

//Правила и типы названия переменных.

const vehicleBodyWidth = 5000;
      vehicleBodyLength = 4000;

   // snake_case
   // UPPER_SNAKE_CASE
   // Kebab-case
   // PascalCase

console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

let COLOR_RED = '#F00'

//Классификация типов данных в JS.

let number = 4.6;

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity
console.log('string' * 9) //NaN

const  person = "Alex";//'',``
let und;
console.log(und); //UNDEFINED

const odj = {
    name: 'John',
    age: 25,
    isMarried: false
};
    //console.log(obj.name);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.png', 5, 'apple.bmb', {}, []];
console.log(arr[3]);//'apple.bmb'

//Разница мжду объектами и массивами.

const arr1 = ['a', 'b', 'c'];

arr1[10] = '4322';

console.log(arr1[10]);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        ab: [{}, {}],
        de: {
            q :10,
            r : 20
        }
    }
};

arrObj.b = '1233'

console.log(arr1[1]);//2
//console.log(arrObj[1]); //b
//console.log(arrObj['b']); //1233
console.log(arrObj.b)

//const obj1 = {a: 1, b: 2};
const obj1 = {
    anna : 500,
    'alice': 800
};

//Простое общение с пользователем.
//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", "");
//console.log(typeof (answer)); //typeof - какой тип данных лежит в переменной answer.

const answers = [];
answers[0]= prompt('Как ваше имя?', '');
answers[1]= prompt('Как ваша фамилия?', '');
answers[2]= prompt('Сколько вам лет?', '');

document.write(answers);

//Интерполяция.

const category = 'toys';
console.log(`https://sswqewq.com/ ${category}/5`)

const user = 'Alex';
alert(`Привет, ${user}`);

//Операторы в JS.

console.log('arr' + ' - object'); //arr - object
console.log(4 + '5'); //45
console.log(4 + +'5'); //9

let incr = 10,
    decr = 10;

//incr++;
//decr--;

console.log(++incr);//11
console.log(--decr);//9

console.log(5%2);// 1 - остаток который остается (когда мы используем данный оператор)

//console.log(2*4 == '8'); //true

//&& оператор (и) работает только тогда когдат 2 или более выражения правильные
//|| оператор (или) работает когда 1 из нескольких операторов правдивы

const isChecked = false,
    isClose = false;

console.log(isChecked && isClose);//true (2 true)
console.log(isChecked || isClose);// true (1 true)
//console.log(isChecked || !isClose);// true (2 false)

//console.log(2+2*2 == 8);//false оператор * приоритет больше чем у оператора +
//console.log(2+2*2 != 8); //true != - не равен

//Условия

//if (4 == 4) {
//    console.log("ok");
//} else {
//    console.log("error");
//}

const  num = 50;

if (num < 49) {
    console.log('error');
}else if (num > 100) {
    console.log('много');
}else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error'); //тернарный оператор

const  num1 = 50;

switch (num1) {
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('ничего не подошло');
        break;
}

//Логические операторы

//const hamburger = true;
//const fries = true;

//if (hamburger && fries) {
//    console.log('я сыт');
//}

//console.log((hamburger && fries)); //true (2 true)

//const hamburger = 3;
//const fries = 1;
//const cola = 0;

//console.log(hamburger === 3 && cola  && fries) // 0

//console.log(1 && 0);//0
//console.log(1 && 5);//5
//console.log(null && 5);//null(первое не правдивое вырожение)
//console.log(0 && 'dtsdfsdfsdfds');//0


//if (hamburger === 3 && cola === 1 && fries) {
//    console.log('я сыт');
//}else {
//    console.log('мы уходим');
//}

//const hamburger = 0;
//const fries = null;
//const cola = 0;

//if (hamburger || cola  || fries) {
//    console.log('ok');
//}else {
//    console.log('мы уходим');
//}

//console.log(hamburger || cola  || fries); // 0 // null

let johnReport, alexReport , samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

//комбинация операторов//

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 &&  cola === 2 || fries === 3 && nuggets) {
    console.log('ok');
}else {
    console.log('мы уходим');
}
//ok(одно из условий выполнелось)

console.log(hamburger === 3 &&  cola === 2 || fries === 3 && nuggets); //2(правдиво) (последнее вырожение nuggets=2)

//console.log(NaN || 2 || undefined); //2
//console.log(NaN && 2 && undefined); //NaN
//console.log(1 && 2 && 3); // 3
//console.log(!1 && 2 || !3);// false
//console.log(NaN || null || !3 || undefined || 5); //5
//console.log(NaN || null && !3 && undefined || 5); //5
//console.log(5 === 5 && 3>1 || 5); //true

//Циклы.

let num2 = 50;

while (num2 <= 55) {
    console.log(num2);
   num2++;
} // 50 ... 55

do {
    console.log(num2);
    num2++;
}
while (num2 < 55);

for (let i = 1; i < 8; i++) {
    console.log(i)
} //1 ... 7

for (let i = 1; i < 8; i++) {
    console.log(num2);
    num2++;
}   //50 ... 56

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; //continue - позволяет пропустить тот шаг , не завершая цикл
    }
}  // 1 ... 5

//Цикл в цикле


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j ++){
        result += "*";
    }
    result += '\n';
}
console.log(result);
//*
//**
//***
//****
//*****
//******

first: for (let i =0; i<3; i++){
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`second level: ${j}`);
        for(let k = 0; k <3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 2; i < 11; i += 2) {
    console.log(i);
}

const lines = 5;
let result1 = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result1 += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result1 += "*";
    }
    result1 += "\n";
}

console.log(result1);



function test() {
    for (let i = 0; i < 5; i ++) {
        console.log(i);
        if (i ===3) return
    }
    console.log('Done');
}
test();

function doNothing() {}
    console.log( doNothing() === undefined)


//Функции

let num3 = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num3);
}

showFirstMessage("Hello");
console.log(num3);

function calc(a, b) {
    return ( a +b);
}

console.log(calc(4 , 3));
console.log(calc(2 , 1));
console.log(calc(10 , 5));

function ret() {
    let num = 50;


    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("hello");
}
logger();

const calc1 = (a , b) => {
    console.log('1');
    return a + b
}
const usdCurr = 28;
const eurCurr = 32;
function  converter( amount, curr ) {
    console.log(curr * amount);
}

converter(500, usdCurr);
converter(500, eurCurr);

const usdCurr1 = 28;
const discount = 0.9;
function  convert( amount, curr ) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}
const res = convert(500, usdCurr1);
promotion(res);

//методы и св-ва строк и чисел

const str1 = 'test';

//console.log(str1[2]= 'd');

console.log(str1.toUpperCase());  //заглавные
console.log(str1.toLowerCase()); //испровляет
console.log(str1);

const fruit = "some fruit";

console.log(fruit.indexOf("q")); //-1 такого аргумента нет

const logg = "Hello world"
console.log(logg.slice(6, 10)); //worl
console.log(logg.substring(6, 11)) //world
console.log(logg.substr(6, 11)); //сколько символов необходимо вырезать

const num11 = 12.2;
console.log(Math.round(num11));//До целого

const test11 = "12.2px";
console.log(parseInt(test11)); // в целое число
console.log(parseFloat(test11)); // переводит в число

function first() {
    setTimeout(function (){
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}
function done () {
    console.log('я прошел этот урок')
}

learnJS('JavaScript', done);

//обьекты Б деструктуризация объектов

const options = {
    name : 'test',
    width : 1024,
    height: 1024,
    colors : {
        border:'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test');
    }

};

options.makeTest();

//const {border , bg} = options.colors;
//console.log(border);

//console.log(options.name);

//delete options.name;
//console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Св-ва ${i} имеет значение ${options[key][i]}`);
            console++;
        }
    }else {
        console.log(`сво-ва ${key} имеет значение ${options[key]}`);
        console++;
    }
}
console.log(counter);

//массивы и псевдомассивы

const arr11 = [1, 22, 13, 67 ,8 , 10];

arr11.sort(); //[1, 10, 13, 22, 67, 8]

function compareNum (a, b) {
    return a - b;
}
arr11.sort(compareNum);
console.log(arr11); //[1, 8, 10, 13, 22, 67]

//arr11[99] = 0;
//console.log(arr11.length); //по последнему индексу +1
//console.log(arr11);

arr11.forEach(function (item, i,arr11){
    console.log(`${i}: ${item} внутри массива ${arr11}`);
});

//arr11.pop();
arr11.push(10);

console.log(arr11);

for (let i = 0; i < arr11.length; i ++){
    console.log(arr11[i]);
}

for (let value of arr11) {
    console.log(value);
}

//const str = prompt("", "");
//const products = str.split('','');
//products.sort();
//console.log(products.join(';'));

//Передача по ссылке или по значению , Spread оператор
let a = 5,
    b = a;

b= b +5;

console.log(b); //10
console.log(a); // 5

const obj21 = {
    a: 5,
    b: 1
}

const copy3 = obj21; //ссылка
copy3.a = 10;

console.log(copy3); //{a:10, b:1 }
console.log(obj21); //{a:10, b:1 }

function  copy4(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy4(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); //соединяются , независимая коппия объекта
console.log(Object.assign(numbers, add));
//const clone1 = (Object.assign({}, add));

//clone1.d = 20;

//console.log(add);
//console.log(clone1);

const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice();

newArray[1] = 'aassda';
//console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log1(a, b , c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num24 = [ 2, 4, 7];

log1(...num24);


const  array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

//обьектное прототипное програмирование

//Прототипное

//let str22 = "some";
//let strObj1 = new String(str22);

//console.log(typeof(str22)); //string
//console.log(typeof (strObj1)); //object

const soldier = {
    health: 400,
    armor: 100,
    seyHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

//const jonh = {
//    health: 100
//};
//jonh.__proto__ = soldier;

//Object.setPrototypeOf(jonh, soldier);//Hello

//console.log(jonh.armor); //100
jonh.seyHello(); //Hello

//const shoppingMallData = {
//   shops: [
//      {
//           width: 10,
//            length: 5
//        },
//        {
//           width: 15,
//           length: 7
//        },
//        {
//            width: 20,
//            length: 5
//        },
//        {
//            width: 8,
//            length: 10
//        }
//   ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000
//}
//function isBudgetEnough(data) {
//    let square = 0;
//    let volume = 0;
//    data.shops.forEach(shop => {
//        square += shop.width * shop.length;
//    });
//    volume = data.height * square;
//    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//        return 'Бюджета достаточно';
//    } else {
//        return 'Бюджета недостаточно';
//    }
//}
//isBudgetEnough(shoppingMallData);

//Жинамическая типизация
//1 string
console.log(typeof (String(null)));
console.log(typeof (String(4)));
//2
console.log(typeof (5+ ''));// string

const num32 = 5;

console.log("https://vk.com/catalog/" + num32);

const fontSize = 25 + 'px';
//To number
//1
console.log(typeof (Number('4')));
//2
console.log(typeof (+'5'));
//3
console.log(typeof (parseInt("15px", 10)));
let answ = +prompt("Hello", "");
//to boolean

//0, '', null, undefined, NaN
//1
let switcher = null;

if (switcher) {
    console.log('Working..');
}

switcher =1 ;

if (switcher) {
    console.log('Working..');
}
//2
console.log(typeof (Boolean('4')));
//3
console.log(typeof (!!"4333"));

//Замыкание и лексическое окружение

let number12 = 5;

function logNumber() {
    console.log(number12);
}
number12 = 6;
logNumber();//6

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter = counter +1;
        return counter;
    }
    return myFunction();
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//{
  //  let msg = 'Hello';
//}
//console.log(msg);//ошибка , msg доступна только в блоке скобках

//for (let i = 0; i < 9; i ++){
//    for (let j = 0; j < 9; j++) {
//        let num =3;
//    }
//    console.log(num);//находится внутри лексического окружения
//}

//////////

//let x = 5; alert( x++ );// 5 ( ++x )  - 6
//[] + false - null + true;
console.log([] + false); // false
console.log(typeof ([] + false));//string
console.log([] + false - null + true); //NaN

//let y = 1;
//let x = y = 2;
//alert(x); // 2

console.log([]+ 1 + 2);// "12" пустой массив перводится в строку

alert( "1"[0] ); //1 [0] -  индекс

//console.log(2 && 1 && null && 0 && undefined); // null
// && запинается на лжи
// || запинается на правде

console.log(!!(1 && 2) === (1 && 2));// undefined
           //3    //3    //true
//alert ( null || 2 && 3 || 4); //3

//const a = [1,2,3];
//const b = [1,2,3];
//console.log(a == b); //false

alert(+"Infinity" ); //'Infinity' тип данных число

//console.log("Ежик">"яблоко "); //false

console.log(0 || "" || 2 || undefined || true || false); //2

//Рекурсия

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i ++){
        result *= x;
    }
}
//function pow(x, n) {
//    if ( n === 1) {
//        return x;
//    }else {
//        return  x * pow (x, n - 1);
//    }
//}


pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) //16


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){
        if (Array.isArray(course)) {
            students += course.length;

            for ( let i = 0; i < course.length; i ++) {
                total += course[i].progress;
            }

        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for ( let i = 0; i < subCourse.length; i ++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

//console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion (data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else  {
        let total = [0 , 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subData[0];
            total[1] += subData[1];
        }
        return total;
    }
}

const result12 = getTotalProgressByRecursion(students);
console.log(result12[0]/result12[1]);