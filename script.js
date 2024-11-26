const mesPad = document.querySelectorAll("div.pad > div");
const audio = document.querySelectorAll("audio");
let count = 0;
let array = []
document.addEventListener("keyup", handlePressKeyPlaySound);

function handlePressKeyPlaySound(event) {
  let chekCode = event.keyCode;

  if (chekCode == 82) {

  }

audio.forEach((mesaudio) => {
if(mesaudio.dataset.key == chekCode){
    mesaudio.play()
}

})
document.addEventListener(`keyup`, handlePressKeyPlayAnimation)


function handlePressKeyPlayAnimation(event) {
  let chekCode = event.keyCode;

  mesPad.forEach((pad) => {
    if (pad.dataset.key == chekCode) {
      pad.classList.add("playing");
      pad.classList.add("sound");
      setTimeout(() => {
        pad.classList.remove("playing");
      }, 100);
      setTimeout(() => {
        pad.classList.remove("sound");
      }, 100);
    }
  });
}
}
