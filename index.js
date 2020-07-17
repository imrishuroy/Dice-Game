var randomNumber1 = Math.floor( Math.random() * 6  + 1); // 1-6

var randomDiceImage =  "dice" + randomNumber1 +".png";//dice1 - dice6

var randomImageSource =  randomDiceImage ; //images/dice1 - images/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

var randomNumber2 =  Math.floor( Math.random() * 6  + 1); // 1-6

var randomImageSource2 = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


// selection of winners
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!😎"
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!!🤓"
}else{
  document.querySelector("h1").innerHTML = "Draw!!🧐"
}
