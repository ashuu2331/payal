// Create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('span');

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heart.style.opacity = Math.random();

        heartsContainer.appendChild(heart);
    }
}

// Popup functions
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

createHearts();