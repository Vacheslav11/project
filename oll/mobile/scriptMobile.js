// touchstart - пр  возникновении к елементу
// touchmove - двигатся по нему
// touchend - оторвался от елемента
// touchenter - за пределы елемента
// touchleave - ушел за пределы елемента
// touchcancel-  за пределы барузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.touches)
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });
});

// touches - сво-во выдает список всех пальцев которые взаимодействуют
// targetTouches - все пальцы которые взаимодействуют с определенным елементом
// changedTouches -список пальцев укоторые действуют в этом событии