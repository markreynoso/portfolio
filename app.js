'use strict';

var projects = [], work = [];

function Project (details) {
  this.title = details.title;
  this.link = details.link;
  this.img = details.img;
  this.year = details.year;
  this.client = details.client;
  this.type = details.type;
  this.description = details.description;
}

Project.prototype.toHtml = function () {
  var theHtml = $('#post-template').html();
  var createTemplate = Handlebars.compile(theHtml);
  $('#template').find('p').after('<hr>');
  $('#template').attr('id', '');
  return createTemplate(this);
};

function Job (info) {
  this.title = info.title;
  this.start = info.start;
  this.end = info.end;
  this.summary = info.summary;
  this.company = info.company;
  this.used = info.used;
}
Job.prototype.toHtml = function () {
  var theHtml = $('#job-template').html();
  var createTemplate = Handlebars.compile(theHtml);
  return createTemplate(this);
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

jobData.forEach(function(jobList) {
  work.push(new Job(jobList));
});

work.forEach(function(job) {
  $('#experience').append(job.toHtml());
});
