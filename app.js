
$('.btn').click(function(){
  $('#nav').toggleClass('toggle');
});
$('.list').click(function(){
  $('#nav').togggleClass('toggle');
});

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

new Project ('Procrasinator Generator', 'https://willjreid.github.io/procrastinate/quiz.html', 'images/procrastinate.png', '2017', 'Code Fellows', 'website', 'For those times when you need a break from your busy schedule you can use the Procrasinator Generator. Don\'t waste more time than you have. This was a team project at Code Fellows at the completion of a 201 level course.');
new Project ('Bus Mall', 'https://markreynoso.github.io/bus-mall/', 'images/busmall.png', '2017', 'Code Fellows', 'website', 'Bus Mall takes a look at a mythical magazine that is looking for customer feedback regarding which products readers may have an interest in purchasing. This was a solo project during week 3 at Code Fellows 201 level course.');
new Project ('Salmon Cookies', 'https://markreynoso.github.io/cookie-stand/', 'images/salmoncookies.png', '2017', 'Code Fellows', 'website', 'Salmon Cookies produces reports for the imaginary cookie store selling cookies made of Salmon. This was a second week project in a 201 level course at Code Fellows.');

projects.forEach(function(projects) {
  $('#projects').append(projects.toHtml());
});
