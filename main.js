import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

const getComputerChoice = function () {
  const choice = ['rock', 'paper', 'scissors']; // array
  // pick random string from array
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]; // rand 1-3
  // console.log(computerChoice);
  return computerChoice;
};

const gameLogic = function (player, computer) {
  if (player == computer) {
    return console.log('DRAW');
  }
  if (player == 'rock' && computer == 'paper') {
    console.log(`PLAYER WINS (${player} beats ${computer})`);
  } else if (player == 'rock' && computer == 'scissors') {
    console.log(`COMPUTER WINS (${player} beats ${computer})`);
  }
  if (player == 'paper' && computer == 'rock') {
    console.log(`PLAYER WINS (${player} beats ${computer})`);
  } else if (player == 'paper' && computer == 'scissors') {
    console.log(`COMPUTER WINS (${player} beats ${computer})`);
  }
  if (player == 'scissors' && computer == 'paper') {
    console.log(`PLAYER WINS (${player} beats ${computer})`);
  } else if (player == 'scissors' && computer == 'rock') {
    console.log(`COMPUTER WINS (${player} beats ${computer})`);
  }
};

const input = document.getElementById('choice');
const submit = document.getElementById('submit');

input.addEventListener('click', (e) => {
  e.preventDefault();
  input.value = '';
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const playerChoice = input.value.toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
  gameLogic(playerChoice, computerChoice);
});
