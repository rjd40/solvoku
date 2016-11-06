class Grid {
  constructor(g) {
    // assumes array of rows and converts to internal format

    this.grid = [];

    for (var j = 0; j < 9; ++j) {
      var r = [];
      for (var i = 0; i < 9; ++i) {
        r.push(new Cell(g[j][i], i, j));
      }

      this.grid.push(r);
    }

    // update pencilsMarks of all cells


  }

  updateCellValue(v, x, y) {

  }

  getCell(x, y) {
    return this.grid[y][x];
  }

  getRow(y) {
    return this.grid[y];
  }

  getColumn(x) {
    var column = [];

    for (var j = 0; j < 9; ++j) {
      column.push(this.grid[j][x]);
    }

    return column;
  }

  getSquare(x, y) {
    var start = this.getSquareIndices(x, y);
    var square = [];

    for (var j = 0; j < 3; ++j) {
      for (var i = 0; i < 3; ++i) {
        square.push(this.grid[j][i]);
      }
    }

    return square;
  }

  getSquareIndices(x, y) {
    return {
      x: Math.floor(x / 3),
      y: Math.floor(y / 3)
    }
  }

  toString() {
    for (var y = 0; y < 9; ++y) {
      var s = "| ";
      for (var x = 0; x < 9; ++x) {
        var v = this.grid[y][x].toString();

        s += v + " | ";
      }
      console.log(s)
    }
    console.log("");
  }
}
