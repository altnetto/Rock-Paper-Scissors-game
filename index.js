var comp = [
    document.getElementById("rockBtnComp"),
    document.getElementById("paperBtnComp"),
    document.getElementById("sciBtnComp")
];

var you = [
    document.getElementById("rockBtnYou"),
    document.getElementById("paperBtnYou"),
    document.getElementById("sciBtnYou")
];

var pressColor = "blur(0px)";
var defColor = "blur(3px)";

function computerResult() {
    var x = Math.ceil(Math.random() * 3);

    coloringButtons(x, comp);

    return x;
}

function coloringButtons(x, player) {
    switch (x) {
        case 1:
            player[0].style.filter = pressColor;
            player[1].style.filter = defColor;
            player[2].style.filter = defColor;
            break;
        case 2:
            player[0].style.filter = defColor;
            player[1].style.filter = pressColor;
            player[2].style.filter = defColor;
            break;
        case 3:
            player[0].style.filter = defColor;
            player[1].style.filter = defColor;
            player[2].style.filter = pressColor;
            break;
    }
}

function whomWins(you, comp) {
    var compWins = "Muahahaha, I said you would lose!";
    var youWins = "Oh, you've got some luck this time";
    var tie = "So, it's a tie (but I played way better)";

    var k = you-comp;

    switch (k) {
        case -2:
            getResult = youWins;
            break;
        case -1:
            getResult = compWins;
            break;
        case 0:
            getResult = tie;
            break;
        case 1:
            getResult = youWins;
            break;
        case 2:
            getResult = compWins;
            break;
    }

    document.getElementById("result").innerHTML = getResult;

}

you[0].addEventListener("click", function () {
    var yourX = 1;
    coloringButtons(yourX, you);
    computerResult();
    whomWins(yourX,computerResult());
});

you[1].addEventListener("click", function () {
    var yourX = 2;
    coloringButtons(yourX, you);
    computerResult();
    whomWins(yourX,computerResult());
});
you[2].addEventListener("click", function () {
    var yourX = 3;
    coloringButtons(yourX, you);
    computerResult();
    whomWins(yourX,computerResult());
});
