const board = document.getElementById("board");
let col_hover = document.getElementsByClassName(".column");

const slider = document.getElementById("size_slider");
const slider_val = document.getElementById("slider_value");

const new_board = document.getElementById("new_board");

const board_width = 600;

let slider_value = slider.value;
let paint = "#7F00FF";
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

// TODO: add code to change the paint color
function change_color() {
  // ! add code here
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

function clear_board() {
  board.textContent = "";
}

$("#board").on("mouseover", ".column", function () {
  $(this)[0].style.backgroundColor = paint;
});
