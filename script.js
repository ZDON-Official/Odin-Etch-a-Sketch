const board = document.getElementById("board");
let col_hover = document.getElementsByClassName(".column");

const slider = document.getElementById("size_slider");
const slider_val = document.getElementById("slider_value");

const new_board = document.getElementById("new_board");
const reset_board = document.getElementById("reset_board");

const color_picker = document.getElementById("color");

const board_width = 600;

// =================================================================================================

let slider_value = slider.value;
let paint = color_picker.value;
let size = slider_value;
let col_size = board_width / size;

slider_val.innerHTML = slider_value;
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

  // col_hover = document.getElementsByClassName("column");
}

// function change_color(color) {
//   console.log(`color changed to ${color}`);
//   paint = color;
//   document.documentElement.style.setProperty("--primary_color", color);
// }

function clear_board() {
  board.textContent = "";
}

slider.oninput = function () {
  slider_value = this.value;
  slider_val.innerHTML = slider_value;
};

new_board.addEventListener("click", function () {
  size = slider_value;
  col_size = board_width / size;

  clear_board();
  draw_board();
});

reset_board.addEventListener("click", function () {
  clear_board();
  draw_board();
});

color_picker.addEventListener("change", function () {
  console.log(`color changed to ${this.value}`);
  paint = this.value;
  document.documentElement.style.setProperty("--primary_color", this.value);
});

$("#board").on("mouseover", ".column", function () {
  $(this)[0].style.backgroundColor = paint;
});
