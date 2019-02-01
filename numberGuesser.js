var min = document.querySelector(".min");
var max = document.querySelector(".max");
var minInput = document.querySelector(".min-input");
var maxInput = document.querySelector(".max-input");
var updateButton = document.querySelector(".update");
var randomNumber = 1;

var challengerName1Input = document.querySelector(".challenger-1-name-input")
var challengerName2Input = document.querySelector(".challenger-2-name-input")
var challengerName1 = document.querySelector(".challenger-1-name")
var challengerName2 = document.querySelector(".challenger-2-name")
var challenger1GuessInput = document.querySelector("#challenger-1-guess-input")
var challenger2GuessInput = document.querySelector("#challenger-2-guess-input")
var challenger1Guess = document.querySelector("#challenger-1-guess")
var challenger2Guess = document.querySelector("#challenger-2-guess")


updateButton.addEventListener("click", updateRange);



  function updateRange(e) {
  e.preventDefault();  
  min.innerText = minInput.value;
  max.innerText = maxInput.value;
  minInteger = Math.ceil(parseInt(minInput.value,10))
  maxInteger = Math.floor(parseInt(maxInput.value,10))
  return randomNumber = Math.floor(Math.random() * (maxInteger-minInteger+1)) + minInteger;
};