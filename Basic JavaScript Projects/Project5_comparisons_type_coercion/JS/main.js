document.write(typeof "Word"); // returns string
document.write(typeof 3); // returns number

document.write(6 > 3); // returns true
document.write(6 < 3); // returns false

document.write("10" + 5);

document.write(5 == 5); // returns true
document.write(3 == 7); //returns false

X = 4;
Y = 4;
document.write(X === Y); //returns true

A = 6; 
B = "6";
document.write(A === B); //returns false

document.write(7 > 3 && 8 > 4); // returns true using AND operator
document.write(6 > 12 || 8 > 16); // returns false using OR operator

function not_Function() { // returns true using NOT operator
    document.getElementById("Not").innerHTML = !(7 > 14);
}
