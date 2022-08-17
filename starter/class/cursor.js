const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  // helper function for resetting and setting background color on each movement
  movementHelper = (directions) => {
    Screen.render();
    this.resetBackgroundColor();
    directions == "up" ? this.row-- 
    : directions == "down" ? this.row++
    : directions == "left" ? this.col--
    : this.col++;
    this.setBackgroundColor();
    Screen.render();
  }
  up = () => {
    if (this.row > 0) {
      this.movementHelper("up");
    }
  }

  down = () => {
    if (this.row < 2) {
      this.movementHelper("down");
    }
  }

  left = () => {
    if (this.col > 0) {
      this.movementHelper("left");
    }
  }

  right = () => {
    if (this.col < 2) {
      this.movementHelper("right");
    }
  }


}


module.exports = Cursor;
