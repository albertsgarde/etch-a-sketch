function init()
{
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", e => restart());
  const horizTiles = 16;
  const vertTiles = 16;
  setupGrid(horizTiles, vertTiles);
}

function setupGrid(horizTiles, vertTiles)
{
  console.log("width: " + horizTiles + " length: " + vertTiles);
  const grid = document.querySelector("#grid");
  while (grid.firstChild)
    grid.removeChild(grid.lastChild);
  grid.style.gridTemplateColumns = "repeat(" + horizTiles + ", 1fr)";
  grid.style.gridTemplateRows = "repeat(" + vertTiles + ", 1fr)";
  for (let i = 0; i < horizTiles*vertTiles; i++)
  {
    const tile = document.createElement("div");
    tile.dataset.toggle = "false";
    tile.addEventListener("mouseover", e => toggleTile(tile));
    grid.appendChild(tile);
  }
}

function restart()
{
  let width = promptPositiveNonZeroInt("Width of the grid in tiles: ");
  let height = promptPositiveNonZeroInt("Height of the grid in tiles: ");
  setupGrid(width, height);
}

function promptPositiveNonZeroInt(message)
{
  let errorMessage = "";
  while (true)
  {
    input = prompt(errorMessage + "\n" + message);
    if (isNaN(input))
    {
      errorMessage = input + " is not a number.";
      continue;
    }
    else
    {
      input = Number(input);
      if (input < 1)
      {
        errorMessage = input + " is less than one.";
        continue;
      }
      else if (!Number.isInteger(input))
      {
        errorMessage = input + " is not an integer.";
        continue;
      }
      else
        return input;
    }
  }
}

function toggleTile(tile)
{
  if (tile.dataset.toggle === "false")
  {
    tile.dataset.toggle = "true";
  }
  else
  {
    tile.dataset.toggle = "false";
  }
}