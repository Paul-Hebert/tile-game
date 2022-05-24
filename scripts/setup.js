import { newTile } from "./newTile.js";
import { moveTile } from "./moveTile.js";
import { placeTile } from "./placeTile.js";

export function setup({ gridEl, gridData, gridSize }) {
  clearGrid({ gridEl, gridData, gridSize });

  placeStartTile({ gridEl, gridData });
}

function clearGrid({ gridEl, gridData }) {
  gridEl.innerHTML = "";

  gridData.forEach((row, i) => {
    row.forEach((column, j) => {
      gridData[i][j] = null;
    });
  });
}

function placeStartTile({ gridEl, gridData }) {
  const tile = newTile({ gridEl });
  tile.position.x = 4;
  tile.position.y = 4;
  moveTile(tile);
  placeTile({ gridData, tile });
}
