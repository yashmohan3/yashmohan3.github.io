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

    // Reset button position
    noButton.style.transition = 'none'; // Disable transition for instant reset
    noButton.style.transform = 'translateX(0)';
    void noButton.offsetWidth; // Trigger reflow
    noButton.style.transition = ''; // Re-enable transition

    // Calculate random position within a limited range
    const minMove = -50; // Minimum movement to the left
    const maxMove = 50; // Maximum movement to the right
    const randomMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove;

    // Move the button after a short delay to allow the transition to reset
    setTimeout(() => {
        noButton.style.transform = `translateX(${randomMove}px)`;
    }, 10);

    // Re-enable the button after the transition ends
    noButton.addEventListener('transitionend', () => {
        noButton.disabled = false;
    }, { once: true });
}