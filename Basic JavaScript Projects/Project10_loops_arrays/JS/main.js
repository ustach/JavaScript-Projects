function Call_Loop() { // function that use a while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // function that use a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // function that use an array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Animal = {type: "dog", brade: "bulldog", color: "gray"};
    Animal.color = "black";
    Animal.price = "£1500";
    document.getElementById("Constant").innerHTML = "The cost of the " + Animal.type + " was " + Animal.price;

}

var X = 24; // let keyword
document.write(X);
{
    let X = 55;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function object() { 
let fruit = {
    name: "banana ",
    taste: "sweet ",
    color: "yellow ",
    description : function() {
        return "The fruit is a " + this.taste + this.color + this.name;
    }
};
document.getElementById("fruit_Object").innerHTML = fruit.description();
}