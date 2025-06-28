const playBtn = document.querySelector("#play-btn");
const player = document.querySelector("#player");

let isPlaying = false;
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    player.play();
    playBtn.textContent = "⏸️ Pause";
    playBtn.ariaLabel = "Pause";
    isPlaying = true;
  } else {
    player.pause();
    playBtn.textContent = "▶️ Play";
    playBtn.ariaLabel = "Play";
    isPlaying = false;
  }
});
