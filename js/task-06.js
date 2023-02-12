
 const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', changeBorder)
 


 function changeBorder (event) {
    const dataLength = inputEl.getAttribute("data-length");
  console.log(dataLength)
    const textLength = inputEl.value.length;
      console.log (textLength)
 
    if (textLength == dataLength){
   
    inputEl.classList.add("valid");
   
 }
else{
    inputEl.classList.add("invalid");

}
  
};
