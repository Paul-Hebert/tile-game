import { randomBool } from "./random.js";

export const newTile = ({ gridEl }) => {
  const tileEl = document.createElement("div");
  const roadSides = {
    top: randomBool() ? "road" : "grass",
    left: randomBool() ? "road" : "grass",
    bottom: randomBool() ? "road" : "grass",
    right: randomBool() ? "road" : "grass",
  };

  let svgContent = "";
  if (roadSides.top === "road") {
    svgContent += addLine(50, 0);
  }
  if (roadSides.left === "road") {
    svgContent += addLine(0, 50);
  }
  if (roadSides.right === "road") {
    svgContent += addLine(100, 50);
  }
  if (roadSides.bottom === "road") {
    svgContent += addLine(50, 100);
  }

  tileEl.classList.add("tile-wrapper");
  tileEl.innerHTML = /* html */ `
    <div class="tile-handle">
      <svg viewBox="0 0 100 100" class="tile-content">
        ${svgContent};
      </svg>
    </div>
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

function addLine(x, y) {
  return /* svg */ `
      <line stroke="#000" x1="50" y1="50" x2="${x}" y2="${y}"></line>
    `;
}
