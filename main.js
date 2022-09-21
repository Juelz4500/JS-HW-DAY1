//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/console.log('testing')
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string){
    for(let name in dog_names){
        if (name == string){
            return name
        } else{
            return 'No Matches'
        }
    }
}

console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!"))
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// given arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    for (index in givenarr){
        if(index % 2 == 0){
            givenarr.splice(0, 1, 'even index')
            givenarr.splice(2, 1, 'even index')
            givenarr.splice(4, 1, 'even index')
        }
        return console.log(givenarr)
    }
    
}
console.log(replaceEvens())
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars solution 1
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe  


function even_or_odd(number) {
    if (number % 2 === 0) {
  return("Even");
  }
  else {
  return("Odd");
}
  }


// Codewars solution 2
// https://www.codewars.com/kata/55a70521798b14d4750000a4/solutions/javascript

function greet(name){
    return (`Hello, ${name} how are you doing today?`)
  }