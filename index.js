document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  makingSound(event.key);
  buttonAnimation(event.key);
}

function makingSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "s":
      var crash = new Audio("sounds/kiss-bass.mp3");
      crash.play();
      break;
    case "d":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;
    case "j":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "k":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "l":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    // Checking if the button exists
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
