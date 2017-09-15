
// nav button
$('.btn').on('click', function(){
  $('#nav').toggleClass('toggle');
});
$('.list').on('click', function(){
  $('#nav').toggleClass('toggle');
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
  var theHtml = $('#post-template').html();
  var createTemplate = Handlebars.compile(theHtml);
  $('#template').find('p').after('<hr>');
  $('#template').attr('id', '');
  return createTemplate(this);
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

projects.forEach(function(projects) {
  $('#projects').append(projects.toHtml());
});
