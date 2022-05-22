import { adjacentTiles } from "./adjacentTiles.js";

function placeTile({ gridData, tile }) {
  gridData[tile.position.y][tile.position.x] = tile;
  tile.el.classList.add("is-placed");
}

function canPlaceTile({ gridData, tile }) {
  // Position occupied
  if (gridData[tile.position.y][tile.position.x] !== null) {
    throwError({ tile });
    return false;
  }
  adjacents = adjacentTiles({ gridData, tile });

  // Not next to another tile
  if (
    !adjacents.left &&
    !adjacents.right &&
    !adjacents.top &&
    !adjacents.bottom
  ) {
    throwError({ tile });
    return false;
  }

  return true;
}

function throwError({ tile }) {
  tile.el.classList.add("invalid-placement");
  setTimeout(() => {
    tile.el.classList.remove("invalid-placement");
  }, 500);
}

export { placeTile, canPlaceTile };
