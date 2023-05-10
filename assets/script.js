//AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//made changes to js not html, my fault lol
//adding a variable for the timer

var time = document.querySelector(".timer"); //line 17
var score = document.querySelector("#score");
var secondsLeft = 75;
//adding a variable for the buttons
const start = document.querySelector("#start");
//making a variable for the intro startt button so that the challenge begins
const quizIntro = document.querySelector("#challenge-begins");
//calling the end load element variable
var questionsEl = document.querySelector(".all-question");
//identifying the element locations and variables
let questionEl = document.querySelector("#question");
let questionCount = 0;
const correctWrong = document.querySelector("#right-wrong");
//making a final score variable
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");
//making a Highscore variable as well
const highscoresEl = document.querySelector("#highscores"); //line 58 in html
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];
//marking the answer class button
const ansBtn = document.querySelectorAll("button.answerbtn");
// variables for submit, go,clear , view
let submitScrBtn = document.querySelector("#submitscore");
let clearScrBtn = document.querySelector("clearScores");
let viewScrBtn = document.querySelector("view-scores");
let goBackBtn = document.querySelector("#goBack");
//Make the questions
// Instructer said that we have to dio a minimum of 5 questions
const questions = [
  {
    question: "Where do we put JavaScript code in an HTML document?",
    answers: [
      "<js>",
      "<scripting>",
      "<script>",
      "<javascript>",
      "<type.scripter>",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "How do you display 'Hello World' in a pop-up alert box using JavaScript?",
    answers: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
      "box ('Hello world');",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "how do you write an 'if' statement in Javascript to make it to where it codes only if 'i' is equal to 5?",
    answers: [
      "if i == 5 then",
      "if i = 5 then",
      "if (i == 5)",
      "if i = 5",
      "if i <= 5",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you start a 'for' loop in javascript?",
    answers: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5; i+++)",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a Javascript data type?",
    answers: ["if(i<>5)", "if i=!5 then", "if i!=5)", "if i <>5", "if i =5"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a Javascript data type?",
    answers: ["Number", "Boolean", "String", "function", "null"],
    correctAnswer: 4,
  },
];

//function alert(event) {
// event.type contains whether this event was invoked in the result of a click etc
// event.target would contain the reference to the element which invoked this method/event
//}
// above will be used for reference, provided by stackoverflow
// we can apply the if statments inside the functions

//I need to get the timer to start working, going to look in the UNCC coding lessions and see how I can apply the timer on it to this.

//timer function

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = `Time:${secondsLeft}s`;
    if (secondsLeft === 0 || questionCount === questions.length) {
      clearInterval(timerInterval);
      questionsEl.getElementsByClassName.display = "none";
      finalEl.getElementsByClassName.display = "block";
      score.textContent = secondsLeft;
    }
  }, 1000);
}

//displaying what ever time is left
setTimeout(function () {
  package.style.display = "none";
}, 1000);
