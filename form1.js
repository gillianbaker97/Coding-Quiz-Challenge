//var highScore = document.querySelector(".highScore");
//var highScore2 = document.querySelector(".highScore2");
//var highScore3 = document.querySelector(".highScore3");
// var score = document.getElementById("score");
//var rightClick = document.getElementById("right");
//var right1Click = document.getElementById("right1");
//var highScore = 6;
//var highScore2 = 6;
//var highScore3 = 6;



highScore = 6;
highScore2 = 6;
highScore3 = 6;

console.log(6);

localStorage.setItem("highScore", JSON.stringify(highScore)); 
localStorage.setItem("highScore2", JSON.stringify(highScore2)); 
localStorage.setItem("highScore3", JSON.stringify(highScore3)); 


var score = localStorage.getItem("highScore");
var score2 = localStorage.getItem("highScore2");
var score3 = localStorage.getItem("highScore3");



function add () {
  var totalScore = JSON.parse(localStorage.getItem("highScore"));
  if (totalScore !== null) {
    document.getElementById("totalScore").innerHTML = highScore + 
    highScore2 + highScore3
  }
}

add(highScore + highScore2 + highScore3);

addEventListener("click", function(event)) {
  event.preventDefault();

}