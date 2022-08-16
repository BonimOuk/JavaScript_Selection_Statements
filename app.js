console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

let number = 89;
let input = prompt("Please input a number");
if (input < number) {
  console.log("too low");
} else if (input > number) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

// Exercise 2
let birthMonth;
let month = prompt("What is your birth month?");
switch (month) {
  case "March":
  case "April":
  case "May":
    birthMonth = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    birthMonth = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    birthMonth = "Fall";
    break;
  case "December":
  case "January":
  case "February":
    birthMonth = "Winter";
    break;
  default:
    birthMonth = "Please input your birth month";
}

console.log(birthMonth);

// // Exercise 3
// let typeId = "01";
// let colorId = "PU";
// let sizeId = "L";

let type = "";
let color = "";
let size = "";

let typeId = prompt("Enter a typeId");
let colorId = prompt("Enter a colorId");
let sizeId = prompt("Enter a sizeId");

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BLA":
    color = "Black";
    break;
  case "BLU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

// Product: Large Purple Tank Top
