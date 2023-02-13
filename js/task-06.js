
 const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', changeBorder)
 


 function changeBorder () {
    const dataLength = inputEl.getAttribute("data-length");
  // console.log(dataLength)
    const textLength = inputEl.value.length;
      // console.log (textLength)
 
    if (textLength != dataLength){
   
    inputEl.classList.add("invalid");
   
 }

    inputEl.classList.add("valid");
  
};
