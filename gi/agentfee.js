function calculateFee() {
		
	// Read value from the input field
		
var price = document.getElementById("price").value;
var fee;
	// Calculate fee, save the result to a variable
		fee = price * 0.0344;
	// if the fee is under minimum, update it
		if (fee < 2400){
            fee = 2400;
        }

	// Write the answer on the page, to the fee div, as content of the div
    document.getElementById("fee").innerHTML = "Real state agent's fee is " + fee.toFixed(2) + " euros";
}