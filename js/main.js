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

var toggleAccordian = function() {
  $accordian = $('.accordian')

  $accordian.addClass('active');

  setTimeout(function() {
    $accordian.removeClass('active');
  }, 1200);
}

$(document).on('ready', function() {
  var button  = $('#hamburger');
  var menu    = $('#menu');
  var overlay = $('#overlay');
  var names   = $('#nav li');
  var pages   = $('.content');

  var ham = new Hamburger(button, menu, overlay);

  // events
  button.on('click', function() {
    ham.toggle();
  })

  names.on('click', function(e) {
    var $name = $(e.currentTarget);

    if (!$(pages[$name.index()]).hasClass('active')) {
      toggleAccordian();

      pages.removeClass('active');
      setTimeout(function() {
        $(pages[$name.index()]).addClass('active');
      }, 1200);      
    }


  });

});