var n =(prompt("Enter any number"));
n = parseInt(n);
for (var i=0 ; i <= n ; i = i + 1){
    for(var j = 1; j <= i; j = j + 1){
       document.write(" * ");
    }
    document.write("<br/>");    
}