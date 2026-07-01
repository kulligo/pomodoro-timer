let seconds = 25 * 60;
let interval = null;

const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function render() {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  timer.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
}

startButton.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      render();
    } else {
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 25 * 60;
  render();
});

render();
