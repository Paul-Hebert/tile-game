import { randomInt, randomInt, randomItemInArray } from "./random.js";
import { tiles } from "./tiles.js";
import { moveTile } from "./moveTile.js";

export const newTile = ({ gridEl }) => {
  const tileEl = document.createElement("div");
  tileEl.classList.add("tile-wrapper");

  const { sides, graphics } = randomItemInArray(tiles)();

  tileEl.innerHTML = /* html */ `
    <div class="tile-handle">
      <svg viewBox="0 0 100 100" class="tile-content">
        ${graphics};
      </svg>
    </div>
  `;
  const handleEl = tileEl.querySelector(".tile-handle");
  const position = { x: 0, y: 0, r: randomInt(0, 3) };
  gridEl.append(tileEl);
  moveTile({ handleEl, position });
  return {
    sides,
    el: tileEl,
    handleEl,
    position,
  };
};
