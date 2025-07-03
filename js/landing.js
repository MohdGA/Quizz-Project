/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let isPlaying = false;

/*----- Cached Element References  -----*/
const settingBtn = document.querySelector('#settingBtn');
const settingDiv = document.querySelector("#settingDiv");
const audio = new Audio("/music/music.mp3");



/*-------------- Functions -------------*/

function handleMusic(){
  if(isPlaying){
    audio.pause();
    isPlaying = false;
  }else{
    audio.play();
    isPlaying = true;
  }
  
};

/*----------- Event Listeners ----------*/
settingDiv.addEventListener('click', handleMusic)

