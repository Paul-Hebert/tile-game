export const adjacentTiles = ({ gridData, tile }) => ({
  top: gridData[tile.position.y - 1]?.[tile.position.x],
  bottom: gridData[tile.position.y + 1]?.[tile.position.x],
  right: gridData[tile.position.y]?.[tile.position.x + 1],
  left: gridData[tile.position.y]?.[tile.position.x - 1],
});
