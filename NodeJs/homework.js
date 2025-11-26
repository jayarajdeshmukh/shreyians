const fs = require("fs");
const path = require("path");
const os = require("os");

// Create a file
fs.writeFileSync("student.txt", "My name is Jayaraj");

// Add more content
fs.appendFileSync("student.txt", "\nI am learning Node.js");

// Read file (must store and print)
const data = fs.readFileSync("student.txt", "utf8");
console.log(data);

// Show file extension
console.log(path.extname("student.txt"));

// Show OS platform
console.log(os.platform());
