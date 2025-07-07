/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let isPlaying = true;

/*----- Cached Element References  -----*/
const settingBtn = document.querySelector('#settingBtn');
const settingDiv = document.querySelector("#settingDiv");
const audio = new Audio("music.mp3");



/*-------------- Functions -------------*/

function handleMusic(){
  if(isPlaying){
    audio.play();
    isPlaying = false;
  }else{
    audio.pause();
    isPlaying = true;
  }
  
};

/*----------- Event Listeners ----------*/
settingBtn.addEventListener('click', handleMusic)

