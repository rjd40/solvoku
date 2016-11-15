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
        this.updateCellValue(g[j][i], i, j);
      }
    }

    return this;
  }

  updateCellValue(v, x, y) {
    let cellToUpdate = this.getCell(x, y);

    if (v) {
      let cells = [].concat(this.getRow(y), this.getColumn(x), this.getSquare(x, y));

      cells.forEach(function(cell) {
        if (cellToUpdate != cell) {
          cell.isNot(v);
        }
      });

      cellToUpdate.is(v);
    }    
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
