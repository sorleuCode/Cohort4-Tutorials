var name = prompt("Write your name:");
var nameCount = name.length;
alert("The last three letters of your name is: " + name.slice(nameCount - 3,nameCount + 1));

var name = prompt("What is your name ?");
var nameFirstLetter = name.slice(0,1);
var secondToLastLetter = name.slice(1,name.length).toLowerCase();
var capitalLetter = nameFirstLetter.toUpperCase();
alert("Hello, " + capitalLetter + secondToLastLetter);



// creating a function that tells us what number of days, weeks and months after removing our age from 90yrs

var age = prompt("What is your age?");

function ageRemainder(age) {
    var ageSubstraction = 90 - age;
    var daysRemain = ageSubstraction * 365;
    var weeksRemain = ageSubstraction * 52;
    var monthsRemain = ageSubstraction * 12;
    
    alert("You have" + " " + daysRemain + " days, " + weeksRemain + " weeks, and " + monthsRemain + " months left.");
}
alert(ageRemainder(age));


// Creating function that calculate bmi from given weight and height.

let weight = prompt('Enter the weight');
let height = prompt('Enter the height');


function bmiCalculator(weight, height) {
    return weight / (height * height);
}

var bmi = bmiCalculator(65, 1.8);
alert('the value is '+ bmi + ' in bmi');




// creating a love calculator


firstPerson = prompt("Enter first person name");
secondPerson = prompt("Enter the second person name");

function loveCalculator(firstPerson, secondPerson) {
    var random = Math.random();
    random = random * 100;
    random = Math.floor(random) + 1;
    var returnValue = "wow!, they are " + random + "% compartible";
    return returnValue;
    
}

alert(loveCalculator(firstPerson, secondPerson));



// CREATING A FUNCTION THAT CHECK IF A YEAR IS A LEAP YEAR 

let year = prompt("Enter the year of your choice");

const isLeapYear = (year) => {
    let result;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 == 0 && year % 100 === 0 && year % 400 === 0)) {
        result = "It is a leap year.";
    }

    else {
        result = "No! It is not a leap year.";
    }

    return result;
}

alert(isLeapYear(year));

// writing a program or a function that prints 1 - 100 and,  check and  print FIZZ , BUZZ and FIZZBUZZ for multiples of 3, 5 and (3 and 5)

let i;
let result = [];

const printNums = () => {
    for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        result.push("FIZZ");
    }
    else if (i % 5 === 0) {
        result.push("BUZZ");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        result.push("FIZZBUZZ");
    }
    else {
        result.push(i);
    }

}
 return result;
}

console.log(printNums());

// creating a function that select a random name from a list of names

const cohort4Names = ["Soliu", "Hayzed", "Eef", "Kenny", "Tunmise", "Zainab", "Bashirat", "Nafisat", "Abdullahi"];
let random = Math.floor(cohort4Names.length * Math.random());
function randomName() {
    let result = `${cohort4Names[random]} is going to buy lunch today!`;
    return result;
}

randomName();

// Creating a fibonacci generator function
// n is the number of fibonacci series to be generated


const fibonacciGenerator = (n) => {
    let fibonacci = [];
    let Answer;
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            Answer = i;
            fibonacci.push(Answer);
        }
        else {
            Answer = fibonacci[(i - 1)] + fibonacci[(i - 2)];
           fibonacci.push(Answer);
        }
        
        
    }
    return fibonacci;
}

console.log(fibonacciGenerator(10));