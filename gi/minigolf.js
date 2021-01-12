var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    var result;
    var i = 0;
    // Sort the array
    minigolf.sort();
    while (i < minigolf.length) {
        i++;
    }
    i--;

    // Assign the smallest result of to a variable
    result = "the smallest result is " + minigolf[0] + "(winner).<br>";

    // Assign the biggest result to a variable
    result += "the biggest result is " + minigolf[i] + "."

    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = result;
}
