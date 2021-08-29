const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA =0, solutionB = 0;
// your code goes here
solutionA = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
solutionB = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
if(solutionA === solutionB)
    console.log(solutionA);
else
    console.log(solutionA, solutionB);