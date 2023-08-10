var quizdata = [
  {
    question: "What is the most popular coding language?",
    a: "Javascript",
    b: "Python",
    c: "HTML",
    d: "CSS",
    correct: "b",
  },
  {
    question: "When was Javascript launched?",
    a: "1984",
    b: "1996",
    c: "1995",
    d: "1994",
    correct: "c",
  },
  {
    question: "Who is the father of computers?",
    a: "Charles Babbage",
    b: "Elon Musk",
    c: "Van Rossun",
    d: "Larry Page",
    correct: "a",
  },
];

const Quiz = document.getElementById("Quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("Question");
const answer_a = document.getElementById("a_text");
const answer_b = document.getElementById("b_text");
const answer_c = document.getElementById("c_text");
const answer_d = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
var currentQuiz = 0;
var score = 0;
function loadQuiz() {
  const currentQuizData = quizdata[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  answer_a.innerText = currentQuizData.a;
  answer_b.innerText = currentQuizData.b;
  answer_c.innerText = currentQuizData.c;
  answer_d.innerText = currentQuizData.d;
}

loadQuiz();

function getSelectedAnswer() {
  var myAnswer;
  answerElement.forEach((i) => {
    if (i.checked === true) {
      myAnswer = i.id;
    }
  });
  return myAnswer;
}

function deleteAnswer() {
  answerElement.forEach((i) => {
    i.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  var myAnswer = getSelectedAnswer();
  console.log(myAnswer);
  if (myAnswer) {
    if (myAnswer === quizdata[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizdata.length) {
      loadQuiz();
    } else {
      Quiz.innerHTML = `<h2>You answered ${score}/${quizdata.length} questions correctly</h2>
    <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
