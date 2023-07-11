// Detecting Keyboard press

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {}

// Sound Function

function makingSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(keyValue);
      break;
  }
}

// Button Animation function

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
