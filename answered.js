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