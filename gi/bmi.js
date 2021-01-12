function calculateBMI() {

    // käyttäjän syöttämä paino ja pituus
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // luodaan muuttujat
    var bmi;
    var printti;

    bmi = weight / (height / 100.00 * height / 100.00);
    if (bmi > 25.00) {
        printti = "Body mass index (BMI) is " + bmi.toFixed(2) + " (Overweight)";
    } else if (bmi < 18.40) {
        printti = "Body mass index (BMI) is " + bmi.toFixed(2) + " (Weight less than normal weight)";
    } else {
        printti = "Body mass index (BMI) is " + bmi.toFixed(2) + " (Normalweight)";
    }



    document.getElementById("answer").innerHTML = printti;


}