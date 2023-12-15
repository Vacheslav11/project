"use strict"

// defer - не в зависимости от положения обробатывапется скрипт в фоновом режиме
// async - не зависит от дом-структуры (загрузился - выполнился)

const p = document.querySelectorAll('p');
console.log(p);

//const script = document.createElement('script');
//script.src = "test.js";
//script.async = false;
//document.body.append(script);
//добавил 2 скрипт , загрузится только после прогрузки первого

function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    //script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');
