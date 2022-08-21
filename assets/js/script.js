//When the start button is clicked then a timer starts and the first question appears
//When a answer is selected then another question appers
//When a question is answered incorrectly then time is subtracted from the clock
//When all questions are answered or the time is equal to 0 then the quiz is over
//When the game is over then I can enter my initials and score

var questionItem = document.querySelector(".questions");
var quizAnswerItem = document.querySelector(".quiz-answers");
var answerStatusItem = document.querySelector(".answer-status");
var startButton = document.getElementById("start-button");
var startMenu = document.querySelector(".start-menu");
var maxTime = 60;

var quizLoad = function () {
  questionItem.classList.add("hidden");
  quizAnswerItem.classList.add("hidden");
  answerStatusItem.classList.add("hidden");
};

var startQuiz = function () {
  questionItem.classList.remove("hidden");
  quizAnswerItem.classList.remove("hidden");
  startMenu.classList.add("hidden");
  var startTimer = setInterval(countDown, 1000);
};

function questionList() {}

function countDown() {
  maxTime--;
  document.getElementById("timer").innerHTML = "Timer: " + maxTime;
  if (maxTime === 0) {
    //switch screens and display score with user input
    clearInterval(startTimer);
  }
}

quizLoad();
