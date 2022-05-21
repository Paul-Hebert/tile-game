import {newTile} from './newTile.js'
import {moveTile} from './moveTile.js'

let tileEl;
let tilePosition = {
  x: 0,
  y: 0,
  r: 0
}
const gridEl = document.querySelector('.grid');
const gridSize = 10;
const gridData = [];
for(let i = 0; i < 10; i++) {
  gridData[i] = [];
  for(let j = 0; j < 10; j++) {
    gridData[i].push(null);
  }
}
console.table(gridData);

startRound();
listenForCommands();

function startRound() {
  tileEl = newTile({gridEl});
}

function listenForCommands() {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        tilePosition.y++;
        if(tilePosition.y >= gridSize) {
          tilePosition.y = 0;
        }
        moveTile({tileEl, ...tilePosition});
        break;
      case "ArrowUp":
        tilePosition.y--;
        if(tilePosition.y < 0) {
          tilePosition.y = gridSize - 1;
        }
        moveTile({tileEl, ...tilePosition});
        break;
      case "ArrowLeft":
        tilePosition.x--;
        if(tilePosition.x < 0) {
          tilePosition.x = gridSize - 1;
        }
        moveTile({tileEl, ...tilePosition});
        break;
      case "ArrowRight":
        tilePosition.x++;
        if(tilePosition.x >= gridSize) {
          tilePosition.x = 0;
        }
        moveTile({tileEl, ...tilePosition});
        break;
      case "Meta":
        tilePosition.r--;
        moveTile({tileEl, ...tilePosition});
        break;
      case "Alt":
        tilePosition.r++;
        moveTile({tileEl, ...tilePosition});
        break;
      case "Enter":
        if(canPlaceTile()) {
          placeTile();
        }
        break;
      default:
        return;
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
}

function canPlaceTile() {
  if(gridData[tilePosition.y][tilePosition.x] === null) {
    return true;
  }
  tileEl.classList.add('invalid-placement');
  setTimeout(() => {
    tileEl.classList.remove('invalid-placement')
  }, 500);
  return false;
}

function placeTile() {
  gridData[tilePosition.y][tilePosition.x] = tileEl;
  tileEl.classList.add('is-placed');
  tileEl = newTile({gridEl});
  tilePosition = {
    x: 0,
    y: 0,
    r: 0
  };
}