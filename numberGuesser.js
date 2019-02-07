var min = document.querySelector('.min');
var max = document.querySelector('.max');
var minInput = document.querySelector('.min-input');
var maxInput = document.querySelector('.max-input');
var challengerNameOneInput = document.querySelector('.challenger-1-name-input');
var challengerNameTwoInput = document.querySelector('.challenger-2-name-input');
var challengerOneGuessInput = document.querySelector('#challenger-1-guess-input');
var challengerTwoGuessInput = document.querySelector('#challenger-2-guess-input');
var cardContainer = document.querySelector('.column-2');
var guessBox = document.querySelector('.guess-box');
var updateButton = document.querySelector('.update');
var submitButton = document.querySelector('.submit-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var numGuesses = 0;
var randomNumber;
var totalSeconds = 0;
var minutesElapsed = document.getElementById('minutes');


updateButton.addEventListener('click', updateRange, disableReset);
submitButton.addEventListener('click', submitInfo);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);
guessBox.addEventListener('keyup', disableClear, disableReset);
cardContainer.addEventListener('click', deleteCard);
challengerNameOneInput.addEventListener('keydown', nonAlphaNumericInput);
challengerNameTwoInput.addEventListener('keydown', nonAlphaNumericInput);

disableClear()
disableReset()

function disableReset() {
  if (randomNumber !== undefined) {
    resetButton.disabled = false;
    resetButton.classList.add('reset-enabled');
  } else {
    resetButton.disabled = true;
    resetButton.classList.remove('reset-enabled');
    generateRandomNumber()
  }
}

function disableClear() {
  if (challengerNameOneInput.value === '' && challengerNameTwoInput.value === '' && challengerOneGuessInput.value === '' && challengerTwoGuessInput.value === '') {
    clearButton.disabled = true;
    clearButton.classList.remove('clear-enabled');
  } else {
    clearButton.disabled = false;
    clearButton.classList.add('clear-enabled');
  }
}

function updateRange() {  
  generateRandomNumber ()
  inputErrorMessages ()
  disableReset()
  rangeErrorBorder()
}

function submitInfo() {
  numGuesses++;
  latestScoreText()
  playerFeedback()
  submitErrorMessages()
  setInterval(startTimer, 1000)
}

function startTimer() {
  totalSeconds++;
}

function nonAlphaNumericInput(event) {
  var regEx = /\W/;
  if (regEx.test(event.key)) {
    event.preventDefault();
  }
}

function generateRandomNumber () {
  min.innerText = minInput.value || '1';
  max.innerText = maxInput.value || '100';
  var minInteger = Math.ceil(parseInt(minInput.value,10));
  var maxInteger = Math.floor(parseInt(maxInput.value,10));
  randomNumber = Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
}

function inputErrorMessages () {
  var minMoreMax = document.querySelector('#min-more-max');
  var noRange = document.querySelector('#no-range');
  if (minInput.value === '' || maxInput.value === '') {
    noRange.classList.remove('error-message');
  } else {
    noRange.classList.add('error-message');
  }
  if (parseInt(maxInput.value) < parseInt(minInput.value)) {
    minMoreMax.classList.remove('error-message');
  } else {
    minMoreMax.classList.add('error-message');
  }
}

function latestScoreText() {
  if (challengerOneGuessInput.value > maxInput.value || challengerOneGuessInput.value < minInput.value || challengerTwoGuessInput.value > maxInput.value || challengerTwoGuessInput.value < minInput.value) {
    return;
  } else {
    var challengerNameOne = document.querySelector('.challenger-1-name');
    var challengerNameTwo = document.querySelector('.challenger-2-name');
    var challengerOneGuess = document.querySelector('.challenger-1-guess');
    var challengerTwoGuess = document.querySelector('.challenger-2-guess');
    challengerNameOne.innerText = challengerNameOneInput.value;
    challengerNameTwo.innerText = challengerNameTwoInput.value;
    challengerOneGuess.innerText = challengerOneGuessInput.value;
    challengerTwoGuess.innerText = challengerTwoGuessInput.value;
  }
}

function playerFeedback() {
  var challengerOneConditional = document.querySelector('.challenger-1-conditional');
  var challengerTwoConditional = document.querySelector('.challenger-2-conditional');
  if (parseInt(challengerOneGuessInput.value) > randomNumber) {
    challengerOneConditional.innerText = 'That\'s Too High';
  } else if (parseInt(challengerOneGuessInput.value) == randomNumber) {
    challengerOneConditional.innerText = 'BOOM!';
    changeRangeOnWin()
    pOneWinCard()
  } else {
    challengerOneConditional.innerText = 'That\'s Too Low';
  }
  if (parseInt(challengerTwoGuessInput.value) > randomNumber) {
    challengerTwoConditional.innerText = 'That\'s Too High';
  } else if (parseInt(challengerTwoGuessInput.value) == randomNumber) {
    challengerTwoConditional.innerText = 'BOOM!';
    changeRangeOnWin()
    pTwoWinCard()
  } else {
    challengerTwoConditional.innerText = 'That\'s Too Low';
  }
}

function submitErrorMessages() {
  var errorMessageGuessOne = document.querySelector('.error-message-guess-one');
  var errorMessageGuessTwo = document.querySelector('.error-message-guess-two');
  var noSubmit = document.querySelectorAll('.no-submit');
  var guessBoxErrorBorders = document.querySelectorAll('.guess-box-borders');
  if (parseInt(challengerOneGuessInput.value) < parseInt(minInput.value) || parseInt(challengerOneGuessInput.value) > parseInt(maxInput.value)) {
    errorMessageGuessOne.classList.remove('error-message-guess-one');
  } else {
    errorMessageGuessOne.classList.add('error-message-guess-one');
  }
  if (parseInt(challengerTwoGuessInput.value) < parseInt(minInput.value) || parseInt(challengerTwoGuessInput.value) > parseInt(maxInput.value)) {
    errorMessageGuessTwo.classList.remove('error-message-guess-two');
  } else {
    errorMessageGuessTwo.classList.add('error-message-guess-two');
  }
  for (var i = 0; i < noSubmit.length; i++) {
    if (noSubmit[i].value === '') {
      noSubmit[i].parentElement.nextElementSibling.classList.remove('error-message');
      noSubmit[i].classList.add('guess-box-borders');
    } else {
      noSubmit[i].parentElement.nextElementSibling.classList.add('error-message');
      noSubmit[i].classList.remove('guess-box-borders');
    }
  }
}

function rangeErrorBorder() {
  var inputRangeErrorBorder = document.querySelectorAll('.place-holder');
  for (var i = 0; i < inputRangeErrorBorder.length; i++) {
    if (inputRangeErrorBorder[i].value === '') {
      inputRangeErrorBorder[i].classList.add('range-error-border');
    } else {
      inputRangeErrorBorder[i].classList.remove('range-error-border');
    }
  }
}

function clearInput() {
  challengerNameOneInput.value = '';
  challengerNameTwoInput.value = '';
  challengerOneGuessInput.value = '';
  challengerTwoGuessInput.value = '';
  disableClear()
}

function resetGame() {
  numGuesses = 0;
  challengerNameOneInput.value = '';
  challengerNameTwoInput.value = '';
  challengerOneGuessInput.value = '';
  challengerTwoGuessInput.value = '';
  generateRandomNumber()
}

function changeRangeOnWin() {
  var newMin;
  if (min.innerText <= 10) {
    newMin = 1;
  } else {
    var newMin = parseInt(min.innerText) - 10;
  }
  var newMax = parseInt(max.innerText) + 10;
  min.innerText = newMin;
  max.innerText = newMax;
  randomNumber = Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}
 

function pOneWinCard() {
  var totalMinutes = totalSeconds/60;
  cardContainer.innerHTML += `
  <article>
    <div class='card'>
      <h4>${challengerNameOneInput.value.toUpperCase()}</h4>
      <p>vs</p>
      <h4>${challengerNameTwoInput.value.toUpperCase()}</h4>
    </div>
    <hr />
    <div class='middle-row'>
      <h2 class='winner'><strong>${challengerNameOneInput.value.toUpperCase()}</strong></h2> 
      <br />
      <p class='winner2'>WINNER</p>
    </div>
    <hr />
    <div class='card'>
      <p><strong class='minutes'>#</strong> ${numGuesses}</p>
      <p id='minutes'><strong class='minutes'> ${totalMinutes}</strong>MINUTES</p>
      <button class='exit'>X</button>
    </div>
  </article>`
  numGuesses = 0;
  totalSeconds = 0;
}

function pTwoWinCard() {
  var totalMinutes = totalSeconds/60;
  cardContainer.innerHTML += `
  <article>
    <div class='card'>
      <h4>${challengerNameOneInput.value.toUpperCase()}</h4>
      <p>vs</p>
      <h4>${challengerNameTwoInput.value.toUpperCase()}</h4>
    </div>
    <hr />
    <div class='middle-row'>
      <h2 class='winner'><strong>${challengerNameTwoInput.value.toUpperCase()}</strong></h2> 
      <br />
      <p class='winner2'>WINNER</p>
    </div>
    <hr />
    <div class='card'>
      <p><strong>#</strong> ${numGuesses}</p>
      <p id='minutes'><strong class='minutes'>${totalMinutes}</strong>MINUTES</p>
      <button class='exit'>X</button>
    </div>
  </article>`
  numGuesses = 0;
  totalSeconds = 0;
}

function deleteCard(e) {
  if (e.target.className === 'exit') {
    e.target.parentElement.parentElement.remove()
  }
}