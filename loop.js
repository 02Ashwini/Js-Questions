// --Display sum off all natural numbers from 1 to 100.

// const num = parseInt(prompt('Enter a positive number: '));
// let sum = 0;
// for(let i = 0; i <= num; i++){
//     sum += i;
// }
// console.log(sum);
// document.write('The sum of natural numbers:', sum);

// --JS code to print Even and Odd numbers from 1 to 100.  

// document.write('Even numbers: ' + "<br>");
// for(let i = 1; i <= 100; i++){
//     if(i % 2 ==0){
//     console.log(i); 
//     document.write(i + "<br>");
// }
// }
// document.write('odd number: ' + "<br>");
// for(let j = 1; j <= 100; j++){
//     if(j % 2 !=0){
//     console.log(j); 
//     document.write(j + "<br>");
// }
// }

// --find the power of a number using for loop.

// let n = Number(prompt("enter a no"));
// let p = Number(prompt("enter the power"));
// let num = 1;
// for(let i = 1; i <= p; i++){
//     num = num * n;
// }
// document.write(num);

// --find the sign of the product of three numbers. Display an alert box with the specified sign.  

// num1 = Number(prompt("enter first number"));
// num2 = Number(prompt("enter second number"));
// num3 = Number(prompt("enter third number"));
// if (num1 > 0 && num2 > 0 && num3 > 0) {
//     alert("the sign is positive");
// }
// else if (num1 < 0 && num2 < 0 && num3 < 0) {
//     alert("the sign is negative");
// }
// else if (num1 > 0 && num2 < 0 && num3 < 0) {
//     alert("the sign is positive");
// }
// else if (num1 > 0 && num2 < 0 && num3 > 0) {
//     alert("the sign is negative");
// }
// else if (num1 < 0 && num2 > 0 && num3 > 0) {
//     alert("the sign is negative");
// }
// else if (num1 < 0 && num2 < 0 && num3 > 0) {
//     alert("the sign is positive");
// }
// else if (num1 < 0 && num2 > 0 && num3 < 0) {
//     alert("the sign is positive");
// }
// else {
//     alert("the sign is negative");
// }

// --print the Fibonacci series for a given value of N.

// const N = parseInt(prompt('Enter  a number: '));
// let n1 = 0, n2 = 1, f, i;
// console.log('Fibonacci Series: ');
// document.write('Fibonacci Series: ');
// for(i =1; i<=N; i++){
//     console.log(f);
//     document.write("<br>" +n2);
//     f = n1 + n2;
//     n1 = n2;
//     n2 = f;
// }

// --JS code to count all letters in a word.

// let str = "Hey Everyone";
// let numOfChars = 0;
// for (let i = 0; i<str.length; i++) {
// numOfChars++;
// }
// console.log(numOfChars);
// document.write(numOfChars);


// --factorial of the number.

// let n = Number(prompt("enter a number to find factorial"));
// let i, fact=1;
// for(i= 1; i <= n; i++){
//     if(n ==0){
//         document.write("factorial: 1");
//     }
//     fact = fact * i;
// }
// document.write("factorial of a given no. is:", fact);

// --Write a JS code to display sum off all even numbers from 1 to 100. (also code this question for negative integer)

// let i, sum = 0;
// for(i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//        sum = sum + i; 
//     }
// }
// document.write(sum);

// --display sum off all odd numbers from 1 to 100.

// let i, sum = 0;
// for(i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//        sum = sum + i; 
//     }
// }
// document.write(sum);

// --print all the positive integers from 1 to 100. If a number is multiple of 3, 5, 7 then a msg of multiple will be shown.

// for (let i = 1; i <= 120; i++) {
//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             if (i % 7 == 0) {
//                 document.write(i, " is multiple of 3,5 and 7 <br>");
//             }
//             else {
//                 document.write(i, " is multiple of 3 & 5 <br>");
//             }
//         }
//         else if (i % 7 == 0) {
//             document.write(i, " is multiple of 3 & 7 <br>");
//         }
//         else {
//             document.write(i, " is multiple of 3 <br>");
//         }
//     }
//     else if (i % 5 == 0) {
//         if (i % 7 == 0) {
//             document.write(i, " is multiple of 5 and 7 <br>");
//         }
//         else {
//             document.write(i, " is multiple of 5 <br>");
//         }
//     }
//     else if (i % 7 == 0) {
//         document.write(i, " is multiple of 7 <br>");
//     }
//     else {
//         document.write(i + "<br>");
//     }
// }

// --sum of digits of a number

// function getDigitSum(num) {
//     let sum = 0;
//     while (num > 0) {
//        sum += num % 10;
//        num = Math.floor(num / 10);
//     }
//     return sum;
//  }
//  let n = prompt("enter number");
//  let digitSum = getDigitSum(n);
//  document.write(digitSum);

// --no of digits of a number

// let num = prompt("enter a number");
// let n = num.length();
// document.write(n);