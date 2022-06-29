const getGridSize = () => document.getElementById("grid-size").value;
const tileSize = 45;

const createTile = () => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.width = `${tileSize}px`;
  tile.style.height = `${tileSize}px`;
  tile.style.border = "1px solid black";
  return tile;
};

const setGrid = () => {
  const grid = document.getElementById("grid");
  const gridSize = getGridSize(grid);
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
  return grid;
};

const createGrid = () => {
  const grid = setGrid();
  const gridSize = getGridSize(grid);
  grid.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const tile = createTile();
      grid.appendChild(tile);
    }
  }
};
// create a function that returns a random hsl color
const getRandomHsl = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const setTileColor = (tile, color) => {
  tile.style.backgroundColor = color;
};

function __main__() {
  createGrid();
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.addEventListener(
      "mouseover",
      (e) => {
        setTileColor(e.target, getRandomHsl());
      },
      { once: true }
    );
  });
}
const gridOption = document.getElementById("grid-size");
gridOption.addEventListener("change", __main__);
__main__();
