export default function playAudio() {
        const audio = new Audio('./DZIDZIO - Гімн України (Official Audio).mp3');
        
        audio.currentTime = 0;
        audio.play();
}


