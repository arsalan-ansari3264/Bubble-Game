var timer = 60;
var score = 0;
var randomNum;


function makeBubble() {
    let clutter = ""
    for (var i = 0; i <= 216; i++) {
        var random = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${random}</div>`
    }

    document.querySelector('.panel-bottom').innerHTML = clutter
}

function runTimer() {
    var timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br/>  Your Score is :${score} 😆😎</h1>`
            clearInterval(timeInterval);
        }
    }, 1000);

}

function getHit() {
    randomNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = randomNum;
}
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function changeOccurence() {
    document.querySelector('#btn')
        .addEventListener('click', function () {
            makeBubble();
        })
}
function removeClass() {
    var glass = document.getElementById('main-glass')
    document.querySelector('.glass-button')
        .addEventListener('click', function () {
            glass.style.display = "none";
        })
}
function start() {
    document.querySelector('.glass-button')
        .addEventListener('click', function () {
            setTimeout(() => {
                getHit();
                runTimer()
                makeBubble()
                removeClass()
            }, 500);
        })
}

document.querySelector('#pbtm')
    .addEventListener('click', function (dets) {
        var bubbleHit = Number(dets.target.textContent)
        if (bubbleHit == randomNum) {
            increaseScore();
            makeBubble();
            getHit()

        }
    })

removeClass()
changeOccurence()
start()