function calculateTotalCost(price, quantity) {
  // Calculate total cost by multiplying price and quantity
  const totalCost = price * quantity;

  // Return the calculated total cost
  return totalCost;
}

// Test the function with different price and quantity values
const price1 = 10;
const quantity1 = 5;
console.log("Total Cost 1:", calculateTotalCost(price1, quantity1));

const price2 = 15;
const quantity2 = 3;
console.log("Total Cost 2:", calculateTotalCost(price2, quantity2));

const price3 = 8;
const quantity3 = 7;
console.log("Total Cost 3:", calculateTotalCost(price3, quantity3));


// Total Cost 1: 50
// Total Cost 2: 45
// Total Cost 3: 56

//  Question 2
function calculateArea(length, width) {
  // Calculate the area of the rectangle using the formula: area = length * width
  const area = length * width;

  // Return the calculated area
  return area;
}

// Test the function with different length and width values
const length1 = 5;
const width1 = 8;
console.log("Area 1:", calculateArea(length1, width1));

const length2 = 10;
const width2 = 3;
console.log("Area 2:", calculateArea(length2, width2));

const length3 = 7;
const width3 = 7;
console.log("Area 3:", calculateArea(length3, width3));


// Area 1: 40
// Area 2: 30
// Area 3: 49
// Question 3
function calculateBMI(weight, height) {
  // Calculate the BMI using the formula: BMI = weight / (height * height)
  const bmi = weight / (height * height);
  
  return bmi;
}

// Test the function with different weight and height values
const weight1 = 70;  // in kilograms
const height1 = 1.75;  // in meters
console.log("BMI 1:", calculateBMI(weight1, height1));

const weight2 = 60;
const height2 = 1.65;
console.log("BMI 2:", calculateBMI(weight2, height2));

const weight3 = 80;
const height3 = 1.80;
console.log("BMI 3:", calculateBMI(weight3, height3));
 
// BMI 1: 22.86
// BMI 2: 22.04
// BMI 3: 24.69


// Question 4
function calculateTriangleArea(base, height, side) {
  const s = (base + side + height) / 2;
  const area = Math.sqrt(s * (s - base) * (s - height) * (s - side));
  return area;
}

// Test the function with different base, height, and side values
const base1 = 6;
const height1 = 4;
const side1 = 5;
console.log("Triangle Area 1:", calculateTriangleArea(base1, height1, side1));

const base2 = 8;
const height2 = 3;
const side2 = 7;
console.log("Triangle Area 2:", calculateTriangleArea(base2, height2, side2));

const base3 = 5;
const height3 = 7;
const side3 = 9;
console.log("Triangle Area 3:", calculateTriangleArea(base3, height3, side3));
 
 




