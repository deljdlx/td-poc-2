// Select the counter display and button elements
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

// Initialize the counter value
let counterValue = 0;

// Add click event listener to the button
incrementButton.addEventListener('click', () => {
    // Increment the counter value
    counterValue++;

    // Update the counter display
    counterDisplay.textContent = counterValue;
});