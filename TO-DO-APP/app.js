var clicksHistory = document.getElementById('clicks-history')
var input = document.getElementById('userInput')


function addRecord() {
    console.log(input.value)
    var li = `<li> <span>${input.value} </span> 
    <button onclick="editThis(this)"> Edit</button>
    <button onclick="deleteThis(this)"> Delete</button> </li>`
    clicksHistory.innerHTML += li
}


function deleteThis(currentElement) {
    currentElement.parentElement.remove()
}

function editThis(currentElement) {
    var newTxt = prompt('Add text you want to edit:', currentElement.parentElement.firstElementChild.innerText)
    currentElement.parentElement.firstElementChild.innerText = newTxt
}