/*-------------- Constants -------------*/
const questions = [
  {
    question: "1.Which movie is Prince Charming from?",
    options: ["Shrek 2", "Frozen", "Cinderella", "Aladdin"],
    correct: "Shrek 2"
  },
  {
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

function render(){
  const currentQ = questions[currentQuestionIndex];
  questionH1.textContent = currentQ.question;
  answer1.textContent = currentQ.options[0];
  answer2.textContent = currentQ.options[1];
  answer3.textContent = currentQ.options[2];
  answer4.textContent = currentQ.options[3];
  
};

function checkValue(event){
  const userSelection = event.target.textContent;
  const correctSelection = questions[currentQuestionIndex].correct;

  console.log(userSelection)

  if(userSelection === correctSelection){
    correctP.textContent = "Correct Answer!";
    currentQuestionIndex++;
    // handleNext();
  }else{
    correctP.textContent = "Wrong Answer!";
    render();
  }
}



/*----------- Event Listeners ----------*/
answer1.addEventListener('click', checkValue);
answer2.addEventListener('click', checkValue);
answer3.addEventListener('click', checkValue);
answer4.addEventListener('click', checkValue);
// nextBtn.addEventListener('click', handleNext);

/*---------- Initial Render ------------*/
render();
