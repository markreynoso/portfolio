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

// design page single view
$('.enlarge').on('click', function(){
  $('.design-box').show()
  $('.next').show()
  $('.enlarged').attr('src', this.src)
})

$('.xout').on('click', function(){
  $('.design-box').hide()
  $('.next').hide()
})
