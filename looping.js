// -- print a 2D array.
// let arr = [[101, "Ashi"],[102, "Isha"],[103, "Dhaval"]];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j] + " ");
//     }
//     document.write("<br>");
// }


// --print Even numbers in given array using loop.

// let arr = [86, 40, 57, 5, 90, 24];
// document.write("Given array: ", arr);

// let ary = [];
// arr.forEach(i => {
//     if( i % 2 == 0 )
//     ary.push(i);
// });

// document.write( "<br> Even nos in given array are: ", ary);

// -

// --print a pyramid of * using loop.

// function Pyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let row = '';

//         for (let j = 1; j <= rows - i; j++) {
//             row += ' ';
//         }

//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += '*';
//         }

//         documment.write(row);
//     }
// }

// Pyramid(7);


// the largest number in an array using for loop.

// let arr = [2, 5, 8, 1, 4, 3];
// document.write(arr);
// let largest = arr[0];
// arr.forEach(element => {
//     if(arr[element] > largest){
//         largest = arr[element];
//     }
// });

// document.write("<br> Largest number: ", largest);

// --find the number of zeros in 2D Matrix.

// let arr = [[1, 4, 7, 9], [5, 0, 2, 0], [7, 9, 3, 0]];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j] + " ");
//     }
//     document.write("<br>");
// }

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === 0) {
//             count++;
//         }
//     }
// }
// document.write("<br>", count);

// --find product of two arrays.

// let arr = [4, 7, 2, 8];
// let ary = [1, 6, 3, 9];
// let product = [];
// if (arr.length == ary.length) {
//     for(let i = 0; i < arr.length; i++){
//         product[i] = arr[i] * ary[i];
//     }
//     document.write(`Product of array is: ${product}`);
// }
// else{
//     document.write("array is not of same size");
// }

