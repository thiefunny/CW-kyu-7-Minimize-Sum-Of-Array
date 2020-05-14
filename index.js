function minSum(arr) {

var arrwynik = [];
var arrcopy = arr;
const arrlength = arr.length;
// console.log(arr.length);
// arrwynik.push(arrcopy.splice(0,2));


  // var arr = [1,2,3,4,5,6];
  // var arrwynik = [1];
  // var temp;
  // var arrcopy = [];

// for (l1 = 0; l1 - 1 < arr.length; l1++) {
//   arrcopy = arr;
//   for (l2 = 0; l2 - 1 < arrlength; l2++) {
//     arrcopy = arr;
//     arrwynik.push(arrcopy.splice(l1, l2 + 1));
    for (var l3 = 0; l3 <= arr.length / 2 - 1 ; l3++) {
      console.log(arr + " / " + arrcopy);
      console.log("przed: " + (arrcopy.length) + " / " + (arr.length) + " / " + (arrlength));
      temp = arrcopy.splice(0,2);
      arrwynik.push(temp);
      console.log("po: " + (arrcopy.length) + " / " + (arr.length) + " / " + (arrlength));
  //   }
  // }
}

//  console.log(temp);
//  console.log(arrwynik);
// console.log(arr.length);
// console.log((arrcopy.length) + " / " + (arr.length));
return arrwynik;

}

minSum([1,2,3,4,5,6,7,8]);
// minSum([12,6,10,26,3,24]);
// minSum([9,2,8,7,5,4,0,6]);