function updateClock() {
  const now = new Date();

  // Get time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format time
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").innerText = timeString;

  // Add date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);

  // Animate the time element
  const clock = document.getElementById("clock");
  clock.style.transform = "scale(1.1)";
  setTimeout(() => clock.style.transform = "scale(1)", 200);
}

setInterval(updateClock, 1000);
updateClock();

// 🌗 Toggle dark/light mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
