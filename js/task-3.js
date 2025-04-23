const inputEl = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

const changeInput = (e) => {
  const trimmedValue = e.target.value.trim();

  if (trimmedValue === "") {
    spanEl.innerHTML = "Anonymous";
  } else {
    spanEl.innerHTML = trimmedValue;
  }
};

inputEl.addEventListener("input", changeInput);
