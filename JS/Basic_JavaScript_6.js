function count_Function () {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count () {
        var Starting_point = 22;
        function Plus_one() {Starting_point += 4;}
        Plus_one();
        return Starting_point;
    }
}