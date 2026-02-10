// A. Math & Basic Logic (1–8)


// 1. Write a program to add two numbers:-
let a = 20;
let b = 30;
let add = a + b;
console.log("add valu:- " + add)


// 2. subtract, Multiply and Divide Two Numbers:-
let Num1 = 10;
let Num2 = 2;
let subtract = Num1 - Num2;
console.log("subtract valu:- " + subtract)
let Multiply = Num1 * Num2;
console.log("Multiply valu:- " + Multiply)
let Divide = Num1 / Num2;
console.log("Divide valu:- " + Divide)


// 3. Check a number it odd or even
let valu = 4;
if (valu % 2 == 0) {
    console.log("The Valu is Even :- " + valu)
}
else {
    console.log("The Valu is odd :- " + valu)
}


// 4. Make a number positive, negative, or zero.
let Number = 0;
if (Number < 0) {
    console.log("This Number is smaller than 0 :- " + Number)
}
else if (Number == 0) {
    console.log("This Number is equal 0 :- " + Number)
}
else {
    console.log("This Number is bigger than 0 :- " + Number)
}


// 5. Find the average of three numbers.
let valuNum1 = 4;
let valuNum2 = 8;
let valuNum3 = 20;
let sum = valuNum1 + valuNum2 + valuNum3;
console.log("three numbers average is :- " + sum / 3)


// 6. Fahrenheit converted to Celsius.
let Fahrenheit = 62;
let Celsius = (Fahrenheit - 32) * (5 / 9)
console.log("Celsius Valu :- " + Celsius)


// 7. Find the area of the rectangle.
let Length = 5;
let Width = 10;
let Area = Length * Width;
console.log("the area of the rectangle is :- " + Area)


// 8. Check whether a number is divisible by both 3 and 5;
let number = 30;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("This number is divisible by both 3 and 5 :- " + number)
}
else if (number % 3 === 0) {
    console.log("this number is only divisible by 3 :- " + number)
}
else if (number % 5 === 0) {
    console.log("this number is only divisible by 5 :- " + number)
}
else {
    console.log("this number is not divisible by 3 and 5 :- " + number)
}


// B.Variable & Data Type(9–13)


// 9. Declaring the same variable with let, const, var and using different methods
// var use:-
var x = 2;
console.log("Using var:- " + x)
var x = 4;
console.log("Using var:- " + x)
// let use:-
let y = 4;
console.log("Using let:- " + y)
// let y = 2;
// console.log("Using let:- " + y)
// const use:-
const z = 1;
console.log("Using const:- " + z)
// const z = 3;
// console.log("Using const:- " + z)


// 10. Checking the type of a variable (typef)
let int = 45;
console.log("Type of Number:- " + typeof int)
let str = "munna"
console.log("Type of string:- " + typeof str)
let single = true
console.log("Type of boolean:- " + typeof single)


// 11. Converting a string to a number
let conSrt = "10";
let conNum = parseInt(conSrt)
console.log("String to Number convert:- " + typeof conNum + " Valu:- " + conNum)


// 12. Converting a number to a string
let connum = 10;
let consrt = String(connum)
console.log("Number to String convert:- " + typeof consrt + " Valu:- " + consrt)


// 13. Give an example of how NaN is created
let an = 0
console.log("NaN example:-  " + an / 0)


// C. Conditionals (14–20)


// 14. Check whether a person can vote by age
let age = 18;
if (age >= 18) {
    console.log("You can vote now.")
}
else {
    console.log("You can't give vote.")
}


// 15. Check whether a number is greater than or less than 100
let Gnumber = 100;
if (Gnumber > 100) {
    console.log("the Number is greater than 100 :- " + Gnumber)
}
else if (Gnumber == 100) {
    console.log("the Number is equal than 100 :- " + Gnumber)
}
else {
    console.log("the Number is less then 100 :- " + Gnumber)
}


// 16. Calculate the grade from the student's mark
let mark = 39;
if (mark <= 100 && mark > 90) {
    console.log("You got A+")
}
else if (mark >= 80 && mark <= 90) {
    console.log("You got A")
}
else if (mark >= 70 && mark <= 79) {
    console.log("You got A-")
}
else if (mark >= 60 && mark <= 69) {
    console.log("You got B")
}
else if (mark >= 50 && mark <= 59) {
    console.log("You got C")
}
else if (mark >= 40 && mark <= 49) {
    console.log("You got D")
}
else {
    console.log("You are fail")
}


// 17. Write a program to check leap year
let year = 2026;
if (year % 4 === 0 && year % 100 !== 0) {
    console.log("This is a leap Year :- " + year)
}
else if (year % 400 === 0) {
    console.log("This is a leap year :- " + year)
}
else {
    console.log("This is Not a leap year :- " + year)
}


// 18. Calculate the largest of three numbers
let lag1 = 3;
let lag2 = 4;
let lag3 = 6;
if (lag1 > lag2 && lag1 > lag3) {
    console.log("First Number is big :- " + lag1)
}
else if (lag2 > lag1 && lag2 > lag3) {
    console.log("second Number is big :- " + lag2)
}
else {
    console.log("third Number is big :- " + lag3)
}


// 19. Create a login system (check email && password)
let email = "munna@gmail.com"
let password = "SheenMOta3695"
let inEmail = "Munn@gmail.com"
let inPassword = "SheenMOta3695"
if (email.toLocaleLowerCase() === inEmail.toLocaleLowerCase() && password === inPassword) {
    console.log("Welcome! Login successful")
}
else {
    console.log("Login failed. Invalid email or password")
}


// 20. Check even/odd using ternary operator
let n = 4;
n % 2 == 0 ? console.log("this is a even Number:- " + n) : console.log("this is a odd Number:- " + n)


// D.Loops(21–27)


// 21. Print numbers from 1 to 10
console.log("1 to 10 Number print:- ")
for (let a = 1; a <= 10; a++) {
    console.log(a)
}


// 22. Print even numbers from 1 to 50

let va = 1;
console.log("1 to 50 all even Number print:- ")
while (va <= 50) {
    if (va % 2 == 0) {
        console.log(va)
    }
    va++
}


// 23. Run a reverse loop from 10 to 1
console.log("10 to 1 reverse Number print:- ")
for (let r = 10; r > 0; r--) {
    console.log(r)
}


// 24. Print the denominator of a number
let deno = 9;
console.log(deno + "denominator is:- ")
for (let num = 1; num <= 10; num++) {
    let denoNum = deno
    let Num = num
    let str = denoNum + " into " + Num
    console.log(str + " = " + deno * num)
}


// 25. Find the number divisible by 3 between 1–100
console.log("1 to 100 number which divided by 3")
for (let div = 1; div <= 100; div++) {
    if (div % 3 === 0) {
        console.log(div)
    }
}


// 26. Find the sum using a loop
let sumloop = 0;
for (let loop = 1; loop <= 10; loop++) {
    sumloop += loop
}
console.log("The sum of :- " + sumloop)


// 27. Stop the loop using break
console.log("using break")
for (let stop = 1; stop <= 100; stop++) {
    if (stop === 5) {
        break
    }
    console.log(stop)
}

