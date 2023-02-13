
//  const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener("blur",  function  () {
//   const dataLength = inputEl.getAttribute("data-length");
// //  console.log(dataLength)
//   const textLength = inputEl.value.length;
//     //  console.log (textLength)
//    if (dataLength === textLength){
//    inputEl.classList.add("valid");
//  }
//   inputEl.classList.toggle("invalid");
// })
 
const textInput = document.querySelector(`#validation-input`);
let stringLength;
textInput.addEventListener(`input`, onInputEvent);
function onInputEvent(event) {
  stringLength = event.currentTarget.value.length;
  return stringLength;
}
textInput.addEventListener(`blur`, onInputBlur);
function onInputBlur(event) {
  if (stringLength !== Number(textInput.getAttribute(`data-length`))) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
}