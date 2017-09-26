'use strict';

// nav button
$('.btn').on('click', function(){
  $('#nav').toggleClass('toggle');
});
$('.list').on('click', function(){
  $('#nav').toggleClass('toggle');
});

// nav links
// $('.list').eq(0).on('click', function(){
//   $('[data-type="about"]').css({display: 'block'});
//   $('[data-type="portfolio"]').css({display: 'none'});
//   $('[data-type="experience"]').css({display: 'none'});
// });
// $('.list').eq(1).on('click', function(){
//   $('[data-type="about"]').css({display: 'none'});
//   $('[data-type="portfolio"]').css({display: 'block'});
//   $('[data-type="experience"]').css({display: 'none'});
// });
// $('.list').eq(2).on('click', function(){
//   $('[data-type="about"]').css({display: 'none'});
//   $('[data-type="portfolio"]').css({display: 'none'});
//   $('[data-type="experience"]').css({display: 'block'});
// });
// hover nav bar
$('.list').hover(function(){
  $(this).css('background-color', 'rgba(147, 147, 147, .5)');
}, function(){
  $(this).css('background-color', 'transparent');
});
