const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

btn.addEventListener('click', () =>{
 
   text.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
    body.style.background = text.textContent;
  });


 
  

