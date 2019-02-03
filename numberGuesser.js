var min = document.querySelector(".min");
var max = document.querySelector(".max");
var minInput = document.querySelector(".min-input");
var maxInput = document.querySelector(".max-input");
var minInteger;
var maxInteger ;
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
var clearButton = document.querySelector('.clear-button')
var resetButton = document.querySelector('.reset-button')



var challengerOneConditional = document.querySelector(".challenger-1-conditional")
var challengerTwoConditional = document.querySelector(".challenger-2-conditional")

var inputRangeError = document.querySelector('#input-range-error')
var errorMessageGuessOne = document.querySelector('.error-message-guess-one')
var errorMessageGuessTwo = document.querySelector('.error-message-guess-two')
// var maxLessMin = document.querySelector("#max-less-min")
var minMoreMax = document.querySelector("#min-more-max")
var outsideRange1 = document.querySelector("#outside-range-one")
var outsideRange2 = document.querySelector("#outside-range-two")
var noRange = document.querySelector("#no-range")
var noSubmit = document.querySelector("#no-submit")

var cardContainer = document.querySelector(".column-2")
var numGuesses = 0;


updateButton.addEventListener("click", updateRange);
submitButton.addEventListener("click", submitInfo);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', reset);



function updateRange() {  
  min.innerText = minInput.value;
  max.innerText = maxInput.value;
  minInteger = Math.ceil(parseInt(minInput.value,10))
  maxInteger = Math.floor(parseInt(maxInput.value,10))
  randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
  console.log(randomNumber)

    // console.log(parseInt(minInput.value))

    // if (maxInteger < minInteger) {
    //   maxLessMin.classList.remove("error-message");
    // }else{
    //   maxLessMin.classList.add("error-message");
    // }

  if (minInput.value == "" || maxInput.value == "") {noRange.classList.remove("error-message")
  } else {
    noRange.classList.add('error-message')
  }

  if (maxInteger < minInteger) {
    minMoreMax.classList.remove("error-message");
  } else {
    minMoreMax.classList.add("error-message");
  }

  if (parseInt(minInput.value)=== false) {
    inputRangeError.classList.remove('error-message');
  } else {
    inputRangeError.classList.add('error-message');
  }

  if (parseInt(maxInput.value)=== false) {inputRangeError.classList.remove('error-message');
  } else {
    inputRangeError.classList.add('error-message');
  }
};


function submitInfo() {
  numGuesses += 2;
  challengerNameOne.innerText = challengerNameOneInput.value
  challengerNameTwo.innerText = challengerNameTwoInput.value
  challengerOneGuess.innerText = challengerOneGuessInput.value
  challengerTwoGuess.innerText = challengerTwoGuessInput.value
  if (parseInt(challengerOneGuessInput.value) > randomNumber) {
    challengerOneConditional.innerText = "That's Too High"}
    else if (parseInt(challengerOneGuessInput.value) == randomNumber) {
      challengerOneConditional.innerText = "FUCK YOU FOR GUESSING RIGHT"

      pOneWinCard();

      // minInput = parseInt(minInput.value) - 10;
      // min.innerText = minInput;
      // maxInput = parseInt(maxInput.value) + 10;
      // max.innerText = maxInput;
      // minInteger = Math.ceil(parseInt(minInput,10));
      // maxInteger = Math.floor(parseInt(maxInput,10));
      // randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
    }
    else  {
      challengerOneConditional.innerText = "That's Too Low"}



      if (parseInt(challengerTwoGuessInput.value) > randomNumber) {
        challengerTwoConditional.innerText = "That's Too High"}
        else if (parseInt(challengerTwoGuessInput.value) == randomNumber) {
          challengerTwoConditional.innerText = "FUCK YOU FOR GUESSING RIGHT";
          pTwoWinCard();

          minInput = parseInt(minInput.value) - 10;
          min.innerText = minInput;
          maxInput = parseInt(maxInput.value) + 10;
          max.innerText = maxInput;
          minInteger = Math.ceil(parseInt(minInput,10));
          maxInteger = Math.floor(parseInt(maxInput,10));
          randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;

        }
        else  {
          challengerTwoConditional.innerText = "That's Too Low"}

          if (parseInt(challengerOneGuessInput.value) < minInteger || parseInt(challengerOneGuessInput.value) > maxInteger) {
            errorMessageGuessOne.classList.remove("error-message-guess-one")
          } else {
            errorMessageGuessOne.classList.add("error-message-guess-one")
          }

          if (parseInt(challengerTwoGuessInput.value) < minInteger || parseInt(challengerTwoGuessInput.value) > maxInteger) {
            errorMessageGuessTwo.classList.remove("error-message-guess-two")
          } else {
            errorMessageGuessTwo.classList.add("error-message-guess-two")
          }

          if (challengerNameOneInput.value == "" || challengerNameTwoInput.value == "" || challengerOneGuessInput.value == "" || challengerTwoGuessInput.value == ""){
            noSubmit.classList.remove("error-message")
          }else{
           noSubmit.classList.add('error-message')
         }

    // if (parseInt(challengerOneGuessInput.value) > maxInteger || parseInt(challengerOneGuessInput.value) < minInteger) {outsideRange1.classList.remove("error-message")
    // }else{
    //   outsideRange1.classList.add(".error-message")
    // }
    //  if (parseInt(challengerTwoGuessInput.value) > maxInteger || parseInt(challengerTwoGuessInput.value) < minInteger) {outsideRange2.classList.remove("error-message")
    // }else{
    //   outsideRange2.classList.add(".error-message")
    // }


  };





  function clearInput(){
    challengerNameOneInput.value = ""
    challengerNameTwoInput.value = ""
    challengerOneGuessInput.value = ""
    challengerTwoGuessInput.value = ""
  }

  function reset(){
    numGuesses = 0;
    challengerNameOneInput.value = ""
    challengerNameTwoInput.value = ""
    challengerOneGuessInput.value = ""
    challengerTwoGuessInput.value = ""
    randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
  }

  function pOneWinCard() {
    numGuesses = 0;
    cardContainer.innerHTML += `
    <article>
    <div class="card">
    <h4>${challengerNameOneInput.value}</h4>
    <p>vs</p>
    <h4>${challengerNameTwoInput.value}</h4>
    </div>

    <hr />

    <div class="middle-row">
    <h2 class="winner"><strong>${challengerNameOneInput.value}</strong></h2> 
    <br />
    <p class='winner2'>WINNER</p>
    </div>

    <hr />

    <div class="card">
    <p><strong>#</strong> ${numGuesses}</p>
    <p><strong>00</strong>MINUTES}</p>
    <button class="exit">X</button>
    </div>
    </article>`
  }


  function pTwoWinCard(){
    numGuesses = 0;
    cardContainer.innerHTML += `
    <article>
    <div class="card">
    <h4>${challengerNameOneInput.value}</h4>
    <p>vs</p>
    <h4>${challengerNameTwoInput.value}</h4>
    </div>

    <hr />

    <div class="middle-row">
    <h2 class="winner"><strong>${challengerNameTwoInput.value}</strong></h2> 
    <br />
    <p class='winner2'>WINNER</p>
    </div>

    <hr />

    <div class="card">
    <p><strong>#</strong> ${numGuesses}</p>
    <p><strong>00</strong>MINUTES}</p>
    <button class="exit">X</button>
    </div>
    </article>`
  }




