let element = [25,1,56,85,10]
let smallest_element = element[0]

for (let i = 1; i<= element.length ; i++){
    if(element[1] < smallest_element){
        smallest_element = element[i]
    }
}

console.log(smallest_element)