function minSum(arr) {

var arrwynik = [];
var arrcopy = arr.slice(0, arr.length);

for (var l1 = 0; l1 <= arr.length; l1++) {
  
    for (l2 = 0; l2 <= arr.length; l2++) {

      arrcopy = arr.slice(0, arr.length);
      arrwynik.push(arrcopy.splice(l1, l2 + 1));

    for (l3 = 0; l3 <= arr.length / 2 - 1 ; l3++) {
      arrwynik.push(arrcopy.splice(0,2));
    }
}
}

return arrwynik;

}

minSum([1,2,3,4]);