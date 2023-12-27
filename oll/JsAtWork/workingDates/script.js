'use strict'

const now = new Date('2023-12-27');
//new Date.parse('2023-12-27');

console.log(now.setHours(18));
console.log(now);

// console.log(now);
// console.log(now.getFullYear()); // год
// console.log(now.getMonth()); // месяц
// console.log(now.getDate()); //день
// console.log(now.getDay()); //день недели
//
// console.log(now.getHours());
// console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start}`);