const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

const changeColor = () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.setAttribute('disabled', '');
  }, 1000);
};

refs.startBtn.addEventListener('click', changeColor);

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
