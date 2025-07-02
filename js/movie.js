/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/

/*----- Cached Element References  -----*/
const answers = document.querySelector('.answers');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");

/*-------------- Functions -------------*/

function checkValue(event){
 
  console.log(event.target)
  
};

/*----------- Event Listeners ----------*/
answer1.addEventListener('click', checkValue)
answer2.addEventListener('click', checkValue)
answer3.addEventListener('click', checkValue)
answer4.addEventListener('click', checkValue)