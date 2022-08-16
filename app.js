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

// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case typeId == "01":
    type = "Tank top";
    break;
  case typeId == "02":
    type = "T-Shirt";
    break;
  case typeId == "03":
    type = "Long Sleeve";
    break;
  case typeId == "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case colorId == "BL":
    color = "Black";
    break;
  case colorId == "BL":
    color = "Blue";
    break;
  case colorId == "RD":
    color = "Red";
    break;
  case colorId == "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case sizeId == "S":
    size = "Small";
    break;
  case sizeId == "M":
    size = "Medium";
    break;
  case sizeId == "L":
    size = "Large";
    break;
  case sizeId == "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
