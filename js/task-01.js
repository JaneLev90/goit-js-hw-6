const categoriesList = document.querySelectorAll(".item");
console.log (`Number of categories: ${categoriesList.length}`);
// console.log (categoriesList)


categoriesList.forEach((element) =>{
   
   console.log (`Category: ${element.firstElementChild.textContent}`);

console.log (`Elements: ${element.lastElementChild.children.length}`);
   })











