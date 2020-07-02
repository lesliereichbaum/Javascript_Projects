function CC_String() {
    var part_1 = "Twinkle twinkle ";
    var part_2 = "little star";
    var part_3 = "how I wonder";
    var part_4 = "what you are.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Con_Cat").innerHTML = whole_sentence;
    
}