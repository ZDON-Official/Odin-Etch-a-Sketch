const board = document.getElementById("board");

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

// const rows = document.querySelectorAll(".rows");
// // for columns
// for (var i = 0; i < 16; i++) {
//   console.log("inside column");
//   rows.innerHTML = "1";
// }
