function calculateProfit() {
    var rounds = document.getElementById("rounds").value;
    var pips;
    var profit;
    var bet;
    var win = 0;

    bet = rounds * 1;

    while (rounds != 0) {
        pips = Math.round((Math.random() * 5) + 1);

        if (pips == 1 || pips == 3 || pips == 5) {
            win += 0;
        } else if (pips == 2 || pips == 4) {
            win += 1.25;

        } else {
            win += 1.5;
        }
        rounds--;
    }
    profit = win - bet;
    document.getElementById("answer").innerHTML = "Bets were all together " + bet.toFixed(2) + " euros <br>Wins were " + win.toFixed(2) + " euros <br>Profit was " + profit.toFixed(2) + " Euros";
}