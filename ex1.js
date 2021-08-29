const num = 123;
let sum = 0;
// your code goes here
//the digit
sum = num%10;
//ten's digit
sum += (Math.floor(num/10))%10;
//hundred's digit
sum += (Math.floor(num/100))%10;

console.log(sum);