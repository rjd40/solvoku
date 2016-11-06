$(function() {
  initGrid();
  resizeGrid();
  $(window).on("keydown", function(e) {
    var k = convertKeydown(e);

    if (k) {
      $(".cell .picked").text(k).focus();;
      Picker.destroy();
    }
  });
  $(window).click(function() { Picker.destroy(); });
  $(window).resize(resizeGrid);
  $(".cell button").click(function(e) {
    Picker.create($(this));

    return false;
  });

  $(".cell button").on("keydown", function(e) {
    var k = convertKeydown(e);

    if (k) {
      $(this).text(k);
    }
  });
});

function convertKeydown(e) {
  var k = e.keyCode;
  //console.log(e.keyCode);

  if ((k >= 49 && k <= 57) || (k >= 97 && k <= 105)) {
    return e.key;
  }
  //27 (esc) 8 (backspace) 46 (delete) 48/96 (0)
  if ((k == 27 || k == 8 || k == 46 || k == 48 || k == 96 )) {
    return " ";
  }
}

function initGrid() {
  var ui = $(".ui-content");

  var t = $("<table/>");

  for (var r = 0; r < 9; ++r) {
    var row = $("<tr/>");

    if (r == 8) { row.css("border-bottom", "2px solid black"); }
    if (r % 3 == 0) { row.css("border-top", "2px solid black"); }

    for (var c = 0; c < 9; ++c) {
      var cell = $("<td/>", { class: "cell" });

      if (c == 8) { cell.css("border-right", "2px solid black"); }
      if (c % 3 == 0) { cell.css("border-left", "2px solid black"); }

      cell.append($("<button/>", {
        text: " ",
        data: {
          x: c,
          y: r
        }
      }).text(" "));
      row.append(cell);
    }
    t.append(row);
  }

  ui.append(t);
}

function resizeGrid() {
  var s = $(".ui-content tr").first().width() / 9;

  Picker.destroy();

  $(".ui-content td").height(s);
  $(".ui-content td").width(s);
}
