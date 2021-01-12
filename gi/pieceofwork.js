function modifyTitle() {

	// Read value of title from the input field

	var title = document.getElementById("title").value;
	// Call allCapsTitleTrimmed() function
	var toFixed = allCapsTitleTrimmed(title);

}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text

	var trimmed = text.trim();

	// Changes the text given to it to be ALL CAPS

	trimmed.toUpperCase();

	// Return the changed text

	return trimmed;
}

function calculate() {

	//selvitetään aloitus ja lopetuskellonajat sekä päivämäärä
	var start = document.getElementById("startTime").value;
	var end = document.getElementById("endTime").value;
	var date = document.getElementById("date").value;
	
	//erotetaan tunnit minuuteista, muutetaan tunnut minuuteiksi ja lisätään minuutit tuntien minuuttimäärään
	var startHours = start.substr(0, 2);
	var startMinutes = start.substr(3, 2);
	var startTime = startHours * 60;
	
	while (startMinutes != 0 && startMinutes >= 1) {
		startTime++;
		startMinutes--;
	}
	
	//sama uudestaan, nyt lopetusajan syötteellä.
	var endHours = end.substr(0, 2);
	var endMinutes = end.substr(3, 2);
	var endTime = endHours * 60;
	
	
	while (endMinutes != 0 && endMinutes >= 1) {
		endTime++;
		endMinutes--;
	}
	var minutes = endTime - startTime;

	
	//luodaan ensimmäinen tulostettava lauseke sekä syötetään sinne työaika minuutteina
	var result = "Length of the work was " + minutes + " minutes.<br>";
	

	var palkka = 0;

	//tarkistetaan onko kyseessä sunnuntai
	if (isSunday(date) == 0) {
		// sunnuntain tuntipalkka 72.00e ja viedään se tulostettavaan lausekkeeseen.
		result += "The hourly price is during the Sundays 72.00 euros.<br>";
		palkka = (minutes / 60) * 72.00;
		result += "The price of this repair work is " + palkka.toFixed(2) + " euros.";
	} else {
		result += "The hourly price is  during the workdays 48.00 euros.<br>";
		palkka = (minutes / 60) * 48.00;
		result += "The price of this repair work is " + palkka.toFixed(2) + " euros.";
	}

	//var result = "Length of the work was " + minutes + " minutes<br>The hourly price during workdays is 48.00 euros.<br>";

	document.getElementById("answer").innerHTML = result;
}


function isSunday(dateText) {

	// Split the given date text into day, month and year parts using the subStr() method
	var day = dateText.substr(0, 2);
	var month = dateText.substr(3, 2);
	var year = dateText.substr(6, 4);
	
	
	var newdate = year + "-" + month + "-" + day;


	// Create a new Date object to a variable asDate
	var asDate = new Date(newdate);

	// Get the day of the week with its getDay() method. Sunday is number 0 .

	// If day of the week is Sunday 
	if (asDate.getDay() == 0) {
		return 0;
	} else {
		return 1;
	}
}