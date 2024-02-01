/*for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write(j + " ");
    }
    document.write("<br>")
}*/

/*for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write(i + " ");
    }
    document.write(" <br>")
}*/

/*for(let i = 5; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        document.write(j + " ");
    }
    document.write("<br>")
}*/

// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write(i + " ");
//     }
//     document.write("<br>")
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5 - i; j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(k + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// let k = 1;
// for (let i = 1; i <= 4; i++) {
//     for (j = 1; j <= i; j++) {
//         document.write(k + " ");
//         k++;
//     }
//     document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//         for (j = 1; j <= i; j++) {
//             document.write("* ");
//         }
//         document.write("<br>");
//     }

// for (let i = 1; i <= 5; i++) {
//             for (j = 5; j >= i; j--) {
//                 document.write("* ");
//             }
//             document.write("<br>");
//         }

// for (let i = 1; i <= 5; i++) {
//     for (j = 1; j < i; j++) {
//         document.write(" &nbsp;&nbsp;");
//     }
//     for(let k = 1; k <= 5 - i; k++){
//         document.write(" * ");
//     }
//     document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5 - i; j++) {
//         document.write(" &nbsp;&nbsp;");
//     }
//     for(let k = 1; k <= i; k++){
//         document.write(" * ");
//     }
//     document.write("<br>");
// }

// for(let i = 1; i <= 5; i++){
//         for(let j = 1; j <= 5 - i; j++){
//             document.write("&nbsp;&nbsp;");
//         }
//         for(let k = 1; k <= i; k++){
//             document.write("*" + "&nbsp;&nbsp;");
//         }
//         document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let k = 1; k < 2 * (5 - i); k++) {
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         if (i === 0 || i === 4 || j === 0 || j === 4){
//             document.write("* ");
//         }
//         else{
//             document.write("&nbsp; &nbsp;");
//         }
//     }
//     document.write("<br>");
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         if (j === 0 || j === i ) {
//             document.write("* ");
//         } else {
//             document.write("&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }
// for (let i = 0; i < 5; i++) {
//     document.write("* ");
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 4 - i ; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let k = 0; k <= i; k++) {
//         if (k === 0 || k === i || i === 4) {
//             document.write("* ");
//         } else {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 4 - i ; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// for (let i = 3; i >= 0; i--) {
//     for (let j = 0; j < 4 - i ; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         document.write("* ");
//     }
//     document.write("<br>");
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 4 - i ; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         if (k === 0 || k === 2 * i) {
//             document.write("* ");
//         } else {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }

// for (let i = 3; i >= 0; i--) {
//     for (let j = 0; j < 4 - i ; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         if (k === 0 || k === 2 * i) {
//             document.write("* ");
//         } else {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }


// for(let i = 0; i < 5; i++){
//      for(let j = 0; j < 8; j++){
//         if (j >= i && j < 8 - i){
//             document.write("* ");
//         }else{
//             document.write("&nbsp; &nbsp;");
        
//         }
//      }
//      document.write("<br>");
// }

// for(let i=5; i>=1; i--){
//     for(let j =5; j>=i; j--){
//         document.write(" &nbsp; "," &nbsp; ")
//     }
//     for(let k =1; k<=((2*i)-1);k++){
//         document.write("*"," ","&nbsp")
//     }
//     document.write("<br>");
//  }
// for (let i = 2; i<6; i++){
//     for(let j = 6; j>i; j--){
//         document.write(" &nbsp; "," &nbsp; ");
//     }
//     for(let k =1; k<=((2*i)-1);k++){
//         document.write("*"," "," &nbsp")
//     }
//     document.write("<br>",);
// }
// document.write("<br>",);