var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var am_pm = document.getElementById("am-pm");
var currentSeconds = null;

setInterval(function () {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();

  if (currentDate.getHours() < 12) {
    am_pm.innerText = "AM";
  } else {
    am_pm.innerText = "PM";
  }

  if (currentDate.getSeconds() < 10) {
    currentSeconds = 0 + currentDate.getSeconds();
  } else {
    currentSeconds = currentDate.getSeconds();
  }

  hours.innerText = currentDate.getHours();
  minutes.innerText = currentDate.getMinutes();
  seconds.innerText = currentSeconds;
}, 1000);
