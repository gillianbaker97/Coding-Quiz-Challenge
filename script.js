var rightClick = document.getElementById("right");
var buttonClick = document.getElementById("button");

var Correct = document.querySelector('.Correct');
var Incorrect = document.querySelector('.Incorrect');
Correct.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
Incorrect.setAttribute("style", "opacity: 0; filter: alpha(opacity=0); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );


rightClick.addEventListener("click", function myFunction() {
Correct.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );
    

}
)

buttonClick.addEventListener("click", function myFunction2() {
Incorrect.setAttribute("style", "opacity: 1; filter: alpha(opacity=1); display: flex; justify-content: center; color:grey; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 20px; " );

}
)