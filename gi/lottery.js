	var names = [];
	var index = 0;
	function addName() {
		// Assign name from the input field to the array
		names.push(document.getElementById("name").value);
		// Increase the index by one
		index = index + 1;
        var namesText = "";
		// Go through the array in a for loop adding each name at the end of the namesText
		for (var i = 0; i <names.length; i++){
            namesText = namesText + " " + names[i];
        }
		// Write the names on the page, to the names div, as content of the div
		document.getElementById("nameList").innerHTML = "Insterted names: " + namesText;

		// Empty the input field of name as that name was just put in the array
        document.getElementById("name").value = "";
		// Empty the answer text
        document.getElementById("answer").innerHTML = "";
	}

	function makeDraw() {

		// Randomize the index of the winner
		var winner = Math.floor(Math.random() * names.length);
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "<br>winner is " + names[winner];

	}