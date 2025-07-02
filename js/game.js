
/*-------------- Constants -------------*/
const questions = [
  {
    question: "1.What is the name of the main character in The Legend of Zelda series?",
    options: ["Zelda", "Link", "Ganondorf", "Epona"],
    correct: "Link"
  },
  {
    question: "2.Which company created the PlayStation console?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correct: "Sony"
  },
  {
    question: "3.Which game popularized the battle royale genre?",
    options: ["Minecraft", "Overwatch", "Fortnite", "Tetris"],
    correct: "Fortnite"
  },
  {
    question: "4.In which game do you catch creatures in Poké Balls?",
    options: ["Yu-Gi-Oh!", "Digimon", "Pokémon", "Animal Crossing"],
    correct: "Pokémon"
  }
];


/*---------- Variables (state) ---------*/
let currentQuestionIndex = 0;
let hasAnswered = false;

/*----- Cached Element References  -----*/
const questionH1 = document.querySelector("header h1");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const correctP = document.querySelector(".correct");
const nextBtn = document.querySelector("#next");

/*-------------- Functions -------------*/

function renderQuestion() {
  const current = questions[currentQuestionIndex];
  questionH1.textContent = current.question;
  answer1.textContent = current.options[0];
  answer2.textContent = current.options[1];
  answer3.textContent = current.options[2];
  answer4.textContent = current.options[3];
  correctP.textContent = ""; // clear feedback
}

function checkValue(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correct;

  hasAnswered = true;

  if (selectedAnswer === correctAnswer) {
    correctP.textContent = "Correct Answer!";
  } else {
    correctP.textContent = "Wrong Answer!";
    currentQuestionIndex =0;
    renderQuestion();
    hasAnswered = false;
  }
}

function handleNext() {
  if (!hasAnswered) {
    correctP.textContent = "Please select an answer before continuing.";
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }

  renderQuestion();
  hasAnswered = false;
}


/*----------- Event Listeners ----------*/
answer1.addEventListener('click', checkValue);
answer2.addEventListener('click', checkValue);
answer3.addEventListener('click', checkValue);
answer4.addEventListener('click', checkValue);
nextBtn.addEventListener('click', handleNext);

/*---------- Initial Render ------------*/
renderQuestion();
