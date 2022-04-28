function Vote_Function() { // ternary operation
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote.";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Fruit(Taste,Color) { // constructor function 
    this.Fruit_Taste = Taste;
    this.Fruit_Color = Color;
}
var Banana = new Fruit("sweet", "yellow");
var Kiwi = new Fruit("sour", "green");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Sandra eats a " + Banana.Fruit_Taste + " and " + Banana.Fruit_Color + " banana.";
}
function Nested_Function() { // nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Start = 10;
        function Minus_one() {Start -= 1;}
        Minus_one();
        return Start;
    }
    }