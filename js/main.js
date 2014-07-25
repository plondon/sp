var Hamburger = function(button, menu, overlay) {
  this.button  = button;
  this.menu    = menu;
  this.overlay = overlay;
}

Hamburger.prototype.toggle = function() {
  if (this.button.hasClass('active')) {
    this.button.removeClass('active');
    this.menu.removeClass('active');
    this.overlay.removeClass('active');
  } else {
    this.button.addClass('active');
    this.menu.addClass('active');
    this.overlay.addClass('active');
  }
}

$(document).on('ready', function() {
  var button  = $('#hamburger');
  var menu    = $('#menu');
  var overlay = $('#overlay');
  var names   = $('#nav li');
  var pages   = $('.content');

  var ham = new Hamburger(button, menu, overlay);

  button.on('click', function() {
    ham.toggle();
  })

  names.on('click', function(e) {
    var name = $(e.currentTarget)
    pages.removeClass('active');
    $(pages[name.index()]).addClass('active');
  })

});