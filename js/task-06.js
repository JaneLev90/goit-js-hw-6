// const inputText = document.querySelector('#validation-input');
// inputText.addEventListener('blur', onInputTextSymbols);

// console.log(inputText)

// const inputBorderValid = document.querySelector('style');
// console.log(inputBorderValid.textContent)
// const inputBorderInvalid = document.querySelector('style');

//  function onInputTextSymbols (event) {

// // event.style.borderColor = 

//  }

 const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
    const textLength = inputText.value.length;
    console.log(textLength);
    // console.log(inputText.value.length);
    style.border
    inputText.style.border = "3px solid red";
});
