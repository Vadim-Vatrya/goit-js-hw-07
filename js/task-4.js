// Задание 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const ref = {
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    valueRef: document.querySelector('#value')

};

let counterValue = 0;

const render = () => {
    ref.valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    render();
}

const increment = () => {
    counterValue += 1;
    render();
};


ref.buttonDecrement.addEventListener('click', () => decrement());
ref.buttonIncrement.addEventListener('click', () => increment());




