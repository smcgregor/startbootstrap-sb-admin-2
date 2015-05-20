// Affix the width of the sidbar when it is not at the top.
function affix() {
  var elem = $('#sidebar-nav');
  var width = elem.width();
  elem.affix({});
  elem.width(width);
}
affix();
