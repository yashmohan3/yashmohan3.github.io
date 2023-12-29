function sendInvite(response) {
    if (response === 'Yes') {
        alert('Great! Looking forward to it! 🎉');
    } else {
        moveButton();
        alert('Oh no! 😔');
    }
}

function moveButton() {
    const noButton = document.querySelector('#buttonContainer button:last-child');

    // Calculate random position within a limited range
    const minMove = -50; // Minimum movement to the left
    const maxMove = 50; // Maximum movement to the right
    const randomMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove;

    // Apply the random movement
    noButton.classList.add('moved');
    noButton.style.transform = `translateX(${randomMove}%)`;

    // Re-enable the button after a short delay
    setTimeout(() => {
        noButton.classList.remove('moved');
        noButton.style.transform = 'translateX(0)';
        noButton.disabled = false;
    }, 300); // Adjust the delay based on your preference
}
