// File: script.js

// Select elements
const button = document.getElementById("fetchButton");
const userList = document.getElementById("userList");

// Event listener for button click
button.addEventListener("click", () => {
  // Fetch data from a public API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      userList.innerHTML = ""; // Clear previous list
      data.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
    })
    .catch((error) => {
      userList.innerHTML = `<li>Error: ${error.message}</li>`;
      console.error("Fetch error:", error);
    });
});
