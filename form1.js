var highScore = document.querySelector(".highScore");
var final = highScore.value

localStorage.setItem("final", JSON.stringify(final));
renderMessage();

function renderMessage() {
    var finalScore = JSON.parse(localStorage.getItem("final"));
    if (finalScore !==null) {
    document.querySelector(".final").textContent = highScore + 1
    }

}