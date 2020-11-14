// Задание 2


// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
// узлов используй document.createElement().

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// =================== Ручной ==========================
// const ulIngredients = document.querySelector('#ingredients');

// const firstIngredients = document.createElement('li');
// firstIngredients.textContent = ingredients[0];
// // console.log(firstIngridients);

// const secondIngredients = document.createElement('li');
// secondIngredients.textContent = ingredients[1];

// const thirdIngredients = document.createElement('li');
// thirdIngredients.textContent = ingredients[2];

// const fourthIngredients = document.createElement('li');
// fourthIngredients.textContent = ingredients[3];

// const fifthIngredients = document.createElement('li');
// fifthIngredients.textContent = ingredients[4];

// const sixthIngredients = document.createElement('li');
// sixthIngredients.textContent = ingredients[5];


// ulIngredients.append(
//     firstIngredients,
//     secondIngredients,
//     thirdIngredients,
//     fourthIngredients,
//     fifthIngredients,
//     sixthIngredients);

// console.log(
//     firstIngridients,
//     secondIngridients,
//     thirdIngridients,
//     fourthIngridients,
//     fifthIngridients,
//     sixthIngridients);

// =========================== Функция ================================

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const createLiItem = item => {
    const ingredientsLiItem = document.createElement('li');
    ingredientsLiItem.textContent = item;
    return ingredientsLiItem;
};

const createIgredientsLi = ingredients.map(
    ingredient => createLiItem(ingredient));

const ulIngredients = document.querySelector('#ingredients');

ulIngredients.append(...createIgredientsLi);
console.log(createIgredientsLi);
