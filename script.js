// //  VARIABLE: Global and local scope Variables

// // Global Variable 

// let i;

// for (i = 0; i < 5; i++) {
//     let p = 10;
//     console.log(i + p);
// }

// console.log(i);

// //  OPERATORS AND EQUALITY

// // Arithmetical operators 

// //  +, -, *, /, %, ==, ===, increment and decrement


// //  minus (-):

// let cost = 15
// let profit;
// let salesPrice = 20

// profit = salesPrice - cost;

// console.log(profit);


// // Plus (+) : for number 

// let costs = 15, profits = 5, salesPrices = costs + profit;

// console.log(salesPrices);

// // plus (+) : for strings

// let firstNames = 'Olatunde', surnames = 'Tobi', fullNames = surname + firstName;

// console.log(fullName  + " " + "is a big boy");

// let firstName = 'Olatunde ', surname = 'Tobi', fullName = surname + firstName;

// console.log(`${fullName}  is a big boy`);

// // Back tick (``):

// let food = 'Rice'

// console.log(`What will i eat, if not ${food} ?`);

// let A = 2;
// A *= 4;

// console.log(A);

// logical operators

// AND operator:

let result;
let age = 25;

if (age > 20 && age < 30) {
    result = age + 50;
}
else {
    result = age;
}

console.log(result);

// OR operator:

let cost = 40;
let selPrice;
let profit = 10;

if (cost >= 50 || cost === 55) {
    selPrice = cost + profit;
}
else {
    selPrice = cost;
}

console.log(selPrice);
 

// NOT operator
let name = "Hayzed";

if (name !== "Hayzed") {
    console.log("Why are you lying?");
}
else {
    console.log("That is good");
}

// loop 

// while loop

let num = 5;
let i = 0;
while (i < num) {
    i++;
    console.log(i);
}

for (let index = 0; index < num;) {
    index++
    console.log(index);
}

//  Checking for a leap year
// CONDITIONS:
// the year divided by 4 should have a remainder of 0
// the year  divided by 100 should have a not zero remainder
// if year divided by 100 gives no remainder, then divided by 400 should give no remainder


const year = prompt("Enter the year");

const checkLeap = (year) => {
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        result = "Yes! it is a leap year";
    }
    else {
        result = "No! it is not a leap year"
    }

    return result;
}

const answer = checkLeap(year);

alert(answer);
// console.log(answer);




