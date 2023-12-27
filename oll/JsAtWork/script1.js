// let user = {name: 'Ivan'};
//
// let map = new WeakMap();
// map.set(user, 'data');
//
// user = null;
//
// console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


//WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'm'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();//удаляет [0]
console.log(readMessages.add(messages[0]));