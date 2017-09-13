
$('.btn').click(function(){
  $('#nav').toggleClass('toggle');
});
$('.list').click(function(){
  $('#nav').togggleClass('toggle');
});

projects.forEach(function(projects) {
  $('#projects').append(projects.toHtml());
})

function Project (title, link, img, year, client, type, description) {
  this.title = title;
  this.link = link;
  this.img = img;
  this.year = year;
  this.client = client;
  this.type = type;
  this.description = description;
  projects.push(this);
}

Project.prototype.toHtml = function () {
  var $newProject = $('#template').clone();
  $newProject.attr('id', '')
    .addClass('project');
  $newProject.find('h4')
    .addClass('title')
    .text(this.title);
  $newProject.find('a')
    .attr('href', this.link);
  $newProject.find('img')
    .addClass('preview')
    .attr('src', this.img);
  $newProject.find('p')
    .addClass('description')
    .text(this.description)
    .after('<hr>');
  return $newProject;
};

function Job (title, start, end, sum, company, used) {
  this.title = title;
  this.start = start;
  this.end = end;
  this.sum = sum;
  this.company = company;
  this.used = used;
}

function Skills (skill, comp) {
  this.skill = skill;
  this.comp = comp;
}

function Edu (school, degree, year) {
  this.school = school;
  this.degree = degree;
  this.year = year;
}
