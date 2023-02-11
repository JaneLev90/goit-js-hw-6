const categoriesList = document.querySelectorAll(".item");
console.log (`Number of categories: ${categoriesList.length}`);
//console.log (categoriesList)


categoriesList.forEach(element =>{
    const nameEl = categoriesList.firstElementChild;
    const lengthEl = categoriesList.lastElementChild.children;
    console.log (`Category: ${nameEl.textContent}`);
    console.log (`Elements: ${lengthEl.length}`);
})









