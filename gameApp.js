var numSquares       = 6,
    colors           = generateRandomColor(numSquares),
    square           = document.querySelectorAll('.square'),
    clickedColor     = pickColor(),
    guessColor       = document.querySelector('#guessColor'),
    displayMessage   = document.getElementById('message'),
    h1               = document.querySelector('h1'),
    resetButton      = document.querySelector('.reset'),
    modeBtns         = document.querySelectorAll('.mode');

guessColor.textContent = clickedColor;


for (var i = 0; i < square.length; i++) {
    //change color of each square
    square[i].style.backgroundColor = colors[i];
    //add click listener
    square[i].addEventListener('click', function () {
        //grab picked color
        var pickedColor = this.style.backgroundColor;
        //compare pickedcolor
        if (pickedColor === clickedColor) {
            displayMessage.textContent = 'Correct!!';
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = 'Play Again?'
        } else {
            this.style.backgroundColor = '#12010b';
            displayMessage.textContent = 'Try again';
        }
    });
}

resetButton.addEventListener('click', function () {
    reset();
});

for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function () {
        modeBtns[0].classList.remove('selected')
        modeBtns[1].classList.remove('selected')
        this.classList.add("selected");
        this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
        reset()
    })
}


function reset() {
    h1.style.backgroundColor = 'teal';
    resetButton.textContent = 'New Colors';
    displayMessage.textContent = '';
    //generate new colors
    colors = generateRandomColor(numSquares);
    //pick a random color
    clickedColor = pickColor();
    //change guessColor to match clickedColor
    guessColor.textContent = clickedColor;
    //change the colors of the squares
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = 'block';
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = 'none';
        }
    }
}
function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        //change each color to match the given color
        square[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    //create an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random colors and push to array
        arr.push(randomColor())
    }
    //return array
    return arr;
}
function randomColor() {
    //pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}













/* comment*/
/*easyBtn.addEventListener('click', function () {
    this.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    clickedColor = pickColor();
    guessColor.textContent = clickedColor;
    h1.style.backgroundColor = 'teal';
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function () {
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    clickedColor = pickColor();
    guessColor.textContent = clickedColor;
    h1.style.backgroundColor = 'teal';
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = 'block';
    }
}); */