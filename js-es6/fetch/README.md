## Project Overview

This project demonstrates the use of the Fetch API in JavaScript to make HTTP requests to a server and handle the response. The application fetches data from a public API and displays it dynamically on a webpage.

## Features
1. Fetch data from a public API (https://jsonplaceholder.typicode.com/users).
2. Display the fetched data dynamically in a list.
3. Handle errors like network failures or invalid responses.
4. Demonstrates the use of Promises and async/await in JavaScript.

## Folder Structure

```
fetch/
│
├── index.html       # Main HTML file
├── script.js        # JavaScript file containing fetch implementation
└── README.md        # Project documentation
```

## Optional: Async/Await Version

Instead of using .then() and .catch(), the following async/await version can be used in script.js:

```
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getUsers();
```