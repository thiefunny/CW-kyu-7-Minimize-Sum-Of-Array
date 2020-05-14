function minSum(arr) {

var temp = [];
var pary = [];
var l1, l2, index_current, index_found;

// 

for (l1 = 0; l1 < arr.length; l1++) {
  for (l2 = l1 + 1; l2 < arr.length; l2++) {
    temp.push(arr[l1], arr[l2]);
    pary.push(temp.splice(0,2));
  }
}
console.log(pary);

// 

index_current = 0;

temp.push(pary[index_current]);
     index_found = index_current;

for (index_current = 0; index_current < pary.length; index_current++) {

if (
      (pary[index_current][0] != pary[index_found][0])
  &&
      (pary[index_current][0] != pary[index_found][1])
  &&
      (pary[index_current][1] != pary[index_found][0])
  &&
      (pary[index_current][1] != pary[index_found][1])
   )
   {
     temp.push(pary[index_current]);
     index_found = index_current;
   }
}
console.log(temp);
}

minSum([1,2,3,4,5,6]);