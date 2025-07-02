
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
  },
   {
    question: "5.What is the name of the block-building game released in 2009?",
    options: ["Roblox", "Terraria", "Minecraft", "Lego World"],
    correct: "Minecraft"
  }
];


let currentQuestionIndex = 0;
let score = 0;

/*----- Cached Element References  -----*/
const questionH1 = document.querySelector("header h1");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const correctP = document.querySelector(".correct");
const nextBtn = document.querySelector("#next");

/*-------------- Functions -------------*/

function render() {
  const current = questions[currentQuestionIndex];
  questionH1.textContent = current.question;
  answer1.textContent = current.options[0];
  answer2.textContent = current.options[1];
  answer3.textContent = current.options[2];
  answer4.textContent = current.options[3];
  correctP.textContent = "";
}

function checkValue(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    correctP.textContent = "Correct Answer!";
    score += 1;
  }else {
    correctP.textContent = "Wrong Answer!";
  }
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }
  render();
}

/*----------- Event Listeners ----------*/
answer1.addEventListener('click', checkValue);
answer2.addEventListener('click', checkValue);
answer3.addEventListener('click', checkValue);
answer4.addEventListener('click', checkValue);
nextBtn.addEventListener('click', handleNext);

/*---------- Initial Render ------------*/
render();


