const input = document.querySelectorAll("[data-validation]");
const button = document.querySelector("#form__button");
const FieldSet = document.querySelectorAll(".fields");

const valid = {
  valid: false
};
button.addEventListener("click", function(e) {
  e.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].style.borderColor = "red";
      input[i].placeholder = "this field is required";
      valid.valid = false;
      elemCreater(input[i], i);
    } else if (
      patterns[input[i].dataset.validation](input[i]) == null &&
      input[i].value !== ""
    ) {
      elemCreater(input[i], i);
      valid.valid = false;
    } else if (
      patterns[input[i].dataset.validation](input[i]) !== null &&
      input[i].value !== ""
    ) {
      valid.valid = true;
    }
    for (let j = 0; j < input.length; j++) {
      input[j].addEventListener("change", () => {
        if (input[j].previousElementSibling.className === "error") {
          errorDelete(input[j]);
        }
      });
    }
  }
  if (valid.valid) {
    alert("Success");
  }
});

const RegExpForName = /^([a-zA-Z]{3,})$/;
const RegExpForEmail = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
const RegExpForPhone = /\d{7,}$/;

const patterns = {
  name: function(elem) {
    return elem.value.match(RegExpForName);
  },
  email: function(elem) {
    return elem.value.match(RegExpForEmail);
  },
  phone: function(elem) {
    return elem.value.match(RegExpForPhone);
  },
  country: function(elem) {
    if (elem.value === "Choose your country") {
      return null;
    } else {
      return true;
    }
  }
};

/*CREATING ERRORS */
let elemCreater = (parent, i) => {
  console.log(parent);
  let error = document.createElement("div");
  error.innerHTML = `${parent.tagName} is not valid`;
  error.className = "error";
  console.dir(error);
  FieldSet[i].insertBefore(error, parent);
};
/*DELETING ERRORS */
let errorDelete = elem => {
  elem.previousElementSibling.style.display = "none";
};
/* FIXING REQUIRED ERROR */
let errorColor = elem => {
  elem.style.borderColor = "white";
};
