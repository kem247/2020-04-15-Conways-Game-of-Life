const width = 25;
const height = 20;

const gol = new GameOfLife(width, height);

const tds = [];

const table = document.createElement("tbody");

for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.classList.add("default");
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);

//TOGGLE CELL

function colorize() {
  tds.forEach((td) => {});
  if (cell.className == "default") {
    cell.className = "alive";
  } else if (cell.className == "alive") {
    cell.className = "default";
  } else {
    cell.className = "alive";
  }
}
document.getElementById("board").addEventListener("click", (event) => {
  if (event.target.matches("td")) {
    const cell = event.target;
    colorize(cell);
  }
});

document.getElementById("step_btn").addEventListener("click", (event) => {});

document.getElementById("play_btn").addEventListener("click", (event) => {});

document.getElementById("random_btn").addEventListener("click", (event) => {});

document.getElementById("clear_btn").addEventListener("click", (event) => {});
