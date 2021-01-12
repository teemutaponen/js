function showWeightGoals() {
    // luetaan käyttäjän syöte (paino)
    var weight = document.getElementById("weight").value;
    var text = "";
    //lasketaan syöte 10% pudotuksella joka loopataan 7 kertaa
    var paino = weight * 0.1 / 7;
    for (var i = 1; i <= 7; i++){
        weight = weight - paino;
        text = text + "After " + i + ". week " + weight.toFixed(1) + " kg <br>";

    }
    
        document.getElementById("answer").innerHTML = text;
}
