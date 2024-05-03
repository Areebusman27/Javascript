// Set the date we're counting down to
var countDownDate = new Date("May 5, 2024 23:59:59").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var distance = countDownDate - now;

  // Calculate hours, minutes, and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = 
    (hours < 10 ? "0" : "") + hours + ":" + 
    (minutes < 10 ? "0" : "") + minutes + ":" + 
    (seconds < 10 ? "0" : "") + seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);