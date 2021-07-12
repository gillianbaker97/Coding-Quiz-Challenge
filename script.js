var rightClick = document.getElementById("right");
var buttonClick = document.getElementById("button");
var buttonWClick = document.getElementById("buttonW");
var buttonRClick = document.getElementById("buttonR");



var Correct = document.querySelector('.Correct');
var Incorrect = document.querySelector('.Incorrect');


Correct.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
Incorrect.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );



rightClick.addEventListener("click", function myFunction() {
Correct.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Correct').innerHTML = '';}, 5000);
//window.location.replace("quizpg2.html");
setTimeout(function(){window.location.replace("quizpg2.html")}, 3000);
}
);

buttonClick.addEventListener("click", function myFunction2() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("quizpg2.html")}, 3000);

}
);

buttonWClick.addEventListener("click", function myFunction3() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("quizpg2.html")}, 3000);

}
);

buttonR.addEventListener("click", function myFunction4() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
//setTimeout(function(){document.querySelector('.Incorrect').innerHTML = '';}, 3000);
setTimeout(function(){window.location.replace("quizpg2.html")}, 3000);

}
);