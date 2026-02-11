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


//  E. Arrays (28–36)


// 28. Create an array and print all the elements
let array = [1, "Munna", 45, true]
console.log("All the elements of array:- " + array)


// 29. Find the length of the array
let arrayLen = ["Munna", 384, true, "56", 344.3]
console.log("Array length:- " + arrayLen.length)


// 30. Find the first and last element from the array
let arrayFL = [1, 3, 5, "Munna", 34, 2.34, false, NaN]
console.log("First element of array:- " + arrayFL[0])
console.log("Last element of array:- " + arrayFL[arrayFL.length - 1])


// 31. Find the sum of all the numbers in the array
let numArray = [1, 3, 5, 6, 7, 5, 5, 3]
let sumArray = 0
for (let NA of numArray) {
    sumArray += NA
}
console.log("The sum of array:- " + sumArray)


// 32. Find the even numbers from the array
let evenArray = [1, 2, 5, 6, 7, 4, 5, 3]
console.log("Even from the array:- ")
for (let ev of evenArray) {
    if (ev % 2 == 0) {
        console.log(ev)
    }
}


// 33. Find the largest number in the array
let digArray = [1, 9, 3, 4, 5, 7, 10]
let dig = digArray[0]
for (let array of digArray) {
    if (dig < array) {
        dig = array
    }
}
console.log("The largest Number in the array:- " + dig)


// 34. Reverse the array
let ogArray = [1, 9, 3, 4, 5, 7]
console.log("Reversr the array:- ")
let revArray = []
for (let rev of ogArray) {
    revArray.unshift(rev)
}
console.log(revArray)


// 35. Sort the array (numeric)
let SortArray = [1, 9, 3, 4, 5, 7]
let sort = SortArray.sort()
console.log("Sort the array :- " + sort)


// 36. Remove duplicates from the array
let dupArray = [1, 2, 5, 6, 7, 4, 5]
let filter = [...new Set(dupArray)]
console.log("Remove the duplicates valu:- " + filter)


// F.Strings(37–42)


// 37. Find the length of a string
let strLen = "My name is Munna"
console.log("The length of string is:- " + strLen.length)


// 38. Make a string uppercase
let upcase = "i love bangladesh.i am a student"
console.log("string uppercase is:- " + upcase.toUpperCase())


// 39. Check if a string contains a specific word
let strspc = "I want to become a web design and devlope. I need Money."
console.log("The specific word is there:- " + strspc.includes("a"))


// 40. Extract all words from a sentence
let strext = "munna"
console.log("Extract all words is:- " + strext.split(""))


// 41. Reverse a string
let strOg = "Hello!"
let strsplit = strOg.split("");
let strRev = strsplit.reverse();
let joinRev = strRev.join("");
console.log(strOg + ". Reverse String is:- " + joinRev)


// 42. Check if a string is a palindrome

let strPal = "racecar";
let Palrev = strPal.split("").reverse().join("");
if (strPal === Palrev) {
    console.log("This is a palindrome word :- " + strPal)
}
else {
    console.log("This is not a palindrome word :- " + strPal + " = " + Palrev)
}