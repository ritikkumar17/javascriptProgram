let element = [10,25,50,69]
let largest_element=""

for(let i = 1; i<=element.length; i++){
    if (element[i] >largest_element){
        largest_element = element[i]
    }
}
console.log(largest_element)
