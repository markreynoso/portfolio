
$('.btn').click(function(){
  $('#nav').toggleClass('toggle');
});
$('.list').click(function(){
  $('#nav').togggleClass('toggle');
});

function render() {
  var $newProject = $('#template').clone();
  $newProject.attr('id', '').addClass('project');
  $newProject.find('h4').addClass('title');
  $newProject.find('img').addClass('preview');
  $newProject.find('p').addClass('description');  
}
render();
