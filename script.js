let numOfButtons = 3;
function winnerButton(numOfButton) {
    return Math.ceil(Math.random() * numOfButton);;
}

function checkButton(clickedButton) {
    if (Number(clickedButton) == winnerButton(numOfButtons)) {
        document.getElementById("output").innerHTML = "Congratulations. You guessed the button!"
    } else {
        document.getElementById("output").innerHTML = "Keep trying."
    }
}
