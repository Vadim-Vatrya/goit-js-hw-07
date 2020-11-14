// Задание 7

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.


const refs = {
    inputRef: document.querySelector('#font-size-control'),
    spanRef: document.querySelector('#text')
};

// console.dir(refs.inputRef);
// console.dir(refs.spanRef);

refs.inputRef.addEventListener('input', changeSizeText);

function changeSizeText(event) {
    refs.spanRef.style.fontSize = `${event.target.value}px`
};