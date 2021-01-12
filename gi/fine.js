function tellInfractionFine() {
    var speed = document.getElementById("drivingSpeed").value;
    var limit = document.getElementById("speedLimit").value;

    var speeding;
    var fine;


    if (limit >= 10 && limit <= 60) {
        speeding = speed - limit;
        if (speeding >= 5 && speeding <= 15) {
            fine = "infraction fine is 85 euros.";
        } else if (speeding > 15 && speeding <= 20) {
            fine = "infraction fine is 115 euros.";
        } else {
            if (speeding <= 0) {
                fine = "no speeding, no fine.";
            } else {
                fine = "income-based unit fine.";
            }
        }
    } else if (limit >= 70 && limit <= 120) {
        speeding = speed - limit;
        if (speeding >= 5 && speeding <= 15) {
            fine = "infraction fine is 70 euros.";
        } else if (speeding > 15 && speeding <= 20) {
            fine = "infraction fine is 100 euros.";
        } else {
            if (speeding <= 0) {
                fine = "no speeding, no fine.";
            } else {
                fine = "income-based unit fine.";
            }
        }
    }

    document.getElementById("answer").innerHTML=fine;
}
