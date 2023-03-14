import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

const onPlay = (event) => {
    let videoplayerCurrentTime = event.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(videoplayerCurrentTime));
}

player.on('timeupdate', throttle(onPlay, 1000));
