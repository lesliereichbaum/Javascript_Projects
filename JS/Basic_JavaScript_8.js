
//CONCATENATED STRING 
function CC_String() {
    var part_1 = "Twinkle twinkle ";
    var part_2 = "little star";
    var part_3 = "how I wonder";
    var part_4 = "what you are.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Con_Cat").innerHTML = whole_sentence;
    
}

//Slice() METHOD 

function slice_Method () {
    var Sentence = "Come play with us Danny";
    var Section = Sentence.slice (9, 14);
    document.getElementById("Slice").innerHTML=Section;
}

//UPPER CASE METHOD 

function myUpperCase() {
    var text= document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML = text.toUpperCase();

}

//Search Method 

function searching() {
    var str = "Please find where locate occurs!. Just kidding, find 'where'!";
    var pos = str.search("where");
document.getElementById("search").innerHTML = pos;
}

//String NUmber Method 

function string_Method () {
    var X=1000;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); 
}

//Precision Method 

function precision_Method () {
    var Y= 1234567.890123456789
    document.getElementById("Precision").innerHTML=Y.toPrecision(11);
}

//Fixed Method 

function fixed_Method() {
    var str="Bonjour!";
    var result = str.fixed();
    document.getElementById("fixed").innerHTML= result;

}

//valueOf Method 

function myValue() {
    var str = "Bonjour!";
    var res = str.valueOf();
    document.getElementById("valueof").innerHTML = res;
}