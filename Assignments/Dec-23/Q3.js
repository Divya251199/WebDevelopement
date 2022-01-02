// Write a program to take an input from user (num) and check whether it is a prime number or not.

var a = prompt("Enter a number");
a = parseInt(a);
let bool = true;

//Check if number is equal to 1
{if(a === 1){
    console.log("1 is neither prime nor composite number")
}


for (var i = 2; i <= a; i = i + 1){
    if (a % i == 0){
        bool = false;
        break;
    }
}
}

if(bool){
    alert("It is a prime number")
} else {
    alert("It is not a prime number")
}