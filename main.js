
var res = null;
var num1 =0 ;
var num2 = 0;
var op = null;
function funcC(){
     document.getElementById("cin").innerHTML="";
     res=null;
     num1=0;
}

function funcX(){
    document.getElementById("cin").innerHTML="";
}

function div(){
    document.getElementById("cin").innerHTML +="/";
}

function plus(){
    document.getElementById("cin").innerHTML +="+";
    op = "+" ;
}

function eq(){
    
    if(op == "+"){
        res = num1 + num2;
    }
    document.getElementById("cin").innerHTML = res;
    num1 = res;
    num2=0;
    
}

function saat(){
    document.getElementById("cin").innerHTML += "7";
    if(op==null) num1 = 7;
    else num2=7;
}