var min = document.querySelector(".min");
var max = document.querySelector(".max");
var minInput = document.querySelector(".min-input");
var maxInput = document.querySelector(".max-input");
var updateButton = document.querySelector(".update");
var challengerNameOneInput = document.querySelector(".challenger-1-name-input")
var challengerNameTwoInput = document.querySelector(".challenger-2-name-input")
var challengerNameOne = document.querySelector(".challenger-1-name")
var challengerNameTwo = document.querySelector(".challenger-2-name")
var challengerOneGuessInput = document.querySelector("#challenger-1-guess-input")
var challengerTwoGuessInput = document.querySelector("#challenger-2-guess-input")
var challengerOneGuess = document.querySelector("#challenger-1-guess")
var challengerTwoGuess = document.querySelector("#challenger-2-guess")
var submitButton = document.querySelector(".submit-button")
var randomNumber;


var challengerOneConditional = document.querySelector(".challenger-1-conditional")
var challengerTwoConditional = document.querySelector(".challenger-2-conditional")

updateButton.addEventListener("click", updateRange);
submitButton.addEventListener("click", submitInfo);



  function updateRange() {  
    min.innerText = minInput.value;
    max.innerText = maxInput.value;
    minInteger = Math.ceil(parseInt(minInput.value,10))
    maxInteger = Math.floor(parseInt(maxInput.value,10))
    randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
    console.log(randomNumber)
};


  function submitInfo() {
    challengerNameOne.innerText = challengerNameOneInput.value
    challengerNameTwo.innerText = challengerNameTwoInput.value
    challengerOneGuess.innerText = challengerOneGuessInput.value
    challengerTwoGuess.innerText = challengerTwoGuessInput.value
    if (parseInt(challengerOneGuessInput.value) > randomNumber) {
      challengerOneConditional.innerText = "That's Too High"}
    else if (parseInt(challengerOneGuessInput.value) == randomNumber) {
      challengerOneConditional.innerText = "FUCK YOU FOR GUESSING RIGHT"}
    else  {
    challengerOneConditional.innerText = "That's Too Low"}
    
    if (parseInt(challengerTwoGuessInput.value) > randomNumber) {
      challengerTwoConditional.innerText = "That's Too High"}
    else if (parseInt(challengerTwoGuessInput.value) == randomNumber) {
      challengerTwoConditional.innerText = "FUCK YOU FOR GUESSING RIGHT"}
    else  {
    challengerTwoConditional.innerText = "That's Too Low"}
  };