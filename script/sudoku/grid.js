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
  }

  getCell(x, y) {
    return this.grid[y][x];
  }

  getRow(y) {
    return this.grid[y];
  }

  getColumn(x) {
    var c = [];

    for (var j = 0; j < 9; ++j) {
      c.push(this.grid[j][x]);
    }

    return c;
  }

  getSquare(i, j) {}

  getSquareIndices(x, y) {}

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
