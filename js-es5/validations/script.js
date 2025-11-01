// ES5 JavaScript Validation
var form = document.getElementById("registrationForm");
var errorDiv = document.getElementById("errorMessages");

form.onsubmit = function(event) {
  event.preventDefault(); // prevent form submission
  errorDiv.innerHTML = ""; // clear previous errors

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var age = document.getElementById("age").value.trim();

  var errors = [];

  // Name Validation: required and at least 3 characters
  if (!name) {
    errors.push("Name is required.");
  } else if (name.length < 3) {
    errors.push("Name must be at least 3 characters long.");
  }

  // Email Validation: basic pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.push("Email is required.");
  } else if (!emailPattern.test(email)) {
    errors.push("Invalid email format.");
  }

  // Password Validation: required and at least 6 characters
  if (!password) {
    errors.push("Password is required.");
  } else if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Age Validation: required and must be a number between 1 and 120
  var ageNum = parseInt(age, 10);
  if (!age) {
    errors.push("Age is required.");
  } else if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
    errors.push("Enter a valid age between 1 and 120.");
  }

  // Display Errors or Success Message
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
};
