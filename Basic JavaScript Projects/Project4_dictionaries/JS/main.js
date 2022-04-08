function my_Dictionary() { // This function outputs a KVP into an HTML element
    var Animal = { 
        Species: "Dog", 
        Color:"White",
        Breed: "Husky",
        Age: 3,
        Sound:"Bark!"
    };
    delete Animal.Sound; // Delete operator removes the key before its value is displayed 
    document.getElementById("Dictionary").innerHTML = Animal.Sound; 
}