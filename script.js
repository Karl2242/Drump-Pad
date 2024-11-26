const mesPad = document.querySelectorAll("div.pad > div");
const audio = document.querySelectorAll("audio");
let count = 0;
var register = [];
let recording = false;
let playing = false;
document.addEventListener("keyup", handlePressKeyPlaySound);
document.addEventListener(`keydown`, handlePressKeyPlayAnimation);
document.addEventListener(`keyup`, handlePressKeyPlayAnimationUp);

function handlePressKeyPlaySound(event) {
  let chekCode = event.keyCode;

  audio.forEach((mesaudio) => {
    if (mesaudio.dataset.key == chekCode) {
      mesaudio.play();
    }
  });


  console.log(register);
  
  
  if (recording === true) {

    if(chekCode != 82){
      register.push(chekCode);

  }}
}

function handlePressKeyPlayAnimation(event) {
  let chekCode = event.keyCode;

  mesPad.forEach((pad) => {
    if (pad.dataset.key == chekCode) {
      pad.classList.add("playing");
    }
  });
}

function handlePressKeyPlayAnimationUp(event) {
  let chekCode = event.keyCode;
console.log(count);


  if (chekCode == 82 && count == 0) {
    register = []
    recording = true;
    count++;
  } else if (chekCode == 82 && count == 1) {
    recording = false;
    count--;
  }

  if (recording == true) {
    monRecord(event);
  } else {
    monRecordAnulle(event);
  }


  mesPad.forEach((pad) => {
    if (pad.dataset.key == chekCode) {
      pad.classList.remove("playing");
    }
  });
}

//Animaiton Pour record
function monRecord(event) {
  mesPad.forEach((pad) => {
    if (pad.dataset.key == 82 && event.keyCode == 82) {
      pad.classList.add("playing-record");
    }
  });
}

//Animation annuler animation
function monRecordAnulle(event) {
  mesPad.forEach((pad) => {
    if (pad.dataset.key == 82 && event.keyCode == 82) {
      pad.classList.remove("playing-record");
    }
  });
}
