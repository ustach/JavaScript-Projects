var X = 1 // global variable
function Add_numbers_1() {
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { // local variable
    var X = 1;
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 10);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { // use of console.log() method to debug code 
    var X = 1;
    console.log(10 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Age_Function() { // else statement 
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
     }
else {
    Vote = "You are not old enough to vote!";
}
document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    }