const buttonPlayPause = document.getElementById('play-pause');
const audioChapter = document.getElementById('audio-chapter');
const buttonForward = document.getElementById('forward');
const buttonRewind = document.getElementById('rewind');
const chapterName = document.getElementById('chapter');

const numberChapters = 10;
let itsPlaying = false;
let currentChapter = 1;

function playTrack() {
    audioChapter.play();
    buttonPlayPause.classList.remove('bi-play-circle-fill');
    buttonPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseTrack() {
    audioChapter.pause();
    buttonPlayPause.classList.remove('bi-pause-circle-fill');
    buttonPlayPause.classList.add('bi-play-circle-fill');
}

function playOrPause() {
    if (itsPlaying === false) {
        playTrack();
        itsPlaying = true;
    } else {
        pauseTrack();
        itsPlaying = false;
    }
}

function changeChapterName() {
    chapterName.innerHTML = `Capítulo ${currentChapter}`;
}

function nextTrack() {
    if (currentChapter === numberChapters) {
        currentChapter = 1;
    } else {
        currentChapter += 1;
    }

    audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
    playTrack();
    itsPlaying = true;
    changeChapterName();
}

function previousTrack() {
    if (currentChapter === 1) {
        currentChapter = 1;
    } else {
    currentChapter -= 1;
    }

    audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
    playTrack();
    itsPlaying = true;
    changeChapterName();
}


buttonPlayPause.addEventListener('click', playOrPause);
buttonForward.addEventListener('click', nextTrack);
buttonRewind.addEventListener('click', previousTrack);