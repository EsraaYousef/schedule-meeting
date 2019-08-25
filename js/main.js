
$(window).on("load", function () {
  $(".loading-window").delay(1000).fadeOut()
});

$(document).ready(function () {

  'use strict';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('fixed-top');
    }
  });

  // mobile menu
  $('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
  });

  new WOW().init();

  $('.form-control').each(function () {
    floatedLabel($(this));
  });
  $('.form-control').on('input', function () {
    floatedLabel($(this));
  });
  function floatedLabel(input) {
    var $field = input.closest('.form-group');
    if (input.val()) {
      $field.addClass('input-not-empty');
    } else {
      $field.removeClass('input-not-empty');
    }
  }


  $(function () {
    $('#datepicker').datepicker().on('change', function () {
      $('.datepicker-container').hide();
    });
  });

  $('.form-control.dt').on('change', function () {
    floatedLabel($(this));
  });

  $('#clear').click(function () {
    if (confirm("Want to clear?")) {
      $('#schedule_form input').val('');
    }
  });

  $(function () {
    $('#s_timepicker').mdtimepicker();
    $('#e_timepicker').mdtimepicker();
  });


});
