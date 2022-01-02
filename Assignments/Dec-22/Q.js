// Take 3 inputs-> push in an array by using parse
// -> Create an array using .push with prompt and also using parseInt();
// -> Take three numbers and find max. (Using arrays)

var arr = [];

alert(arr);

var a = prompt("Enter number 1");
a = parseInt(a);
arr.push(a);

a = prompt("Enter number 2");
a = parseInt(a);
arr.push(a);

a = prompt("Enter number 3");
a = parseInt(a);
arr.push(a);

alert(arr);
// alert(arr.length)


if (arr[0] > arr[1])
	 {if (arr[0] > arr[2])
		 {alert(arr[0]);
		 }else
		 {alert(arr[2]);}
	 }else
	 {if(arr[1] > arr[2])
		 {alert(arr[1]);
		 }else
		 {alert(arr[2]);}
	 }


// Different ways to find greatest num
// For loop
// Math.max
// If else
//Spread operator(further reading)
//var max= Math.max(...arr); --> Spread

// math.max
// var max = Math.max(arr[0], arr[1], arr[2])
// alert(max)
// We don't need to parse in Math.max, it does it internally
