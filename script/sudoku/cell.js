class Cell {
  // val == 0 represents no value
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.pencil = [true, true, true, true, true, true, true, true, true];
    this.val = 0;
    return this;
  }

  is(v) {
    // if the value of the cell this pencil represents in known
    if (Cell.validate(v)) {
      this.pencil = [false, false, false, false, false, false, false, false, false];
      this.pencil[v - 1] = true;
      this.val = v;
      return this;
    }
  }

  isNot(v) {
    // if the value of the cell this pencil represent cannot be v
    if (Cell.validate(v)) {
      if (this.val == v) {
        console.error("Cell collision: ");
        console.error(this);
      }
      this.pencil[v - 1] = false;
      return this;
    }
  }

  getVal() { return this.val; }

  toString() {
    if (this.val) { return this.val; }
    return " ";
  }

  pencilMarks() {
    var r = [];

    for (var i = 0; i < 9; ++i) {
      if (this.pencil[i]) { r.push(i + 1); }
    }

    return r;
  }

  static validate(v) {
    if (v > 0 && v <= 9) { return true; }

    throw new RangeError("Cell value out of range: '" + v + "'")
    return false;
  }
}
