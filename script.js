/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var clueHoldTime;
var mistakes = 0;
var buttonPlaying;
var timer;
var startClock;
var playClue;
var enable;

function makePattern() {
  for (let i = 0; i < 8; i++) {
    var value = Math.floor(Math.random() * 6 + 1);
    pattern[i] = value;
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  clueHoldTime = 3000;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  makePattern();
  playClueSequence();
}

function stopGame() {
  // stop game
  gamePlaying = false;

  // show Start button and hide Stop button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  if (tonePlaying) {
    var animal = btnToAnimal(buttonPlaying);
    stopSound(animal);
    clearButton(buttonPlaying);
  }

  clearClock();
  stopClock();
  resetButtons();
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function startSound(animal) {
  if (!tonePlaying) {
    var audio = document.getElementById(animal);
    audio.play();
    tonePlaying = true;
  }
}

function stopSound(animal) {
  var audio = document.getElementById(animal);
  audio.pause();
  audio.currentTime = 0;
  tonePlaying = false;
}

function btnToAnimal(btn) {
  switch (btn) {
    case 1:
      return "moo";
    case 2:
      return "cry";
    case 3:
      return "woof";
    case 4:
      return "meow";
    case 5:
      return "squeak";
    case 6:
      return "growl";
  }
}

function playSound(btn, len) {
  var animal = btnToAnimal(btn);
  startSound(animal);
  tonePlaying = true;
  setTimeout(stopSound, len, animal);
}

function playSingleClue(btn) {
  if (gamePlaying) {
    buttonPlaying = btn;
    lightButton(btn);
    playSound(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function clock() {
  var clock = document.getElementById("clock");
  var seconds = 10;
  timer = setInterval(function() {
    clock.innerHTML = seconds + " seconds left";
    seconds--;

    if (seconds <= -1) {
      clearInterval(timer);
      clock.innerHTML = "Time's up!";
      setTimeout(function() {
        clock.innerHTML = "";
      }, 1000);
      setTimeout(loseGame, 1000);
      return;
    }
  }, 1000);
}

function clearClock() {
  if (timer != null) {
    clearInterval(timer);
    timer = null;
    document.getElementById("clock").innerHTML = "";
  }
}

function stopClock() {
  if (startClock != null) {
    clearTimeout(startClock);
    startClock = null;
  }
}

function disableButtons() {
  document.getElementById("button1").setAttribute("disabled", "disabled");
  document.getElementById("button2").setAttribute("disabled", "disabled");
  document.getElementById("button3").setAttribute("disabled", "disabled");
  document.getElementById("button4").setAttribute("disabled", "disabled");
  document.getElementById("button5").setAttribute("disabled", "disabled");
  document.getElementById("button6").setAttribute("disabled", "disabled");
}

function enableButtons() {
  document.getElementById("button1").removeAttribute("disabled");
  document.getElementById("button2").removeAttribute("disabled");
  document.getElementById("button3").removeAttribute("disabled");
  document.getElementById("button4").removeAttribute("disabled");
  document.getElementById("button5").removeAttribute("disabled");
  document.getElementById("button6").removeAttribute("disabled");
  
}

function resetButtons() {
  if (enable != null) {
    clearTimeout(enable);
    disableButtons();
    enable = null;
  }
}

function playClueSequence() {
  stopClock();
  disableButtons();

  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    playClue = setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    if (i == progress) {
      enable = setTimeout(enableButtons, delay + clueHoldTime);
      startClock = setTimeout(clock, delay + clueHoldTime - 1000);
    }
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= (clueHoldTime - 200) / pattern.length;
  }
  
  
}

function stopClue() {
  if (playClue != null) {
    clearTimeout(playClue);
    playClue = null;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // guess is wrong
  if (btn != pattern[guessCounter]) {
    mistakes++;
    
    if (mistakes == 3) {
      loseGame();
    } else {
      var triesLeft = 3 - mistakes;
      if (triesLeft == 1) {
        alert("Try again! You have 1 more try.");
      } else {
        alert("Try again! You have " + triesLeft + " more tries.");
      }
      guessCounter = 0;
    }
  }

  // guess is correct
  else {
    // turn is over
    if (guessCounter == progress) {
      clearClock();

      // last turn
      if (progress == pattern.length - 1) {
        winGame();
      }

      // not last turn
      else {
        alert("Correct!");
        progress++;
        playClueSequence();
      }
    }

    // turn not over
    else {
      guessCounter++;
    }
  }
}
