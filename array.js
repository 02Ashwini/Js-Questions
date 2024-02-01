// -- Replace an item from an array
// let arr = [10, 20, 30];
// function arrInsert() {
//     for (let i = arr.length; i >= ; i++) {
//         arr[i] = arr[i-1];
//         document.write(arr[i] + " ");
       
//     }
//     arr[1] = 40;
//     console.log(arr);
    

// }

// arrInsert();

// -- insert an element into an array
// function insertElement() {
//     let arr = [1, 2, 3, 4, 5];
//     let index = 2;
//     let element = -99;
 
//     for (let i = arr.length; i > index; i--) {
//         arr[i] = arr[i - 1];
//     }
 
//     // Insert the element at the index
//     arr[index] = element;
 
//     console.log(arr);

// }
 
// insertElement();

// --ckecking of element in an Array

// function elementExists(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return true; // Element exists in the array
//         }
//     }
//     return false; // Element does not exist in the array
// }

// let ary = [1, 2, 3, 4, 5];
// let n = Number(prompt("enter a number"));

// if (elementExists(ary, n)) {
//     document.write("Element exists in the array.");
// } else {
//     document.write("Element does not exist in the array.");
// }

// let ary = [10,15,2,30,12,15,80];
// document.write(ary + "<br>");
// let arr = ary.includes(15);
// document.write(arr);


// -- remove an Element from an Array.

// let array = [1, 2, 3, 4, 5];
// let i = Number(prompt("enter a number to remove"));

// array.splice(i, 1);

// document.write(array);

// --remove duplicacy from an Array

// const arr = [10, 40, 20, 10, 30, 20];
// const ary = [...new Set(arr)];
// document.write(ary);

// --swaping of elements in an Array.

// let arr = [13, 12, 11, 14, 15];
// document.write("Before swapping: ", arr + "<br>");
// let i1 = 0;
// let i2 = 2;
// [[arr[i1],arr[i2]] = [arr[i2],arr[i1]]] ;
// document.write("After swapping: ",arr);