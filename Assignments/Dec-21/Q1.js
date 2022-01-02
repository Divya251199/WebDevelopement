
// Take 3 inputs from the user and show minimum of the three.	 

var a = prompt("Enter number 1")
var b = prompt("Enter number 2")
var c = prompt("Enter number 3")

if (a < b) {
    if (a < c){
        alert("a is the smallest number")
    } else {
        alert("c is the smallest number")
    } 
} else {
    if (b < c) {
        alert ("b is the smallest number")
    } else {
        alert ("c is the smallest number")
    }
}



