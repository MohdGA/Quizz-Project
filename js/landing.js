/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const settingBtn = document.querySelector('#settingBtn');
const settingDiv = document.querySelector("#settingDiv");
const audio = new Audio("/music/music.mp3");



/*-------------- Functions -------------*/

function handleMusic(event){
  if(event.target.id){
    audio.play();
  }
}

/*----------- Event Listeners ----------*/
settingDiv.addEventListener('click', handleMusic)

