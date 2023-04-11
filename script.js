let number1 = +prompt("Enter first number:");
let number2 = +prompt("Enter second number:");


let result = number1 + number2;

document.write("<h2>The sum of " + number1 + " and " + number2 + " is " + result + "</h2>");


// Ask the user for two numbers
let numberCh1 = prompt("Enter first number:");
let numberCh2 = prompt("Enter second number:");

// Convert the input to numbers
num1 = Number(numberCh1);
num2 = Number(numberCh2);

let addition = numberCh1 + numberCh2;
let subtraction = numberCh1 - numberCh2;
let multiplication = numberCh1 * numberCh2;
let division = numberCh1 / numberCh2;
let modulus = numberCh1 % numberCh2;

document.write("<h2>Addition:</h2><p>The sum of " + numberCh1 + " and " + numberCh2 + " is " + addition + "</p>");
document.write("<h2>Subtraction:</h2><p>The difference of " + numberCh1 + " and " + numberCh2 + " is " + subtraction + "</p>");
document.write("<h2>Multiplication:</h2><p>The product of " + numberCh1 + " and " + numberCh2 + " is " + multiplication + "</p>");
document.write("<h2>Division:</h2><p>The quotient of " + numberCh1 + " and " + numberCh2 + " is " + division + "</p>");
document.write("<h2>Modulus:</h2><p>The remainder of " + numberCh1 + " divided by " + numberCh2 + " is " + modulus + "</p>");


let num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;

document.write("Initial value: " + num + "<br>");

num++;

document.write("Value after increment is: " + num + "<br>");

num += 7;

document.write("Value after addition is: " + num + "<br>");

num--;

document.write("Value after decrement is: " + num + "<br>");
let remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");



let ticketPrice = 600;

let totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets is " + totalCost + " PKR");



let number = prompt("Enter a number:");
number = Number(number);
document.write("Multiplication table of " + number + "<br>");
for (let i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
}


let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C is ${fahrenheit}°F`);

let fahrenheit2 = 86;

let celsius2 = (fahrenheit2 - 32) * 5 / 9;

console.log(`${fahrenheit2}°F is ${celsius2}°C`);


let item1Price = 50;
let item2Price = 75;
let item1Quantity = 2;
let item2Quantity = 1;
let shippingCharges = 10;

// Compute the total cost
let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
let totalCosts = subtotal + shippingCharges;

// Show the receipt 
document.write("<h2>Receipt</h2>");
document.write(`<p>Item 1 price: $${item1Price}</p>`);
document.write(`<p>Item 1 quantity: ${item1Quantity}</p>`);
document.write(`<p>Item 2 price: $${item2Price}</p>`);
document.write(`<p>Item 2 quantity: ${item2Quantity}</p>`);
document.write(`<p>Shipping charges: $${shippingCharges}</p>`);
document.write(`<h3>Total cost: $${totalCosts}</h3>`);


let totalMarks = 500;
let obtainedMarks = 375;
let percentage = (obtainedMarks / totalMarks) * 100;

// Show the result in the browser
document.write(`<h2>Result</h2>`);
document.write(`<p>Total marks: ${totalMarks}</p>`);
document.write(`<p>Marks obtained: ${obtainedMarks}</p>`);
document.write(`<h3>Percentage: ${percentage}%</h3>`);



let usd = 10;
let sar = 25;
let pkr = (usd * 104.80) + (sar * 28);
console.log(`Total amount in Pakistani Rupees: ${pkr} PKR`);