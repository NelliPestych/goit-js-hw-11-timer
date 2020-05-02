const targetDate = new Date('May 10, 2020');

const refs = {
  daysValue: document.querySelector('span[data-value="days"'),
  hoursValue: document.querySelector('span[data-value="hours"'),
  minsValue: document.querySelector('span[data-value="mins"'),
  secsValue: document.querySelector('span[data-value="secs"'),
};

const timer = setInterval(() => {
  const currentTime = Date.now();
  let deltaTime = targetDate - currentTime;
  updateClockface(deltaTime);
}, 1000);

function updateClockface(time) {
  refs.daysValue.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  refs.hoursValue.textContent = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  refs.minsValue.textContent = pad(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
  );
  refs.secsValue.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
}

function pad(value) {
  return String(value).padStart(2, '0');
}
