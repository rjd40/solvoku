var Tester = {
  runAll: function() {
    Tester.runTest(Tester.a());
    Tester.runTest(Tester.b());
  },
  runTest: function(t) {
    let g = new Grid(t);

    console.log("Running test");
    console.log(g);
    g.toString();

    solve(g);

    console.log(g);
    g.toString();
  },
  a: function() {
    return [
      [5, 3,  ,  , 7,  ,  ,  ,  ],
      [6,  ,  , 1, 9, 5,  ,  ,  ],
      [ , 9, 8,  ,  ,  ,  , 6,  ],
      [8,  ,  ,  , 6,  ,  ,  , 3],
      [4,  ,  , 8,  , 3,  ,  , 1],
      [7,  ,  ,  , 2,  ,  ,  , 6],
      [ , 6,  ,  ,  ,  , 2, 8,  ],
      [ ,  ,  , 4, 1, 9,  ,  , 5],
      [ ,  ,  ,  , 8,  ,  , 7, 9]
    ];
  },
  b: function() {
    return [
      [ ,  , 3,  , 2,  ,  , 9,  ],
      [ ,  , 2,  ,  , 5,  ,  ,  ],
      [9,  , 4,  , 8,  ,  ,  , 1],
      [4,  ,  ,  , 6,  ,  , 8,  ],
      [ ,  ,  , 5,  , 7,  ,  ,  ],
      [ , 3,  ,  , 1,  ,  ,  , 4],
      [1,  ,  ,  , 5,  , 3,  , 9],
      [ ,  ,  , 1,  ,  , 8,  ,  ],
      [ , 7,  ,  , 9,  , 2,  ,  ]
    ];
  }
}
