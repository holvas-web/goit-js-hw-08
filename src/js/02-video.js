import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const timePause = localStorage.getItem("videoplayer-current-time");
console.log(timePause);


player.on('timeupdate', throttle(onSavePause, 1000));

player.setCurrentTime(timePause);

function onSavePause ({ seconds } = 0) {
    localStorage.setItem("videoplayer-current-time", seconds);
}
