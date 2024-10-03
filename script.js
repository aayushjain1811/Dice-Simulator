const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');

// Function to roll the dice
const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;  // Generates random number between 1 and 6
    dice.textContent = randomNumber;  // Update the dice display
    result.textContent = `Result: ${randomNumber}`;  // Update the result
};

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);
