import Player from '@vimeo/player';

const _throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? JSON.parse(localStorage.getItem('videoplayer-current-time'))
  : 0;

player.setCurrentTime(currentTime);

player.on('timeupdate', _throttle(getTimeUpdate, 1000));

function getTimeUpdate(data) {
  console.log(data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
