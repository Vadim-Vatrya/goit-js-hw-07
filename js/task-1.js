const category = document.querySelectorAll('.item');
console.log(`В списке ${category.length} категории`);


category.forEach(categories =>
    console.log(
        `Категория: ${categories.firstElementChild.textContent} \nКоличество элементов: ${categories.children[1].children.length}`));
  
  
  
