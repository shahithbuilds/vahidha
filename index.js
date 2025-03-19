// Store the currently playing audio and the currently active surah
let currentAudio = null;
let currentSurah = null;

// Select all Quran buttons
document.querySelectorAll(".quran").forEach(button => {
    button.addEventListener("click", () => {
        let surah = button.getAttribute("data-surah");
        
        // If the same surah is clicked, handle pause/restart
        if (currentSurah === surah) {
            if (currentAudio.paused) {
                currentAudio.play(); // Resume playing if paused
            } else {
                currentAudio.pause(); // Pause if currently playing
                currentAudio.currentTime = 0; // Reset to the start if paused
            }
        } else {
            // If a different surah is clicked, stop the current audio and start new surah
            playSurah(surah);
        }
    });
});

// Function to play the selected surah
function playSurah(surah) {
    // Stop currently playing audio if exists
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Determine the correct audio file
    let audioFile = "";
    switch (surah) {
        case "Al-Fatiha":
            audioFile = "sounds/Al Fathiha.mp3";
            break;
        case "Al-Ikhlas":
            audioFile = "sounds/Al Iklas.mp3";
            break;
        case "Al-Falaq":
            audioFile = "sounds/Al Falaq.mp3";
            break;
        default:
            console.log("No sound found for this Surah:", surah);
            return;
    }

    // Play new audio
    currentAudio = new Audio(audioFile);
    currentAudio.play();

    // Update the current surah to keep track of what’s playing
    currentSurah = surah;
}
