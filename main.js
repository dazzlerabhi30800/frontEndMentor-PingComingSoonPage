const form = document.querySelector(".form");
const errorMsg = document.querySelector(".form small");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  const emailValue = emailInput.value;
  if (emailValue == "") {
    form.classList.remove("success");
    form.classList.add("error");
    errorMsg.textContent = "Email cannot be blank";
  } else if (!isEmail(emailValue)) {
    form.classList.remove("success");
    errorMsg.textContent = "Please enter valid Email";
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    form.classList.add("success");
    errorMsg.textContent = "Your email has been registered";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
