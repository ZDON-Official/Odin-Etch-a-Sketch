const board = document.getElementById("board");

let paint = "#7F00FF";
let size = 32;
const board_width = 600;

var col_size = board_width / size;

const col_hover = document.getElementsByClassName("column");

draw_board();

// draws the sketch board
function draw_board() {
  for (var i = 0; i < size; i++) {
    var row = document.createElement("div");
    board.appendChild(row);
    row.className = "row";
    row.style.height = col_size + "px";

    for (var j = 0; j < size; j++) {
      var column = document.createElement("div");
      row.appendChild(column);
      column.className = "column";
      column.style.height = col_size + "px";
      column.style.width = col_size + "px";
    }
  }
}

// change the size of the grid
function resize(new_size) {
  size = new_size;

  console.log(`new size is ${size}`);
  console.log(`new col_size is ${col_size}`);
}

// TODO: add code to change the paint color
function change_color() {
  // ! add code here
}

Array.from(col_hover).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = paint;
  });
});
