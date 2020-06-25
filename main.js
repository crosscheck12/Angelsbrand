var music = new Audio("sound/BIGCHUNGUS.mp3");

function musicClick() {
    music.play();
    music.onended = function () {
      window.location.href = "music.html";