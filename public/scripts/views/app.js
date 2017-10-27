'use strict';
var app = app || {};

(function(module) {

  var projects = [];

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

  // development projects
  Project.onLoadPage = function(){
    if (localStorage.devData){
      if (projects.length() === 0) {
        let arr = JSON.parse(localStorage.devData);
        arr.forEach(function(load){
          projects.push(new Project (load));
        })
        Project.renderToPage();
      }
      else {
        Project.renderToPage();
      }
    }
    else {
      $.get('/data/thedata.json', Project.fillTheStuff(arr));
    }
  }

  Project.fillTheStuff = function(response){
    localStorage.setItem('devData', JSON.stringify(response));
    response.forEach(function(fill){
      projects.push(new Project(fill));
    });
    Project.renderToPage();
  }

  Project.renderToPage = function(arr){
    $('#projects').empty();
    projects.forEach(function(projectList){
      $('#projects').append(projectList.toHtml());
    });
  }

  module.Project = Project

})(app);
