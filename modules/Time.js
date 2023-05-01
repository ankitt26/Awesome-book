import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const Time = () => {
  const now = DateTime.now();
  const liveTime = document.getElementById('live-time');
  liveTime.innerHTML = ` ${now}   `;
};

export { Time };
