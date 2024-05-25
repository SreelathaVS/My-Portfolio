

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '<p> </p>';
}
function deleteCharacter() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerHTML = '<p> </p>';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText;
    // Replace the symbols with their corresponding operators
    expression = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/%/g, '/100');
    try {
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
}