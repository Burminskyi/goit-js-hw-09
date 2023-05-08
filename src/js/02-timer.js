import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputField: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
refs.startBtn.after(clearBtn);

refs.timer.style.display = 'flex';
refs.timer.style.gap = '10px';
refs.startBtn.style.marginRight = '5px';

let selectedDate = 0;
let timerId = null;
refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      getTimeOfSelectedDate(selectedDates[0]);
    }
  },
};

function getTimeOfSelectedDate(data) {
  refs.startBtn.removeAttribute('disabled', '');
  return (selectedDate = data.getTime());
}

flatpickr(refs.inputField, options);

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
  if (selectedDate < Date.now()) {
    window.alert('Please choose a date in the future');
  } else {
    refs.startBtn.setAttribute('disabled', '');
    refs.inputField.setAttribute('disabled', '');
    timerId = setInterval(() => {
      convertMs(selectedDate - Date.now());
    }, 1000);
  }
}

function convertMs(ms) {
  if (ms < 0) {
    Notiflix.Notify.success('Time end');
    clearInterval(timerId);
  } else {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

clearBtn.addEventListener('click', onClearBtnClick);

function onClearBtnClick(e) {
  refs.startBtn.removeAttribute('disabled', '');
  refs.inputField.removeAttribute('disabled', '');
  clearInterval(timerId);
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}
