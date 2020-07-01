function Vote_Age() {
    var Age, Can_vote;
    Age = document.getElementById("votingAge").value;
    Can_vote = (Age<18) ? "You are too young" : "You are old enough";
    document.getElementById("votingAge").innerHTML = Can_vote + "to vote.";

}