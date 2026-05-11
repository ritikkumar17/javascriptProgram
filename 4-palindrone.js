let num = 1221;
let originalNum = num;
let reverseNum = 0;

while(num>0){
    let digit = num%10;
    reverseNum = reverseNum*10+digit
    num = Math.floor(num/10)
}

if(originalNum === reverseNum){
    console.log(`${originalNum} is a palindrone number`)
}else{
    console.log(`${originalNum} is not a palindrone number`)
}


// With easy method

let number = 1221;
let reverse = number.toString().split("").reverse().join("")

if(number == reverse){
    console.log(`${number} is a palindrone number`)
}else{
    console.log(`${number} is a not a  palindrone number`)
}