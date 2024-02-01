// Perform arithmetic operations on two numbers 
// let a = 100;
// let b = 50;
// var c;
// console.log("Addition = ", c = a+b);
// console.log("substraction = ", c = a-b);
// console.log("Multiplication = ", c = a*b);
// console.log("Division = ", c = a/b);
// console.log("Modulus = ", c = a%b);

// Find number of days in a given month

// let n = 3;
// if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12){
// console.log('no. of days = 31');
// }
// else if (n == 4 || n == 6 || n == 9 || n == 11) 
// {
//     console.log('no. of days = 30');
// }
// else{
//     console.log('no. of days = 28/29');
// }

// Write a JavaScript program to check if a number is divisible by 3, 5, or 7.

// console.log('enter a no to check if a no is divisible by 3 ,5 or 7');
// let n = 73;
// if(n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
//     console.log(n, 'is divisible by 3, 5 or 7');
// }
// else{
//     console.log(n, 'is not divisible by 3, 5 or 7');
// }

// Find the grade for input marks for five subjects

// console.log('enter marks of 5 subjects to find the grade');
// let m = 70;
// let e = 80;
// let s = 60;
// let h = 75;
// let ss = 50;
// let avg = (m + e + h + s + ss) / 5;
// if (avg >= 90){
//     console.log('Grade = A+');
// }
// else if (avg >= 70){
//     console.log('Grade = A');
// }
// else if (avg >= 60){
//     console.log('Grade = B');
// }
// else if (avg >= 50){
//     console.log('Grade = C');
// }
// else{
//     console.log('Grade = D');
// }


// Find the largest and smallest of two number. 


// console.log('Enter a number to check largest and smallest number among two nos');
// let a = 20;
// let b = 40;
// console.log('a = ',a);
// console.log('b = ',b);
// if (a > b){
//     console.log( a, " is largest number.");
// }
// else{
//     console.log( a, " is smallest number.");
// }

// Find the largest and smallest of three number.

// console.log('Enter numbers to check largest and smallest number among 3 nos');
// let a = 20;
// let b = 40;
// let c = 30;
// console.log('a = ',a);
// console.log('b = ',b);
// console.log('c = ',c);
// if (b > a && b > c){
//     console.log( b, " is largest number.");
// }
// else{
//     console.log( a, " is smallest number.");
// }

// Find check if a year is leap year or not.

// console.log('Enter a year to check if a year is leap year or not');
// let n = 2013;
// console.log('year = ',n)
// if ((n % 4) == 0){
//     console.log(n," year is leap year.");
// }
// else{
//     console.log(n, " year is not a leap year.");
// }

// Check if input variable is a number or not (you can use isNaN() method in the conditions)

// console.log('enter a input variable to check whether it is a number or not');
// let n = 300;
// let m = 'Hey';
// if(isNaN(n)){
//     console.log(n, 'is not a number');
// }
// else{
//     console.log(n, 'is a number');
// }
// if(isNaN(m)){
//     console.log(m, 'is not a number');
// }
// else{
//     console.log(m, 'is a number');
// }

// Final Result for five subjects (percentage and grading system)

// console.log('enter marks of 5 subjects to find the percentage and grade');
// let m = 68;
// let e = 70;
// let s = 65;
// let h = 70;
// let ss = 55;
// let avg = (m + e + h + s + ss) / 5;
// console.log('percentage = ', avg);
// if (avg >= 90) {
//     console.log('Grade = A+');
// }
// else if (avg >= 70) 
// {
//     console.log('Grade = A');
// }
// else if (avg >= 60) 
// {
//     console.log('Grade = B');
// }
// else if (avg >= 50)
// {
//     console.log('Grade = C');
// }
// else{
//     console.log('Grade = D');
// }

// Find that a given number is present in given range or not

// console.log('Enter a number to check given no. is in range (0 to 100) or not');
// let a = 20;
// console.log('a = ',a);

// if (a >= 0 && a <= 100){
//     console.log( a, "is in range(0,100).");
// }
// else{
//     console.log( a, " is not in range.");
// }

// sort two numbers

// let n1 = Number(prompt("Enter first number"));
// let n2 = Number(prompt("Enter second number"));
// document.write("First number = "+ n1);
// document.write("Second number = "+ n2);

// if(n1 < n2){
//     console.log(n1, n2);
// }
// else{
//     console.log(n2, n1);
// }

// sort three numbers

// function sort(a, b, c) {
//     if (a < b && b < c) {
//         document.write(a, b, c);
//     }
//     else if (a < b && c < b) {
//         if (c < a) {
//             document.write(c, a, b);
//         }
//         else {
//             document.write(a, c, b);
//         }
//     }
//     else if (b < a && a < c) {
//         document.write(b, a, c);
//     }
//     else if (b < a && c < a && c < b) {
//         document.write(c, b, a);
//     }
//     else {
//         document.write(b, c, a);
//     }
    
// }

// sort(2, 3, 1);

// Check if a triangle is equilateral, scalene, or isosceles

// let s1 = 4;
// let s2 = 3;
// let s3 = 2;
// if(s1==s2 && s2==s3){
//     console.log("equilateral Triangle");
// }else if(s1==s2 || s2==s3 || s3==s1){
//     console.log("isosceles triangle")
// }else{
//     console.log("scalene triangle");
// }

// Check if a number is odd or even in JavaScript. 
  
// console.log('Enter a number to check a number is even or odd');
// let n = 25;
// console.log('n = ',n)
// if ((n % 2) == 0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// check whether the number is positive, negative or zero.

// console.log('enter a no. to check whether the no. is positive , negative or zero');
// let n = -40;
// if (n > 0) {
//     console.log('Number is positive');
// }
// else if(n < 0)
// {
//     console.log('Number is negative');
// }
// else
// {
//   console.log('number is zero');  
// }



