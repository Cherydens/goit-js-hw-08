import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setTime();

player.on('timeupdate', throttle(getTimeUpdate, 1000));

function setTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

function getTimeUpdate({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}
