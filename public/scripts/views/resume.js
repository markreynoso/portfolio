'use strict';
// var work = [];
var design = [];

// function Job (info) {
//   this.title = info.title;
//   this.start = info.start;
//   this.end = info.end;
//   this.summary = info.summary;
//   this.company = info.company;
//   this.used = info.used;
// }
// Job.prototype.toHtml = function() {
//   var theHtml = $('#job-template').html();
//   var createTemplate = Handlebars.compile(theHtml);
//   return createTemplate(this);
// }

function Design (data) {
  this.title = data.title;
  this.img = data.img;
  this.description = data.description;
  this.contribution = data.contribution;
  this.used = data.contribution;
  this.type = data.type;
  this.style = data.style;
  this.audience = data.audience;
}
Design.prototype.toHtml = function(){
  var theHtml = $('#design-template').html();
  var createTemplate = Handlebars.compile(theHtml);
  return createTemplate(this);
}

// design
designData.forEach(function(projects){
  design.push(new Design(projects));
})
design.forEach(function(project){
  $('#experience').append(project.toHtml());
})


// // jobs
// jobData.forEach(function(jobList) {
//   work.push(new Job(jobList));
// });
// work.forEach(function(job) {
//   $('#experience').append(job.toHtml());
// });

// let newData = jobData.map(thing => thing.used).reduce(function(a, b){
//   return a + b;
// });
// $('#experience').append(`<h4>Skills</h4><p>${newData}</p>`);

//github repos
// function getsMyGit(){
//   $.get('/github/users/markreynoso/repos').then(response => response.forEach(git => $('.git').append(`<h4>${git.name}</h4><p>${git.created_at}</p><p><a href="${git.url}">see repo</a></p></br>`)))
// }
