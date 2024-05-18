var text = document.getElementById("text")

function makebold(){
    text.style.fontWeight = "bold"
}

function makeunderline(){
    text.style.textDecoration = "underline"
}

function makeitalic(){
    text.style.fontStyle = "italic"
}

function changefontsize(){
    let number = document.getElementById("number")
    text.style.fontSize = number.value + 'px'
}

function changecolor(){
    let color = document.getElementById("color")
    text.style.color = color.value
}

function sansseriffont(){
    text.style.fontFamily = "Arial, Helvetica, sans-serif"
}

function cursivefont(){
    text.style.fontFamily = "Comic Sans MS, cursive"
}

function fantasyfont(){
    text.style.fontFamily = "Impact, fantasy"
}