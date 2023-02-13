

const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", function (event) {
  if (event.currentTarget.value.trim() !== "") {
    userNameEl.textContent = event.currentTarget.value;
  } 
   else{
    userNameEl.textContent = "Anonymous";
   }
 });

// const inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// const outputEl = document.querySelector('span#name-output');

// function onInputChange (event) {
//     outputEl.textContent = event.currentTarget.value;
//     console.log (outputEl);
// }
