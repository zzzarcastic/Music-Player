console.log("Welcome To Musicx");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
//var audio = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "WeRollin", filepath: "songs/1.mp3", coverpath: "img/cv1.jpg" },
    { songName: "Elevated", filepath: "songs/2.mp3", coverpath: "img/cv2.jpg" },
    { songName: "NoLove", filepath: "songs/3.mp3", coverpath: "img/cv4.jpg" },
    { songName: "OffShore", filepath: "songs/4.mp3", coverpath: "img/cv5.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audio.play();

//Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

//Listen to Event
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/4.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 4) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = 'songs/3.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})