let count = 0;
const countElement = document.getElementById("count");
const evenOddElement = document.getElementById("evenOdd");
const historyElement = document.getElementById("history");

function updateCounter() {
  countElement.textContent = count;
  evenOddElement.textContent = count % 2 === 0 ? "Even" : "Odd";
  evenOddElement.style.color = count % 2 === 0 ? "green" : "red";
}

function addToHistory(value) {
  const historyItem = document.createElement("div");
  historyItem.textContent = value;
  historyElement.appendChild(historyItem);
}

document.getElementById("increment").addEventListener("click", function() {
  count++;
  updateCounter();
  addToHistory(count);
});

document.getElementById("decrement").addEventListener("click", function() {
  count = Math.max(count - 1, 0);
  updateCounter();
  addToHistory(count);
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  updateCounter();
  addToHistory(count);
  historyElement.innerHTML = "";
});
