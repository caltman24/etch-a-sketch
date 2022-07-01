const getGridSize = () => document.getElementById("grid-size").value;

// create a tile element with the fixed tile size
const createTile = () => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  return tile;
};

// set the grid style and return the grid element
const setGrid = () => {
  const grid = document.getElementById("grid");
  const gridSize = getGridSize(grid);
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
  return grid;
};

// create and append tiles to the grid
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

// return a random hsl color
const getRandomHsl = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

let mouseDown = false;
// on mouse up(on the body) set the mouseDown to true
document.body.onmousedown = () => {
  mouseDown = true;
  return;
};
// on mouse down(on the body) set the mouseDown to false
document.body.onmouseup = () => {
  mouseDown = false;
  return;
};

// set the tile color
const setTileColor = (e, color) => {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = color;
};

// add shake animation
const applyShakeAnimation = (node) => {
  const removeDelay = 1000;
  node.classList.add("shake");
  setTimeout(() => {
    node.classList.remove("shake");
  }, removeDelay);
};

// call shake animation and reset grid
const shake = () => {
  const gridWrapper = document.querySelector(".grid__wrapper");
  const clearDelay = 300;
  applyShakeAnimation(gridWrapper);
  setTimeout(() => {
    __main__();
  }, clearDelay);
};

function __main__() {
  createGrid();
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.addEventListener(
      "mouseover",
      (e) => {
        setTileColor(e, getRandomHsl());
      },
      { once: true }
    );
    tile.addEventListener("mousedown", (e) => {
      setTileColor(e, getRandomHsl());
    });
  });
}
const gridOption = document.getElementById("grid-size");
gridOption.addEventListener("change", __main__);
__main__();
