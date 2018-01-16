'use strict';
var design = [];

function Design (data) {
  this.title = data.title;
  this.img = data.img;
  this.description = data.description;
  this.contribution = data.contribution;
  this.used = data.used;
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
