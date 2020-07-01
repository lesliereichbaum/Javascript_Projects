function my_Dictionary() {
    var Music = {
        Musician: "Neil Young",
        Album: "Zuma",
        Nationality: "Canadian",
        Age: 74,
        Says: "I crossed the ocean for a heart of gold.",
    };
    document.getElementById("Dictionary").innerHTML=Music.Says;

}

function my_Animal() {
    var Pet = {
        Type: "Cat",
        Lives: "nine",
        Age:  9,
        Sound: "Meow",
        Love: "endless",
        Love: "forever",
    };
    delete Pet.Type;
    document.getElementById("Kitty").innerHTML=Pet.Type;
}