'use strict';

// nav button
$('.btn').on('click', function(){
  $('#nav').toggleClass('toggle');
});
$('.list').on('click', function(){
  $('#nav').toggleClass('toggle');
});

// hover nav bar
$('.list').hover(function(){
  $(this).css('background-color', 'rgba(147, 147, 147, .5)');
}, function(){
  $(this).css('background-color', 'transparent');
});
