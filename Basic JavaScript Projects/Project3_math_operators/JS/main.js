var X = 1; // Defining first variable and giving it a string value
X++;
document.write(X) ;

var Y = 5; // Defining first variable and giving it a string value
Y--;
document.write(Y) ;

function addition_Function() { // Addition function 
    var addition = X + Y
    document.getElementById("Math").innerHTML = "The answer is:" + addition;
    }

function more_Math() { 
    var simple_Math = (1 + 1) * 10 / 2 - 2;
    document.getElementById("Math").innerHTML = "1 plus 1, multipied by 10, divided in half and then subtracted by 2 equals " + simple_Math;
}

function modulus_Operator() { // Modulus function
    var simple_Math = 25 % 5;
    document.getElementById("Math").innerHTML = "When you divide 25 by 5 you have a reminder of: " + simple_Math;
}

function subtraction_Function() {   // Subtraction function 
    var Subtraction = Math.random() - 2;
    document.getElementById("Math").innerHTML = "The answer is:" + Subtraction;
}

