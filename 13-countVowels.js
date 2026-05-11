let vowels = "amisnhou"
let count =""

for ( i=vowels.length-1; i>=0; i--){
    let ch = vowels[i]

    if(ch =="a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
        count++
    }
}
console.log(count)

