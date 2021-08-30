const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92 , 100, 30]
// your code goes here

function compareNumbers(a, b) {
    return a - b;
  }

function findRange(arr){
    //finds the range by finding max and min and sub
    //works on any array (not sorted)
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    return max-min;
}

let range, median, secondRange;
let secondHalfGrades = [];
for(let i = 1; i <= Math.floor(grades.length / 2); i++){
    //this loop creates a new array with the second half of the grades.
    secondHalfGrades.push(grades[grades.length - i]);
}
secondRange = findRange(secondHalfGrades);
range = findRange(grades);
median = grades.sort(compareNumbers)[Math.floor(grades.length / 2)]
console.log(grades);

console.log("Stats:\n");
console.log("\tRange: " + range + "\n");
console.log("\tMedian: " + median + "\n");
console.log("\tHalf Range: " + secondRange);

