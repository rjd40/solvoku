var Picker = {
  create: function(cell) {
    Picker.destroy();

    var picker = $("<div/>", { class: "picker" });

    var size = $(".ui-content tr").first().width() * 1.5 / 9;
    var x = cell.data().x;
    var y = cell.data().y;
    var t = cell.offset().top - 50 - (size/6);
    var l = cell.offset().left - 50 - (size/6);

    if (x == 0) { l += size/10; }
    if (y == 0) { t += size/10; }
    if (x == 8) { l -= size/10; }
    if (y == 8) { t -= size/10; }

    /*for (var i = 1; i <= 9; ++i) {
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
    */
    picker.css({
      "top": t,
      "left": l,
      "height": size,
      "width": size
    });

    /*cell.blur();

    cell.addClass("picked");
    $(".picker .pick").first().focus();
    $(".picker .selected").focus();*/
    $("body").append(picker);
    picker.hide().fadeIn(100);
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
