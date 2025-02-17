const mesPad = document.querySelectorAll("div.pad > div");
const audio = document.querySelectorAll("audio");
let count = 0;
var register = [];
let recording = false;
let playing = false;
document.addEventListener("keyup", handlePressKeyPlaySound);
document.addEventListener(`keydown`, handlePressKeyPlayAnimation);
document.addEventListener(`keyup`, handlePressKeyPlayAnimationUp);
 let time

function handlePressKeyPlaySound(event) {
  let chekCode = event.keyCode;

  audio.forEach((mesaudio) => {
    if (mesaudio.dataset.key == chekCode) {
      mesaudio.play();
    }
  });



  
  if (recording === true) {

    if(chekCode != 82 && chekCode !== 80){    
      register.push({"key":chekCode, "time": (Date.now() - time) / 1000});

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



  if (chekCode == 82 && count == 0) {
    register = []
    time = Date.now()
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

  if(chekCode == 80 && count == 0){
    recording = true;
    count++;

  }else if(chekCode == 80 && count == 1){
    playSong(register, event)
    recording = false;
    count--;
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
    if (pad.dataset.key == 82 && event.keyCode == 82 || pad.dataset.key == 80 && event.keyCode == 80) {
      pad.classList.add("playing-record");
    }
  });
}

//Animation annuler animation
function monRecordAnulle(event) {
  mesPad.forEach((pad) => {
    if (pad.dataset.key == 82 && event.keyCode == 82 || pad.dataset.key == 80 && event.keyCode) {
      pad.classList.remove("playing-record");
      console.log("bieng")
    }
  });
}


function playSong(register, event) {
    return new Promise(
        (resolve, reject) => {
            if(resolve){
                register.forEach((element) => {
                    console.log(element);
                    
                    setTimeout(() => {
                      let mesVariable = new KeyboardEvent("keyup", {keyCode: element.key})
                    document.dispatchEvent(mesVariable)
                    console.log('jai bien dispatch');  
                    }, element.time * 1000);


                })
            }
        }
    ); 
};

let mesVariable = new KeyboardEvent("keydown")