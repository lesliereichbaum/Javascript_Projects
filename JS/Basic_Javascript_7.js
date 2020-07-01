
//Example of Global Variable 
var X=20;
function Add_numbers_1 () {
    document.write(20 + X + "<br>");
}
function Add_numbers_2 () {
    document.write(X + 30);
}

Add_numbers_1 ();
Add_numbers_2 ();

//Example Local Variable

function Add_numbers_3 () {
    var y=10;
    document.write(20 + y + "<br>");
}
    var p=100;
function Add_numbers_4 () {
    document.write(p + 100);
}

Add_numbers_3();
Add_numbers_4();


//Example of local variable with an ERROR

function Add_numbers_5 () {
    var z=1;
    document.write(1 + z) + "<br>");
}
function Add_numbers_6 () {
    document.write(z + 10);
}

Add_numbers_5 ();
Add_numbers_6 ();