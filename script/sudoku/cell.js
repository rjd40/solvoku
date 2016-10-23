class Cell {
  // val == 0 represents no value
  constructor(v, x, y) {
    this.x = x;
    this.y = y;
    
    if (v) {
      return this.is(v);
    } else {
      this.vals = [true, true, true, true, true, true, true, true, true];
      this.val = 0;
      return this;
    }
  }

  is(v) {
    // if the value of the cell this pencil represents in known
    if (Cell.validate(v)) {
      this.vals = [false, false, false, false, false, false, false, false, false];
      this.vals[v - 1] = true;
      this.val = v;
      return this;
    }
  }

  isNot(v) {
    // if the value of the cell this pencil represent cannot be v
    if (Pencil.validate(v)) {
      this.vals[v - 1] = false;
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
      if (this.vals[i]) { r.push(i + 1); }
    }

    return r;
  }

  static validate(v) {
    if (v > 0 && v <= 9) { return true; }

    throw new RangeError("Cell value out of range: '" + v + "'")
    return false;
  }
}
