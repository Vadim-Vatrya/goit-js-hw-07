// Задача 6

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.Если введено подходящее количество,
// то border инпута становится зеленым, если
// неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');
// console.log(inputRef.dataset.length);

const dataLength = Number(inputRef.dataset.length);



function handleInputBlur() {
    if (inputRef.value.length === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}

inputRef.addEventListener('blur', handleInputBlur);

