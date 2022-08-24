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
var highScoreEl = document.querySelector(".highscore-form");
var maxTime = 60;

//loads wuiz with elements hidden
function quizLoad() {
  questionItem.classList.add("hidden");
  quizAnswerItem.classList.add("hidden");
  answerStatusItem.classList.add("hidden");
  highScoreEl.classList.add("hidden");
}

//Countdown function
function countDown() {
  var timerCount = setInterval(function () {
    if (maxTime <= 0) {
      clearInterval(timerCount);
      document.getElementById("timer").innerText = "Timer: 00";
    } else {
      document.getElementById("timer").innerText = "Timer: " + maxTime;
    }
    maxTime--;
  }, 1000);
}

//on start button this function is called to hide main page elements
var startQuiz = function () {
  questionItem.classList.remove("hidden");
  quizAnswerItem.classList.remove("hidden");
  startMenu.classList.add("hidden");
  countDown();
};

quizLoad();

// Questions will be asked
const Questions = [
  {
    id: 0,
    question: "How do you end a statement in JavaScript?",
    options: ["}", ">", ")", ";"],
    answer: ";",
  },
  {
    id: 1,
    question: "Arrays can store __ in JavaScript",
    options: ["Numbers", "Strings", "Booleans", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 2,
    question: "Where do you place the script tag in a HTML document",
    options: ["<Head>", "<Footer>", "<Aside>", "<Body>"],
    answer: "<Body>",
  },
  {
    id: 3,
    question: "What is text reffered to as in JavaScript?",
    options: ["Number", "String", "Variable", "Object"],
    answer: "String",
  },
  {
    id: 4,
    question: "Proper way of declaring a variable in JavaScript is _",
    options: ["var exam = 12;", "exam = 12;", "exam() = 12;", "var exam = 12"],
    answer: "var exam = 12;",
  },
  {
    id: 5,
    question: "Conditionals in a IF/ELSE statement are enclosed within _",
    options: ["' '", "{ }", "( )", "< >"],
    answer: "( )",
  },
  {
    id: 6,
    question: "A functions code in enclosed within __",
    options: ["{ }", "( )", "< >", "[ ]"],
    answer: "{ }",
  },
  {
    id: 7,
    question: "What year was JavaScript created?",
    options: ["2000", "1995", "2005", "1990"],
    answer: "1995",
  },
  {
    id: 8,
    question: "Who created JavaScript?",
    options: ["Elon Musk", "Steve Jobs", "Bill Gates", "Brendan Eich"],
    answer: "Brendan Eich",
  },
  {
    id: 9,
    question: "How do you connect an external javascript to the HTML document",
    options: ["<script>", "<link>", "<head>", "<meta>"],
    answer: "<script>",
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  if (id == 10 || maxTime <= 0) {
    questionItem.classList.add("hidden");
    quizAnswerItem.classList.add("hidden");
    answerStatusItem.classList.add("hidden");
    var score = maxTime;
    quizLoad();
    highScoreEl.classList.remove("hidden");

    document.querySelector(".score-end").innerHTML = "Your score was " + score;
  }

  // Getting the question
  const question = document.getElementById("quiz-question");

  // Setting the question text
  question.innerText = Questions[id].question;

  // Getting the options
  const op1 = document.getElementById("choiceOne");
  const op2 = document.getElementById("choiceTwo");
  const op3 = document.getElementById("choiceThree");
  const op4 = document.getElementById("choiceFour");

  // Providing option text
  op1.innerText = Questions[id].options[0];
  op2.innerText = Questions[id].options[1];
  op3.innerText = Questions[id].options[2];
  op4.innerText = Questions[id].options[3];

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    if (op1.innerText === Questions[id].answer) {
      console.log("Thats Right");
      id++;
      iterate(id);
    } else {
      console.log("Thats Wrong");
      id++;
      iterate(id);
      maxTime -= 10;
    }
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    if (op2.innerText === Questions[id].answer) {
      console.log("Thats Right");
      id++;
      iterate(id);
    } else {
      console.log("Thats Wrong");
      id++;
      iterate(id);
      maxTime -= 10;
    }
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    if (op3.innerText === Questions[id].answer) {
      console.log("Thats Right");
      id++;
      iterate(id);
    } else {
      console.log("Thats Wrong");
      id++;
      iterate(id);
      maxTime -= 10;
    }
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    if (op4.innerText === Questions[id].answer) {
      console.log("Thats Right");
      id++;
      iterate(id);
    } else {
      console.log("Thats Wrong");
      id++;
      iterate(id);
      maxTime -= 10;
    }
  });
}

function saveInput() {
  var inputValue = document.getElementById("userInput").innerHTML;
  localStorage.setItem("text", inputValue);
}

function getInput() {
  var storedValue = localStorage.getItem("text");
  if (storedValue) {
    document.querySelectorAll(".userScore").innerHTML = storedValue;
  }
}

getInput();
if (start) {
  iterate("0");
}
