var count1= 0;
var count2 = 0;

document.getElementById("click2").innerText=count0;

function Like(){
    count1= count1+1;
    document.getElementById("click1").innerText=count1;
}
function Dislike(){
    count2= count2-1;
    document.getElementById("click2").innerText=count2;
}