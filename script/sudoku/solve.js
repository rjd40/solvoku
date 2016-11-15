function solve(grid) {
  let madeChange;

  do {
    madeChange = false;
    while (solveSingletons(grid)) { madeChange = true; };
    while (solveRows(grid)) { madeChange = true; };
    while (solveColumns(grid)) { madeChange = true; };
    while (solveSquares(grid)) { madeChange = true; };
  } while (madeChange);
}

function solveSingletons(grid) {
  let madeChange = false;

  grid.getAllCells().forEach(function(cell) {
    let p = cell.pencilMarks();

    if (p.length == 1) {
      if (grid.updateCellValue(cell, p[0])) {
        console.log("Updated cell [" + cell.x + "][" + cell.y + "] => " + p[0]);
        madeChange = true;
      };
    }
  });

  return madeChange;
}

function solveRows(grid) {
  let madeChange = false;

  for (let j = 0; j < 9; ++j) {
    if (solveSet(grid, grid.getRow(j))) {
      console.log("\t\t\t\t\t\tfrom row " + (j + 1));
      madeChange = true;
    }
  }

  return madeChange;
}

function solveColumns(grid) {
  let madeChange = false;

  for (let i = 0; i < 9; ++i) {
    if (solveSet(grid, grid.getColumn(i))) {
      console.log("\t\t\t\t\t\tfrom column " + (i + 1));
      madeChange = true;
    }
  }

  return madeChange;
}

function solveSquares(grid) {
  let madeChange = false;

  for (let j = 0; j < 9; j += 3) {
    for (let i = 0; i < 9; i += 3) {
      if (solveSet(grid, grid.getSquare(i, j))) {
        console.log("\t\t\t\t\t\tfrom square (" + ((i * 3) + 1) + ", " + ((j * 3) + 1) + ")");
        madeChange = true;
      }
    }
  }

  return madeChange;
}

function solveSet(grid, set) {
  let madeChange = false;
  let x = [[], [], [], [], [], [], [], [], []];

  set.forEach(function(cell) {
    let p = cell.pencilMarks();

    p.forEach(function(mark) {
      x[mark - 1].push(cell);
    });
  });

  for (let i = 0; i < 9; ++i) {
    if (x[i].length == 1) {
      if (grid.updateCellValue(x[i][0], i + 1)) {
        console.log("Update cell [" + x[i][0].x + "][" + x[i][0].y + "] => " + (i + 1) + ":");
        madeChange = true;
      }
    }
  }

  return madeChange;
}
