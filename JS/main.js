var playPauseBtn = document.querySelector('.playpause');
var stopBtn = document.querySelector('.stop');
var rwdBtn = document.querySelector('.rwd');
var fwdBtn = document.querySelector('.fwd');
var timeLabel = document.querySelector('.time');
var volumeSlider = document.getElementById('volume');
var fillBar = document.getElementById("fill");

//Retirer les controles de bases de la vidéo
var player = document.querySelector('video');
player.removeAttribute('controls');

playPauseBtn.onclick = function () {
    if (player.paused) {
        player.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        player.pause();
        playPauseBtn.textContent = 'Play';
    }
};
// if (player.paused) {
//     player.play();
//     playPauseBtn.style.background = "url(MEDIA/pse.svg) no-repeat";
// } else {
//     player.pause();
//     playPauseBtn.style.background = "url(MEDIA/play.svg) no-repeat";}
// };


stopBtn.onclick = function () {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
};

rwdBtn.onclick = function () {
    player.currentTime -= 3;
};

fwdBtn.onclick = function () {
    player.currentTime += 3;
    if (player.currentTime >= player.duration || player.paused) {
        player.pause();
        player.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    }
};

player.ontimeupdate = function () {
    var minutes = Math.floor(player.currentTime / 60);
    var seconds = Math.floor(player.currentTime - minutes * 60);
    var minuteValue;
    var secondValue;

    if (minutes < 10) {
        minuteValue = "0" + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = "0" + seconds;
    } else {
        secondValue = seconds;
    }

    mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
};

function changeVolume() {

    player.volume = volumeSlider.value;

}

player.addEventListener('timeupdate', function () {

    var position = player.currentTime / player.duration;

    fillBar.style.width = position * 100 + '%';

    convertTime(Math.round(vid.currentTime));

    if (player.ended) {
        playPauseBtn.textContent = 'Play';
    }

});