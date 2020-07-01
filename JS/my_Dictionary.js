function my_Dictionary() {
    var Music = {
        Musician: "Neil Young",
        Album: "Zuma",
        Nationality: "Canadian",
        Age: 74,
        Says: "I crossed the ocean for a heart of gold.",
    };
    document.getElementById("Dictionary").innerHTML = Music.Says;

}
