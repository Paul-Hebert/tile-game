export const newTile = ({gridEl}) => {
  const tile = document.createElement('div');
  tile.classList.add('tile-wrapper');
  tile.innerHTML = /* html */`
    <div class="tile-handle"><div class="tile-content"></div></div>
  `;
  gridEl.append(tile);
  return tile;
}