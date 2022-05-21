import { newTile } from "./newTile.js";
import { moveTile } from "./moveTile.js";

let tile;
const gridEl = document.querySelector(".grid");
const gridSize = 10;
const gridData = [];
for (let i = 0; i < 10; i++) {
  gridData[i] = [];
  for (let j = 0; j < 10; j++) {
    gridData[i].push(null);
  }
}
console.table(gridData);

startRound();
listenForCommands();

function startRound() {
  tile = newTile({ gridEl });
}

function listenForCommands() {
  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          tile.position.y++;
          if (tile.position.y >= gridSize) {
            tile.position.y = 0;
          }
          moveTile(tile);
          break;
        case "ArrowUp":
          tile.position.y--;
          if (tile.position.y < 0) {
            tile.position.y = gridSize - 1;
          }
          moveTile(tile);
          break;
        case "ArrowLeft":
          tile.position.x--;
          if (tile.position.x < 0) {
            tile.position.x = gridSize - 1;
          }
          moveTile(tile);
          break;
        case "ArrowRight":
          tile.position.x++;
          if (tile.position.x >= gridSize) {
            tile.position.x = 0;
          }
          moveTile(tile);
          break;
        case "Meta":
          tile.position.r--;
          moveTile(tile);
          break;
        case "Alt":
          tile.position.r++;
          moveTile(tile);
          break;
        case "Enter":
          if (canPlaceTile()) {
            placeTile();
          }
          break;
        default:
          return;
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
}

function canPlaceTile() {
  if (gridData[tile.position.y][tile.position.x] === null) {
    return true;
  }
  tile.el.classList.add("invalid-placement");
  setTimeout(() => {
    tile.el.classList.remove("invalid-placement");
  }, 500);
  return false;
}

function placeTile() {
  gridData[tile.position.y][tile.position.x] = tile.el;
  tile.el.classList.add("is-placed");
  tile = newTile({ gridEl });
}
