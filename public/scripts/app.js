'use strict';

let sneakyPete = (function() {
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
  Project.prototype.toHtml = function() {
    var theHtml = $('#post-template').html();
    var createTemplate = Handlebars.compile(theHtml);
    $('#template').find('p').after('<hr>');
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

  // development projects
  function onLoadPage(){
    if (localStorage.devData){
      let arr = JSON.parse(localStorage.devData);
      arr.forEach(function(load){
        projects.push(new Project (load));
      })
      renderToPage();
    }
    else {
      $.get('/data/thedata.json', fillTheStuff);
    }
  }

   function fillTheStuff(response){
     localStorage.setItem('devData', JSON.stringify(response));
     response.forEach(function(fill){
       projects.push(new Project(fill));
     });
     renderToPage();
   }

  function renderToPage(){
    projects.forEach(function(projectList){
      $('#projects').append(projectList.toHtml());
    });
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
  $('#experience').append(newData);

  return {
    loadTheStuff: onLoadPage()
  }
}());
