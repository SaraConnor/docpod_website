import $ from 'jquery';
window.$ = $;

  var mobileMenuExpand = function() {
    var trigger = $('.burger'),
      nav = $('.menu-dropdown, .close');

    trigger.on("click", function() {
      if (nav.hasClass('close')) {
        nav.removeClass('close').addClass('active');
      } else {
        nav.removeClass('active').addClass('close');
      }
    });
  }

  mobileMenuExpand();
