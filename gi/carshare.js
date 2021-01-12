function calculateCosts() {

    var kilometers = document.getElementById("kilometers").value;
    
    var lper100km = document.getElementById("consumption").value;
    
    var priceeperl = document.getElementById("price").value;
    
    var participants = document.getElementById("participants").value;
    
    var value;
    
//lasketaan muuttujat
    
    value = lper100km / 100.0 * priceeperl * kilometers / participants;
    
    // vastaus tulee viedä html
    
    document.getElementById("answerId").innerHTML = "Fuel costs per participant is " + value.toFixed(2) + " euros. ";
}