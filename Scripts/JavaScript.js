function makeQuote() {
    var quotes = [
        "Teskeden är den lillaste av skedar",
        "Skä:men ä: inte ska:p!",
        "Man kan sitta på innangården",
        "Söf and töf",
        "Det är klart efter lunch",
        "50% av människor är dummare än genomsnittet"
    ];
    var lastQuote = document.getElementById("quote").innerHTML;


    var random = 0;

    for (var x = 0; x < 50; x++) {
        random = Math.floor((Math.random() * quotes.length) + 0);
        if (lastQuote != quotes[random]) {
            break;
        }
    }

    document.getElementById("quote").innerHTML = quotes[random];
}


function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
    setTimeout(function () { audio.pause(); }, 2000);
}

function makeTalk() {
    var closed = document.getElementById("closed");
    var open = document.getElementById("open");
    var i = 0;

    var myVar = setInterval(flipIt, 100);

    function flipIt() {
        if (closed.src == "https://girdland.github.io/ProfoundThoughts/Images/MonkSamuel.png") {
            closed.src = "Images/MonkSamuel2.png";
        } else {
            document.getElementById("closed").src = "https://girdland.github.io/ProfoundThoughts/Images/MonkSamuel.png";
        }
    }

    setTimeout(function () {
        clearInterval(myVar);
        document.getElementById("closed").src = "https://girdland.github.io/ProfoundThoughts/Images/MonkSamuel.png";
    }, 2000);
}

function showBubble() {
    var bubble = document.getElementById("text");

    bubble.setAttribute('style', 'visibility: visible')
}
