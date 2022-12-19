const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(1,-1);
ctx.translate(canvas.width/2, -canvas.height/2);

function strokeBackground() {
    for (let i = -10; i < 20; i += 2) {
        ctx.beginPath();
        if (i==0) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
        } else if (i%4 == 0) {
            ctx.lineWidth = 2;
        } else {
            ctx.strokeStyle = 'gray';
            ctx.lineWidth = .5;
        }
        ctx.moveTo(i * 25, -250);
        ctx.lineTo(i * 25, 250);
        ctx.stroke();
        ctx.moveTo(-250, i * 25);
        ctx.lineTo(250, i * 25);
        ctx.stroke();
    }
}

function strokeNumbers() {
    ctx.scale(1,-1)
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    for (let i = -10; i < 20; i += 2) {
        ctx.fillText(-i, 5, i * 25)
        ctx.fillText(i, i * 25, -3)
    }
}

function strokeFunction() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fontSize = '4'
    for (let x = -10; x <= 10; x += 0.001 ) {
        if ((x**2 <= 10)) {
            ctx.fillRect(x * 25, (x**2) * 25, 1, 1)
        }
    }
}

function getUserInput() {
    let userInput = document.getElementById('user-input').value.replaceAll(' ', '')
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === '+' || userInput[i] === '-' || userInput[i] === '*' || userInput[i] === '/') {
            let operator = userInput[i];
            userInput.slice()
        }
    }
    console.log(userInput)
}
strokeBackground()
strokeFunction()
strokeNumbers() 