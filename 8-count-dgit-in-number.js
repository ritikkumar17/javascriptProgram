let num = 1265451215
let count = 0;

while(num>0){
    count++
    num=Math.floor(num/10)
    
}
console.log("Total digit:- " + count)


// Easy way

let num_data=1555484;
let count_data = num_data.toString().length
console.log(count_data)