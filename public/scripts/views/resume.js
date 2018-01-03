'use strict';
var work = [];

function Job (info) {
  this.title = info.title;
  this.start = info.start;
  this.end = info.end;
  this.summary = info.summary;
  this.company = info.company;
  this.used = info.used;
}
Job.prototype.toHtml = function() {
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

// jobs
jobData.forEach(function(jobList) {
  work.push(new Job(jobList));
});
work.forEach(function(job) {
  $('#experience').append(job.toHtml());
});

let newData = jobData.map(thing => thing.used).reduce(function(a, b){
  return a + b;
});
$('#experience').append(`<h4>Skills</h4><p>${newData}</p>`);

//github repos
function getsMyGit(){
  $.get('/github/users/markreynoso/repos').then(response => response.forEach(git => $('.git').append(`<h4>${git.name}</h4><p>${git.created_at}</p><p><a href="${git.url}">see repo</a></p></br>`)))
}
