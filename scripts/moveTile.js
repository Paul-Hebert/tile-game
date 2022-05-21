export const moveTile = ({
  tileEl,
  x = 0,
  y = 0,
  r = 0
}) => {
  tileEl.querySelector('.tile-handle').style.transform = `translate(${x * 100}%, ${y * 100}%) rotate(${r * 90}deg)`;
}