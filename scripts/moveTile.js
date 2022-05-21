export const moveTile = ({ handleEl, position }) => {
  const { x, y, r } = position;
  handleEl.style.transform = `translate(${x * 100}%, ${y * 100}%) rotate(${
    r * 90
  }deg)`;
};
