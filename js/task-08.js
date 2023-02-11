const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;

const formData = {
    mail,
    password,
};

if (mail.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  };

console.log (formData);

event.currentTarget.reset();
}
