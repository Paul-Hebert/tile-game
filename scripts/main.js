import { newTile } from "./newTile.js";
import { moveTile } from "./moveTile.js";
import { placeTile, canPlaceTile, placeStartTile } from "./placeTile.js";
import { setup } from "./setup.js";

let tile;
const gridEl = document.querySelector(".grid");
const gridSize = 9;
const gridData = [];
for (let i = 0; i < gridSize; i++) {
  gridData[i] = [];
  for (let j = 0; j < gridSize; j++) {
    gridData[i].push(null);
  }
}

startRound();
listenForCommands();

function startRound() {
  setup({ gridEl, gridData, gridSize });
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
        case "s":
        case "ArrowDown":
          tile.position.y++;
          if (tile.position.y >= gridSize) {
            tile.position.y = 0;
          }
          moveTile(tile);
          break;
        case "w":
        case "ArrowUp":
          tile.position.y--;
          if (tile.position.y < 0) {
            tile.position.y = gridSize - 1;
          }
          moveTile(tile);
          break;
        case "a":
        case "ArrowLeft":
          tile.position.x--;
          if (tile.position.x < 0) {
            tile.position.x = gridSize - 1;
          }
          moveTile(tile);
          break;
        case "d":
        case "ArrowRight":
          tile.position.x++;
          if (tile.position.x >= gridSize) {
            tile.position.x = 0;
          }
          moveTile(tile);
          break;
        case "q":
        case "Meta":
          tile.position.r--;
          moveTile(tile);
          break;
        case "e":
        case "Alt":
          tile.position.r++;
          moveTile(tile);
          break;
        case " ":
        case "Enter":
          if (canPlaceTile({ gridData, tile })) {
            placeTile({ gridData, tile });
            tile = newTile({ gridEl });
          }
          break;
        case "Escape":
          startRound();
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
