const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

const outputEl = document.querySelector('span#name-output');

function onInputChange (event) {
    outputEl.textContent = event.currentTarget.value;
    console.log (outputEl);
}


