
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const output = document.querySelector('#value');

let counterValue = 0;


incrementBtn.addEventListener('click', () => {
   counterValue += 1;
   output.textContent = counterValue;
   console.log (counterValue);
});
decrementBtn.addEventListener('click', () => {
   counterValue -= 1;
   output.textContent = counterValue;
   console.log (counterValue);
});

