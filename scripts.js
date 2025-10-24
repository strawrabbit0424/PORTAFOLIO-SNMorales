// scripts.js
const backgroundMusic = new Audio('Audio/Lancelot.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

function startBackgroundMusic() {
    backgroundMusic.play().catch(e => console.log(e));
    document.removeEventListener('click', startBackgroundMusic);
    document.removeEventListener('touchstart', startBackgroundMusic);
    document.removeEventListener('keydown', startBackgroundMusic);
}

document.addEventListener('click', startBackgroundMusic);
document.addEventListener('touchstart', startBackgroundMusic);
document.addEventListener('keydown', startBackgroundMusic);
