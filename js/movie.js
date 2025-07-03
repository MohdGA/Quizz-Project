/*-------------- Constants -------------*/
const questions = [
  {
    question: "1.Which movie is Prince Charming from?",
    options: ["Shrek 2", "Frozen", "Cinderella", "Aladdin"],
    correct: "Shrek 2"
  },{
    
    question: "2.Which movie features a talking donkey?",
    options: ["Mulan", "Shrek", "Tangled", "Brave"],
    correct: "Shrek"
  },
  {
    question: "3.Where does Elsa live?",
    options: ["Arendelle", "Narnia", "Hogwarts", "Neverland"],
    correct: "Arendelle"
  },
  {
    question: "4.Who is the villain in The Lion King?",
    options: ["Scar", "Zazu", "Simba", "Rafiki"],
    correct: "Scar"
  },
  {
    question: "5.In which animated movie is the song 'Let It Go' featured?",
    options: ["Frozen", "Tangled", "Moana", "Brave"],
    correct: "Frozen"
  }
  
];

/*---------- Variables (state) ---------*/
let currentQuestionIndex = 0;
let score = 0;

/*----- Cached Element References  -----*/
const questionH1 = document.querySelector("header h1");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const scoreP = document.querySelector(".score");
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
    score += 1;
  } else {
    score -= 1;
  }
  updateScore();
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
    score = 0;
  }
  updateScore();
  render();
}

function updateScore(){
  scoreP.textContent = `Score is: ${score}`;
}

/*----------- Event Listeners ----------*/
answer1.addEventListener('click', checkValue);
answer2.addEventListener('click', checkValue);
answer3.addEventListener('click', checkValue);
answer4.addEventListener('click', checkValue);
nextBtn.addEventListener('click', handleNext);

/*---------- Initial Render ------------*/
render();

