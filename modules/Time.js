import { DateTime } from './Luxonn.js';

export default () => {
  const liveTime = document.getElementById('live-time');
  setInterval(() => {
    const now = DateTime.now().toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS,
    );
    liveTime.innerHTML = ` ${now}   `;
  }, 1000);
};
