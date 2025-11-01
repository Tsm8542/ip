const fs = require('fs');
const path = require('path');

// Path to the file in the data folder
const filePath = path.join(__dirname, '..', './data', 'example.txt');

// Write data to the file
fs.writeFile(filePath, 'Hello from Node.js!', (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log('File written successfully!');

    // Read data from the file
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log('File content:', content);
    });
});
