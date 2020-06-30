
  function displayDate() {
  document.getElementById("Math").innerHTML = 2+2;
   }

function subtraction_Function() {
  var Subtraction = 7-2;
  document.getElementById("moreMath").innerHTML=7-2;
}   

function multiplication() {
  var simple_Mult = 6*6;
  document.getElementById("Mult").innerHTML="6x6 = " +simple_Mult;
}       

function division() {
  var simple_Div = 48/6;
  document.getElementById("Div").innerHTML="48/6 = " +simple_Div;
}   

function more_Math() {
  var simple_Ops = (1+2) * 10/2-5;
  document.getElementById("MathOperations").innerHTML=(1+2)*10/2-5;
}

function modulus_Operator() {
  var simple_Math= 25%6;
  document.getElementById("modulusMath").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math;
}

function negation_Operator() {
  var x=10;
  document.getElementById("negativeMath").innerHTML= -x;

}

function increment_Operator() {
var X=5;
X++;
document.write(X);
}

function decriment_Operator(){
  var X=5.25;
  X--;
  document.write(X);
}

window.alert(Math.random()* 100);

function round(){
document.getElementById("round").innerHTML = Math.round(8.7);
}