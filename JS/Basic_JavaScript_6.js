
function School(name, location, founded, mascot) {
    this.School_name= name;
    this.School_location= location;
    this.School_founded= founded;
    this.School_mascot = mascot;
}

var Alyssa = new School ("Harvard", "Cambridge", 1650, "No_Mascot");
var Anna = new School("Ohio State", "Columbus", 1870, "Brutus");
var Sonny = new School("USC", "Los Angeles", 1850, "Trojan");
function myFunction() {
    document.getElementById("New_and_This").innerHTML=
    "Alssay goes to " + Alyssa.School_name + "in" + Alyssa.School_location +
    "which was founded in" + Alyssa.School_founded;
}