let heartInterval; // Variable to store the interval ID

function openLetter() {
    const envelope = document.getElementById('envelope-container');
    const heart = document.getElementById('heart');
    const letter = document.getElementById('letter');
    const song = document.getElementById('romanticSong');
    startHeartAnimation();
    startSnowfall();
    
    // Animate envelope and heart
    envelope.classList.add('open');
    setTimeout(() => {
        heart.classList.remove('hidden');
    }, 500);

    // Show the letter after heart animation
    setTimeout(() => {
        heart.classList.add('hidden');
        envelope.style.display = 'none';
        letter.classList.remove('hidden');
        letter.classList.add('visible');
        song.play();
    }, 2000);
}

function navigateToGif() {
    window.location.href = "gif.html"; // Replace "gif.html" with your desired page URL
  }

function startHeartAnimation() {
    const heartContainer = document.getElementById('heart-container');

    // Clear any existing intervals to prevent duplicates
    clearInterval(heartInterval);

    // Generate hearts at regular intervals
    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💗'; // Big heart emoji
        heart.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
        heart.style.animationDelay = '0s'; // No delay for each new heart
        heart.style.fontSize = `${Math.random() * 40 + 60}px`; // Random size for variety
        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 4000); // Match animation duration (4s)
    }, 1000); // Generate a heart every 1 second
}

function generateBigHearts() {
    const heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 10; i++) { // Generate 10 big hearts
        const heart = document.createElement('div');
        heart.className = 'big-heart';
        heart.textContent = '💗'; // Big heart emoji
        heart.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
        heart.style.animationDelay = `${Math.random() * 1}s`; // Slight delay for each heart
        heart.style.fontSize = `${Math.random() * 40 + 60}px`; // Random size for variety
        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 4000); // Match animation duration
    }
}


function startSnowfall() {
    const snowContainer = document.getElementById('snow-container');

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄'; // Snowflake emoji
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall duration
        snowflake.style.animationDelay = `${Math.random() * 3}s`; // Random delay

        snowContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 8000); // Match the longest animation duration
    }, 300); // Create a snowflake every 300ms
}

function typeWriterEffect() {
    const textElement = document.querySelector(".typewriter");
    const fullText = textElement.textContent.trim(); // Get the full text
    const words = fullText.split(" "); // Split text into words
    let wordIndex = 0;
    textElement.textContent = ""; // Clear the content to start the effect

    const typingInterval = setInterval(() => {
        if (wordIndex < words.length) {
            textElement.textContent += words[wordIndex] + " "; // Add the next word
            wordIndex++;
        } else {
            clearInterval(typingInterval); // Stop the interval when done
        }
    }, 200); // Adjust typing speed (500ms per word)
}

// Trigger the effect when the page loads or after an action
document.addEventListener("DOMContentLoaded", typeWriterEffect);

