document.write(typeof "This is a sentence");

document.write(typeof 44);


function my_Function() {
    document.getElementById("Test").innerHTML=0/0;

}

function my_true() {
document.getElementById("Test1").innerHTML=isNaN('This is a string');
}

function my_false() {
    document.getElementById("Test2").innerHTML=isNaN(9);

}

function this_infinity() {
    document.getElementById("infinity").innerHTML=document.write(2E310);

}

function this_neg_infinity() {
    document.getElementById("negInfinity").innerHTML=document.write(-3E310);

}

function Boolean_true() {
document.getElementById("true").innerHTML=document. write(20>2);
}

function Boolean_false() {
    document.getElementById("false").innerHTML=document. write(20<2);
    console.log(2+3);
}

function coercion() {
    document.getElementById("diff data").innerHTML=document.write("10" + 8);

}
  
function Boolean_console() {
    document.getElementById("booConsole").innerHTML=document.write(2>3); console.log(2>3);

}
 
function double_equal_true (){
    document.getElementById("doubleEqualtrue").innerHTML=document.write(8==8);
   
}

function double_equal_false (){
    document.getElementById("doubleEqualfalse").innerHTML=document.write(3==8);
}

function triple_equal_signs () {
x=10
y=10
z=3
L="Leslie"
R="Leslie"
B="Brian"
    document.getElementById("tripleEqualsigns").innerHTML=document.write(x===y); document.write(x===z); document.write(L===R); document.write(L===B);
}

function Boolean_And(){
    document.getElementById("And").innerHTML=document.write(9>2 && 10>1);

}

function Boolean_Or(){
    document.getElementById("OR").innerHTML=document.write(1>2 || 10>20);

}

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}

function notnot_Function() {
    document.getElementById("Not but true").innerHTML=!(5>10);
}
