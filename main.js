function updateTimer() {
  const now = new Date();
  const futureDate = new Date("2023-12-31T23:59:59");
  const difference = futureDate - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("days-value").innerText = formatTime(days);
  document.getElementById("hours-value").innerText = formatTime(hours);
  document.getElementById("minutes-value").innerText = formatTime(minutes);
  document.getElementById("seconds-value").innerText = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateTimer();

setInterval(updateTimer, 1000);
