export const newTile = ({gridEl}) => {
  const tile = document.createElement('div');
  const tileContent = document.createElement('div');
  tileContent.classList.add('tile-content');
  tile.classList.add('tile');
  tile.append(tileContent);
  gridEl.append(tile);
  return tile;
}