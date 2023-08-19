const board = document.getElementById("board");

let paint = "violet";
let size = 32;
var board_width = 600;

var col_size = board_width / size;

console.log(`col_size: ${col_size}`);

// loops 16 times
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

const col_hover = document.getElementsByClassName("column");

// TODO: add here
function draw_board() {}

Array.from(col_hover).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = paint;
  });
});
