'use strict';

// nav button
$('.btn').on('click', function(){
  $('#nav').toggle(750);
});
$('.list').on('click', function(){
  $('#nav').toggle(750);
});

// nav links
$('.list').eq(0).on('click', function(){
  $('[data-type="about"]').css({display: 'block'});
  $('[data-type="portfolio"]').css({display: 'none'});
});
$('.list').eq(1).on('click', function(){
  $('[data-type="about"]').css({display: 'none'});
  $('[data-type="portfolio"]').css({display: 'block'});
});
