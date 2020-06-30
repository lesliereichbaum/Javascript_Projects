function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

  function myFunction() {
      var sentence="I am learning";
      sentence += "a lot from this course!";
      document.getElementById("Concatenate").innerHTML = sentence;
  }

   function sayGreeting(greeting) {
      var response = prompt("What is your name?");
      alert(greeting +"," + response + "!");
      document.getElementById("demonstration").innerHTML = response;
   }

  sayGreeting("Have a good day");

  function anotherButton() {
      var commonPhrase="Always be yourself";
      commonPhrase += "unless you are unicorn.";
      document.getElementById("phrasebutton").innerHTML = commonPhrase;
  }
   
  function addition_Function() {
      var addition=2+2;
      document.getElementById("Math").innerHTML = "2+2 = " + addition;
  }
