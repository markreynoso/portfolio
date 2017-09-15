'use strict';

var projects = [];

function Project (details) {
  this.title = details.title;
  this.link = details.link;
  this.img = details.img;
  this.year = details.year;
  this.client = details.client;
  this.type = details.type;
  this.description = details.description;
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

devData.forEach(function(projectList) {
  projects.push(new Project(projectList));
});

projects.forEach(function(projects) {
  $('#projects').append(projects.toHtml());
});
