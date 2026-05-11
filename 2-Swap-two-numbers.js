let a = 10;
let b = 20;
// using third variable
let c = a
a=b
b=c
console.log(a)
console.log(b)

//------------------------------------
//(without using third variable)
let num1=20;
let num2=40;

[num1 , num2] = [num2 , num1]
console.log(num1)
console.log(num2)