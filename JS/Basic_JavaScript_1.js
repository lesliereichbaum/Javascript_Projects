window.alert("Twin Peaks Alert") //This is a popup alert the user sees before the rest of the content 

TwinPeaks = "Cast", Director= "David Lynch:", Main_Character1= "Agent Cooper:", Minor_Character="Log Lady:", PreferredBeverage= "Coffee:"; //assigned multiple variables in one statement

document.write(Minor_Character);//see notes below in Main Character section
var Minor_Character = "My log has something to tell you.";
var Minor_Character = Minor_Character.fontcolor("orange");
document.write(Minor_Character);

document.write(Director);//see notes below in Main Character section
var Director = "It's a blue rose case.";
var Director = Director.fontcolor("lightblue");
document.write(Director);

document.write(Main_Character1); //telling what I am calling to be written on the browser
var Main_Character = "That's a damn fine cup of coffee."; //telling which varible I want to say
var Main_Character = Main_Character.fontcolor("red"); //defining a variable font color
document.write(Main_Character); //putting value of result into HTML element with "red text"

document.write(PreferredBeverage);//see notes above in Main Character section 
var PreferredBeverage = "I am the universe.";
var PreferredBeverage = PreferredBeverage.fontcolor("black");
document.write(PreferredBeverage);

document.write(1+1+9); //write an expression that adds up to 11


var food="apple pie and";//Assigned string values for food and drink and then concatenated them to say apple pie and coffee
var drink="coffee";
var Normas= food+drink;
document.write(Normas);