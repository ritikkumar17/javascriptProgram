let name = "madam"
let reverse_name ="";

for (let i = name.length-1; i>=0; i--){
    reverse_name = reverse_name +name[i]
}
console.log(reverse_name)
if (name === reverse_name){
    console.log(`${name} is palindrome string`)
}else{
    console.log(`${name} is not a palindrome string`)
}
