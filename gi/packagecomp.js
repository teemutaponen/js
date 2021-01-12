function comparePackages() {
	var txt = document.getElementById("textMessages").value;

    var calls = document.getElementById("callTime").value;
		// assign input field values into a variables
        var special;
        var package;
        
        
		// calculate the costs of the Special Package
		special = 19.90 + (txt*0.069) + (calls*0.069);
        if (special<29.90){
            package = "The Special package (" + special.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
            	// If the Special package is cheaper than the All-inclusive package 
        } else {
            package = "The All-inclusive package (29.90) is cheaper than the Special package (" + special.toFixed(2) + ")"
        }
    document.getElementById("answer").innerHTML = package;
}