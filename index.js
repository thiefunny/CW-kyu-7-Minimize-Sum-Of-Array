function minSum(arr) {

var temp = [];
var pary = [];
var l1, l2;

for (l1 = 0; l1 < arr.length; l1++) {
  for (l2 = l1 + 1; l2 < arr.length; l2++) {
    temp.push(arr[l1], arr[l2]);
    pary.push(temp.splice(0,2));
  }
}

temp = [];

l1 = 0;
l2 = 0;
// for (l2 = 0; l2 < pary.length; l2++) {
// for (l2 = l1; l2 < pary.length - l1; l2++) {
// console.log("l1 = " + l1 + "; l2 = " + l2);
// let x = pary[l1][0];


do {
console.log(l2, l1);
do {temp.push(pary[l2]);
console.log(temp);}
while (pary[l2][0] == pary[l1][0]);

l1++; l2=0;
}
while (pary)
// }

// if (pary[l2][0] == pary[l1][0]) {
// temp.push(pary[l2]);
// console.log(temp);}
// else {l1++;}
// }




// l1 = 0;
// do {
// temp.push(pary[l1]);
// console.log(temp);
// l1++;
// }
// while (pary[l1][0] != )

return pary;

}





minSum([1,2,3,4,5,6]);