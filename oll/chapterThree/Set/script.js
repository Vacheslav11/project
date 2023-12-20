'use strict';

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];
//
// const set = new Set(arr);

// console.log(set);// только уникальные числа (без повторений)

const arr = ['Alex', 'Oleg', 'Anna', 'Alex'];


function unique(arr) {
    return Array.from(new Set(arr));
}

// set.add('Ivan')
//     .add('Oleg');

const set = new Set(arr);
console.log(set);//со строками так же

// set.delete(value)
//     .has(value) //проверяет
//     .clear() // очистить
//     .size //сколько елементов

for (let value of set) console.log(value);

set.forEach((value, valueAgain, set)=>{
    console.log(value, valueAgain);
});

// console.log(set.values());
// console.log(set.keys());//одно и тоже
// console.log(set.entries());


