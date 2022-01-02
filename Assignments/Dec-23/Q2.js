// -> Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).

var a = prompt("Enter the number")

a = parseInt(a);
for (var i = 1; i <= a; i = i + 1){
    if(i % 2 == 0){
        console.log(i)
    }
}