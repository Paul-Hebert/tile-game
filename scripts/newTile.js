export const newTile = ({ gridEl }) => {
  const tileEl = document.createElement("div");
  tileEl.classList.add("tile-wrapper");
  tileEl.innerHTML = /* html */ `
    <div class="tile-handle"><div class="tile-content"></div></div>
  `;
  gridEl.append(tileEl);
  return {
    el: tileEl,
    handleEl: tileEl.querySelector(".tile-handle"),
    position: {
      x: 0,
      y: 0,
      r: 0,
    },
  };
};
