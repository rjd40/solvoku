class Grid {
  constructor(g) {
    // assumes array of rows and converts to internal format

    this.grid = [];

    for (let j = 0; j < 9; ++j) {
      let r = [];
      for (let i = 0; i < 9; ++i) {
        r.push(new Cell(i, j));
      }

      this.grid.push(r);
    }

    // update pencilsMarks of all cells
    for (let j = 0; j < 9; ++j) {
      for (let i = 0; i < 9; ++i) {
        this.updateCellValue(this.getCell(i, j), g[j][i]);
      }
    }

    return this;
  }

  updateCellValue(cell, value) {
    if (!cell.val && value) {
      let cells = [].concat(
        this.getRow(cell.y),
        this.getColumn(cell.x),
        this.getSquare(cell.x, cell.y)
      );

      cells.forEach(function(c) {
        if (c != cell) {
          c.isNot(value);
        }
      });

      cell.is(value);

      return cell;
    }
  }

  recalcCells() {
    var cells = this.getAllCells();

    cells.forEach(function(c) {
      c.clearPencil();
    });

    for (var j = 0; j < 9; ++j) {
      for (var i = 0; i < 9; ++i) {
        var c = this.getCell(i, j);
        var v = c.popValue();

        this.updateCellValue(c, v);
      }
    }

    return this.grid;
  }

  calcHiddenPencils() {

    return this.grid()
  }

  getCell(x, y) { return this.grid[y][x]; }

  getRow(y) { return this.grid[y]; }

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
        square.push(this.grid[start.y + j][start.x + i]);
      }
    }

    return square;
  }

  getSquareIndices(x, y) {
    return {
      x: Math.floor(x / 3) * 3,
      y: Math.floor(y / 3) * 3
    }
  }

  getAllCells() {
    var cells = [];

    for (var j = 0; j < 9; ++j) {
      for (var i = 0; i < 9; ++i) {
        cells.push(this.grid[j][i]);
      }
    }

    return cells;
  }

  toString() {
    for (var j = 0; j < 9; ++j) {
      var s = "| ";
      for (var i = 0; i < 9; ++i) {
        var v = this.grid[j][i].toString();

        s += v + " | ";
      }
      console.log(s)
    }
    console.log("");
  }

  display() {
    displayGrid(this);
  }

  solve() {
    solve(this);
  }
}
