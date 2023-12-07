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

function test() {
    for (let i = 0; i < 5; i ++) {
        console.log(i);
        if (i ===3) return
    }
    console.log('Done');
}
test();

function doNothing() {};
    console.log( doNothing() === undefined)
