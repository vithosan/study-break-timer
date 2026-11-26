const clock = document.querySelector("#clock");
const status = document.querySelector("#status");
const toggle = document.querySelector("#toggle");
let remaining = 25 * 60;
let timer = null;
function render() { clock.textContent = `${String(Math.floor(remaining / 60)).padStart(2,"0")}:${String(remaining % 60).padStart(2,"0")}`; }
toggle.addEventListener("click", () => {
  if (timer) { clearInterval(timer); timer = null; toggle.textContent = "Συνέχεια"; status.textContent = "Το χρονόμετρο είναι σε παύση."; return; }
  toggle.textContent = "Παύση"; status.textContent = "Καλή συγκέντρωση!";
  timer = setInterval(() => { remaining--; render(); if (remaining <= 0) { clearInterval(timer); timer = null; toggle.textContent = "Έναρξη"; status.textContent = "Ώρα για ένα μικρό διάλειμμα!"; } }, 1000);
});
document.querySelector("#reset").addEventListener("click", () => { clearInterval(timer); timer = null; remaining = 25 * 60; render(); toggle.textContent = "Έναρξη"; status.textContent = "Έτοιμο για μελέτη."; });
