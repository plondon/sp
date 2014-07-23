$(document).on('ready', function() {

  var button = $('#hamburger');
  var menu   = $('#menu');
  var overlay = $('#overlay');

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

  var ham = new Hamburger(button, menu, overlay)

  button.on('click', function() {
    ham.toggle();
  })

});