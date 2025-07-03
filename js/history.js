/*-------------- Constants -------------*/
const questions = [
  {
    question: "1.What year did World War II end?",
    options: ["1945", "1939", "1918", "1955"],
    correct: "1945"
  },
  {
    question: "2.Which ancient civilization built the pyramids?",
    options: ["Romans", "Greeks", "Egyptians", "Mayans"],
    correct: "Egyptians"
  },
  {
    question: "3.Who discovered America in 1492?",
    options: ["Christopher Columbus", "Leif Erikson", "Marco Polo", "Ferdinand Magellan"],
    correct: "Christopher Columbus"
  },
  {
    question: "4.What wall fell in 1989, symbolizing the end of the Cold War?",
    options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Iron Curtain"],
    correct: "Berlin Wall"
  },
  {
    question: "5.Who was known as the 'Iron Lady'?",
    options: ["Margaret Thatcher", "Angela Merkel", "Hillary Clinton", "Indira Gandhi"],
    correct: "Margaret Thatcher"
  }
];

/*---------- Variables (state) ---------*/
 let currentQuestionIndex = 0;
 let score = 0;
 let hasAnswerd = false;

/*----- Cached Element References  -----*/
const questionH1 = document.querySelector("header h1");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const scoreP = document.querySelector(".score");
const nextBtn = document.querySelector("#next");

/*-------------- Functions -------------*/
function render(){
  const current = questions[currentQuestionIndex];
  questionH1.textContent = current.question;
  answer1.textContent = current.options[0];
  answer2.textContent = current.options[1];
  answer3.textContent = current.options[2];
  answer4.textContent = current.options[3];
  hasAnswerd = false;

};

function checkValue(event){
  if(hasAnswerd) return;
  
  let selectedAnswer = event.target.textContent;
  let correctAnswer = questions[currentQuestionIndex].correct;

  if(selectedAnswer === correctAnswer){
    score +=1;
  };

  hasAnswerd = true;
  updateScore();
 
};

function handleNext(){
  currentQuestionIndex++;
  if(currentQuestionIndex >= questions.length){
    currentQuestionIndex = 0;
    score = 0;
  }
  updateScore();
  render();
};

console.log(currentQuestionIndex)

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

