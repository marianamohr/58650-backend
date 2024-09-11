const process = require("node:process");

console.log("listNumbers");

const listNumbers = (...numbers) => {
  numbers.forEach((n) => {
    if (typeof n === "number") {
      console.log(n, typeof n);
    } else {
      process.exit(9);
    }
  });
};

// listNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
listNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
