function minSum(arr) {

let sourceArray = arr.slice(0, arr.length);

let sourceArrayCopy = [], arrayOfAllPairs = [], temp2 = [], temp1 = [];

//////////////////////////////// STEP 1 creating sets of unique pairs

for (let shift = 0; shift < arr.length; shift++) {

  for (let n = 0; n < arr.length - 1; n++) {

  sourceArrayCopy = sourceArray.slice();

  temp1.push(sourceArrayCopy[0]); 
  temp1.push(sourceArrayCopy[n + 1]); 

  sourceArrayCopy.splice(n + 1, 1); 
  sourceArrayCopy.splice(0, 1); 

  temp2.push(temp1);

  for (let i = 0; i < arr.length / 2 - 1; i++) {
    temp2.push(sourceArrayCopy.splice(0, 2));
    }

temp1 = [];

arrayOfAllPairs.push(temp2.splice(0));

}

let x = sourceArray.shift();

sourceArray.push(x); 

}

console.log(arrayOfAllPairs)

//////////////////////////////// STEP 2 calculating pairs multiplications and adding products to allMultiplications array

var allMultiplications = [];
var multiplication = [];

for (j = 0; j < arrayOfAllPairs.length; j++){
  for (i = 0; i < arr.length/2; i++) {
    multiplication[i] = arrayOfAllPairs[j][i][0] * arrayOfAllPairs[j][i][1];
    }
  allMultiplications.push(multiplication.splice(0));
  }

console.log(allMultiplications)

////////////////////////////// STEP 3 summing all multiplications

let sums = [];
let sum = 0;

for (i = 0; i < allMultiplications.length; i++) {
  sum = 0;
  for (j = 0; j < arr.length/2; j++) {
    sum = sum + allMultiplications[i][j];
  }
  sums.push(sum);
  }

console.log(sums)

/////////////////////////////// STEP 4 sorting sums

function compareNumbers(a, b) {
  return a - b;
}

sums.sort(compareNumbers);

console.log(sums)
//////////////////////////////// STEP 5 - RESULT

console.log("W końcu!!!! Najmniejsza suma iloczynów to: " + sums[0]);

}

minSum([9,2,8,7,5,4,0,6]);