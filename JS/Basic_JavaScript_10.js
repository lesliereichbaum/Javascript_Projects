
// Call LOOP 
function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X<120){
        Digit +="<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}



// For LOOP 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
document.getElementById("List_of_Instruments").innerHTML = Content;
}


// ARRAY

function array_Function() {
    var Dog_Photo = [];
    Dog_Photo [0] = "sleeping";
    Dog_Photo [1] = "playing";
    Dog_Photo [2] = "eating";
    Dog_Photo [3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is" +
        Dog_Photo[0] + " .";
}

//CONSTANT

function constant_function () {
    const Musical_Instrument = {type: "guitar", brand:"Gibson", color:"multi"};
    Musical_Instrument.color = "green";
    Musical_Instrument.price = "$1400";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color +
        Musical_Instrument.type + "was" +Musical_Instrument.price;

}

// LET KEYWORD 

var X= 44;
document.write(X);
{
    let X = 87;
    document.write("<br>" + X);
document.write("<br>" + X);

document.getElementById("let_keyword").innerHTML=X;
}

//RETURN STATEMENT 
function return_statement(name) {
    return "Greetings" + name;
}
document.getElementById("return").innerHTML = return_statement("Earthling");

//OBJECT with THIS keyword 

let car = {
    make: "Honda ",
    model: "Civic ",
    year: "2019 ",
    color: "blue ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;  
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

//BREAK STATEMENT

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

//CONTINUE STATEMENT

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;