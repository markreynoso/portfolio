
$('.btn').click(function(){
  $('#nav').toggleClass('toggle');
});
$('.list').click(function(){
  $('#nav').togggleClass('toggle');
});

projects.forEach(function(projects) {
  $('#projects').append(projects.toHtml());
})
