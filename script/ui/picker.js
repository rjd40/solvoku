var Picker = {
  create: function(cell) {
    Picker.destroy();

    var picker = $("<div/>", { class: "picker" });
    var size = $(".ui-content tr").first().width() / 3;
    var x = cell.data().x;
    var y = cell.data().y;
    var t = cell.offset().top - (0.5 * size) + (1/6 * size) + 1;
    var l = cell.offset().left - (0.5 * size) + (1/6 * size) + 1;

    if (x == 0) { l += size / 3; }
    if (y == 0) { t += size / 3; }
    if (x == 8) { l -= size / 3; }
    if (y == 8) { t -= size / 3; }

    for (var i = 1; i <= 9; ++i) {
      var b = $("<button/>", {
        class: "pick",
        text: i,
        click: function() {
          if (cell.text() === $(this).text()) {
            cell.text(" ");
          } else {
            cell.text($(this).text());
          }
          cell.focus();
        }
      });

      b.css({
        width: (size / 3) - 2,
        height: (size / 3) - 2
      });

      picker.append(b);

      if (cell.text() === b.text()) {
        b.addClass("selected");
      };
    }

    picker.css({
      "top": t,
      "left": l,
      "height": size - 6,
      "width": size - 6
    });

    cell.blur();
    $("body").append(picker);
    picker.hide().fadeIn(100);
    cell.addClass("picked");
    $(".picker .pick").first().focus();
    $(".picker .selected").focus();
  },

  destroy: function() {
    var c = $(".cell .picked");
    var p = $(".picker");

    p.fadeOut(100, function() {
      p.remove();
    });
    c.removeClass("picked");
  }
}
