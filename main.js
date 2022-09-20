//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string){
    for(let name of dog_names){
        if (name == dog_string){
            return name
        } else{
            return 'No Matches'
        }
    }
}

console.log(findWords("dog"))
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// let givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

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

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]