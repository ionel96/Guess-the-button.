let numOfButtons = 3;
function checkButton(clickedButton) {
    let winnerButton = Math.ceil(Math.random() * numOfButtons);
    if (Number(clickedButton) == winnerButton) {
        document.getElementById("output").innerHTML = "Congratulations. You guessed the button!"
    } else {
        document.getElementById("output").innerHTML = "Keep trying."
    }
}
