
/*Example of Global Variable 
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
*/

function what_is_today () {
    if (new Date().getHours() <19) {
        document.getElementById("the_date").innerHTML="Hope you are having a nice day!";

    }
}

function its_morning () {
    if (new Date ().getHours() <10) {
        document.getElementById("morning").innerHTML="Have an energizing morning!";

    }
}

function Age_Teller() {
    your_age = document.getElementById("your_age").value;
    if (your_age > 18) {
        Vote="You can vote-yay!";
    }
    else {
        Vote="You are too young to vote, but you can still be politically active.";
    }
    document.getElementById("How_old_are_you_anyway?").innerHTML = Vote;
}