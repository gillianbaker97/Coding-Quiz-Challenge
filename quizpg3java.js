var rightClick = document.getElementById("right");
//var right1Click = document.getElementById("right1");
var buttonClick = document.getElementById("button");
var buttonWClick = document.getElementById("buttonW");
var buttonRClick = document.getElementById("buttonR");
var score3 = localStorage.getItem("highScore3");



var Correct = document.querySelector('.Correct');
var Incorrect = document.querySelector('.Incorrect');


Correct.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
Incorrect.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );



buttonClick.addEventListener("click", function myFunction() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Correct').innerHTML = '';}, 5000);
//window.location.replace("quizpg2.html");
setTimeout(function(){window.location.replace("form1.html")}, 2000);
}
);

rightClick.addEventListener("click", function myFunction2() {
Correct.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("form1.html")}, 2000);
highScore3 = 6;
localStorage.setItem("highScore3", JSON.stringify(highScore3)); 

}
);

buttonWClick.addEventListener("click", function myFunction3() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("form1.html")}, 2000);

}
);

buttonR.addEventListener("click", function myFunction4() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("form1.html")}, 2000);

}
);