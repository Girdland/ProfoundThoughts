function makeQuote() {
    var quotes = ["Teskeden är den lillaste av skedar"];

    var random = Math.floor((Math.random() * quotes.length) + 0);

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

    alert(closed.src);

    function flipIt() {
            if (closed.src == "http://localhost:51975/Images/MonkSamuel.png") {
                closed.src = "Images/MonkSamuel2.png";
            }

            else {
                document.getElementById("closed").src = "http://localhost:51975/Images/MonkSamuel.png";
            }
    }

    setTimeout(function () {
        clearInterval(myVar);
        document.getElementById("closed").src = "http://localhost:51975/Images/MonkSamuel.png";
    }, 2000);
}

function showBubble() {
    var bubble = document.getElementById("text");

    document.getElementById('text').setAttribute('style', 'visibility: visible')

}