

var num1 =0 ;
var num2 = 0;

function funcC(){
     document.getElementById("cin").innerHTML = "";
    
     
}

function op(x){
    document.getElementById("cin").innerHTML += x;
    
}

function num(x){
    
    document.getElementById("cin").innerHTML += x.toString();

}

function eq(){
    let res = document.getElementById("cin").innerHTML;
    let ans = eval(res);
    document.getElementById("cin").innerHTML = ans;
}