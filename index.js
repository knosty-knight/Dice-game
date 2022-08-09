var randomNumber1 = Math.floor(Math.random()*6) + 1; // will generate random numbers from 1 to 6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // image/dice1.png --- image/dice6.png
document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1); // changing the img src in accordance with random image selected 

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


if(randomImageSource1> randomImageSource2){  // player 1 wins
    document.querySelector("h1").innerHTML="💪player1 won!";
}

else if(randomImageSource1 < randomImageSource2){ // player 2 wins
    document.querySelector("h1").innerHTML="player2 won!💪";
}

else{
    document.querySelector("h1").innerHTML="Draw!";
}