

// const inputEl = document.querySelector("#name-input");
// const userNameEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", function (event) {
//   if (event.currentTarget.value.trim() !== "") {
//     userNameEl.textContent = event.currentTarget.value;
//   } else{
//     userNameEl.textContent = "Anonymous";
//    }
//  });

const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", function (event) {
  if (event.currentTarget.value) {
    userNameEl.textContent = event.currentTarget.value.trim();
  } else {
    userNameEl.textContent = event.currentTarget.value;
  }
});

inputEl.addEventListener("input", inputValueStart);

function inputValueStart () {
if (inputEl.value) {
  userNameEl.textContent = inputEl.value;
} else {
  userNameEl.textContent = "Anonymous";
}
}


