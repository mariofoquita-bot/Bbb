// main.js
// Audio Playback and Soundboard Functionality

class Soundboard {
    constructor() {
        this.sounds = {};
    }

    addSound(name, file) {
        const audio = new Audio(file);
        this.sounds[name] = audio;
    }

    playSound(name) {
        const sound = this.sounds[name];
        if (sound) {
            sound.play();
        } else {
            console.error(`Sound ${name} not found!`);
        }
    }
}

// Usage example
const mySoundboard = new Soundboard();
mySoundboard.addSound('applause', 'sounds/applause.mp3');
mySoundboard.addSound('laugh', 'sounds/laugh.mp3');

// Play a sound
mySoundboard.playSound('applause');