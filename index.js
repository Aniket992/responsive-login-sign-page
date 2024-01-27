function validateAndSubmit() {
  var isValid = validateForm();

  if (isValid) {
    submitForm();
  }

  return isValid;
}

function submitForm() {
  if (loginButton.textContent == "LOGIN") {
    alert("Successfully login");
  } else if (loginButton.textContent == "Sign-Up") {
    alert("Successfully sign-up");
  }
}
function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (loginButton.textContent == "LOGIN") {
    if (username === "" || password === "") {
      alert("Please fill in all details before submitting.");
      document.getElementById("loginButton").type = "button";

      return false;
    } else {
      document.getElementById("loginButton").type = "reset";

      return true;
    }
  } else if (loginButton.textContent == "Sign-Up") {
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all details before submitting.");
      document.getElementById("loginButton").type = "button";

      return false;
    } else {
      document.getElementById("loginButton").type = "reset";

      return true;
    }
  }
}

function handleOptionClick(option) {
  var signUpOption = document.getElementById("signUpOption");
  var loginOption = document.getElementById("loginOption");
  var emailContainer = document.getElementById("emailContainer");

  if (option === "signup") {
    signUpOption.classList.add("underline");
    loginOption.classList.remove("underline");
    emailContainer.classList.add("show");
    loginButton.textContent = "Sign-Up";
  } else if (option === "login") {
    signUpOption.classList.remove("underline");
    loginOption.classList.add("underline");
    emailContainer.classList.remove("show");
    loginButton.textContent = "LOGIN";
  }
}
