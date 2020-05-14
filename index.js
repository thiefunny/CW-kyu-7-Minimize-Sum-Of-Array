function minSum(arr) {

let arrcopy = [], arrtotal = [], temp = [], tempsmall = [];

arroriginal = arr.slice(0, arr.length);

for (let step = 0; step < arr.length; step++) {

for (let index = 0; index < arr.length - 1; index++) {

arrcopy = arroriginal.slice(0, arr.length);

tempsmall.push(arrcopy[0]); 
tempsmall.push(arrcopy[index + 1]); 
arrcopy.splice(index + 1, 1); 
arrcopy.splice(0, 1); 

// console.log("tempsmall");
// console.log(tempsmall);

temp.push(tempsmall);

for (let i = 0; i < arr.length / 2 - 1; i++) {
temp.push(arrcopy.splice(0, 2));
}

// console.log("temp");
// console.log(temp);

tempsmall = [];

arrtotal.push(temp.splice(0, temp.length));

// console.log("arrtotal");
// console.log(arrtotal);

}

// moving indexes
arroriginal.push(arroriginal.shift()); 

}

// var mnozenia = [[]];

// for (let i = 0; i < arrtotal.length; i++) {
//   for (let j = 0; j < arr.length / 2; j++) {



//     }
//   }

// var mnozenia = arrtotal.splice(0, arrtotal.length);
// console.log(mnozenia);
var mnozenietemp = [];

for (let i = 0; i < arrtotal.length; i++) {
  for (let j = 0; j < arr.length / 2; j++) {

    // mnozenia.push(arrtotal[i][j][0] * arrtotal[i][j][1]);
    // mnozenia[i][j] = 1;
    // console.log(mnozenietemp);
    // mnozenia.push(mnozenietemp);

  }
}
console.log(mnozenia);
// console.log("arrtotal");
// console.log(arrtotal);
// console.log(mnozenietemp);

// for (let i = 0; i < arr.length / 2; j++) {
//   mnozenia
// }

// for (let i = 0; i < arrtotal.length; i++) {

// // for (let j = 0; j < arr.length / 2; j++)

// let x = arrtotal[i][j][0] * arrtotal[i][j][1] 
//       + arrtotal[i][1][0] * arrtotal[i][1][1]
//       + arrtotal[i][2][0] * arrtotal[i][2][1];

// console.log(x);

// }

}

minSum([1,2,3,4,5,6,7,8]);