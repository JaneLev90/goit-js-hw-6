const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () =>{
  // document.body.style.backgroundColor = Math.floor(Math.random() * 16777215)
  //   .toString(16)
  //   .padStart(6, 0);
 document.body.style.background = Math.floor(Math.random() * 16777215)
 .toString(16)
 .padStart(6, 0);
   text.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
  });


 
  

