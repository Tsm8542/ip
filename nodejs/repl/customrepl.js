// File: customRepl.js
// Demonstration of using REPL in Node.js

// Importing the built-in 'repl' and 'os' modules
const repl = require('repl');
const os = require('os');

// Start a custom REPL prompt
const myRepl = repl.start({
  prompt: 'NodeLab > ',   // Custom prompt name
  useColors: true
});

// Add custom variables and functions to the REPL context
myRepl.context.greet = function (name) {
  return `Hello, ${name}! Welcome to Node.js REPL.`;
};

myRepl.context.systemInfo = function () {
  return {
    platform: os.platform(),
    cpus: os.cpus().length,
    architecture: os.arch(),
    memory: os.totalmem()
  };
};

myRepl.context.add = (a, b) => a + b;
myRepl.context.multiply = (a, b) => a * b;

console.log("Custom REPL started!");
console.log("Try these commands inside REPL:");
console.log("  greet('Alice')");
console.log("  systemInfo()");
console.log("  add(10, 5)");
console.log("  multiply(4, 6)");
console.log("Type .exit to quit the REPL.");
