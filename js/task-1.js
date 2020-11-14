// Задание 1

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).



const category = document.querySelectorAll('.item');
console.log(`В списке ${category.length} категории`);


category.forEach(categories =>
    console.log(
        `Категория: ${categories.firstElementChild.textContent} \nКоличество элементов: ${categories.children[1].children.length}`));
  
  
  
