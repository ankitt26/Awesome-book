import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default () => {
  const now = DateTime.now();
  const liveTime = document.getElementById('live-time');
  liveTime.innerHTML = ` ${now}   `;
};
