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

    noButton.style.transform = `translateX(${randomMove}px)`;
    noButton.disabled = true;
}
