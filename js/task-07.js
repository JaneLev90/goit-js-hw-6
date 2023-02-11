// const text = document.querySelector('#text');
// const rng = document.querySelector('#font-size-control');

// // console.log(text);
// // console.log(rng);

// function funChange() {
//     // const rng = document.getElementById('font-size-control'); 
//     // const  text = document.getElementById('text');
   
//     text.style.fontSize = rng.value+'px';
//   }

const text = document.querySelector('#text');
const rng = document.querySelector('#font-size-control');

rng.addEventListener('change', () => {
    text.style.fontSize = rng.value+'px';
});