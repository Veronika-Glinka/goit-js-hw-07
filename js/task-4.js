const formEl = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
  e.preventDefault();
  const email = formEl.elements.email.value.trim("");
  const password = formEl.elements.password.value.trim("");

  if (email === "" || password === "") {
    return "All form fields must be filled in";
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    formEl.reset();
  }
};

formEl.addEventListener("submit", handleFormSubmit);
