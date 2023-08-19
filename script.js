const board = document.getElementById("board");

let paint = "violet";

// loops 16 times
for (var i = 0; i < 16; i++) {
  var row = document.createElement("div");
  board.appendChild(row);
  row.className = "row";

  for (var j = 0; j < 16; j++) {
    var column = document.createElement("div");
    row.appendChild(column);
    column.className = "column";
  }
}

const col_hover = document.getElementsByClassName("column");

Array.from(col_hover).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = paint;
  });
});
