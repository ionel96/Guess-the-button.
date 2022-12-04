let numOfButtons = 3;
let winnerButton = Math.ceil(Math.random() * numOfButtons);
function checkButton(clickedButton) {
    if (Number(clickedButton) == winnerButton) {
        document.getElementById("output").innerHTML = "Congratulations. You guessed the button!"
    } else {
        document.getElementById("output").innerHTML = "Keep trying."
    }
}
