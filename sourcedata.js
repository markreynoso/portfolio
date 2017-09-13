'use strict';
var projects = [];

function Project (title, link, img, year, client, type) {
  this.title = title;
  this.link = link;
  this.img = img;
  this.year = year;
  this.client = client;
  this.type = type;
  projects.push(this);
}

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

new Project ('Procrasinator Generator', 'https://willjreid.github.io/procrastinate/quiz.html', 'images/procrastinate.png', '2017', 'Code Fellows', 'website');
new Project ('Bus Mall', 'https://markreynoso.github.io/bus-mall/', 'images/busmall.png', '2017', 'Code Fellows', 'website');
new Project ('Salmon Cookies', 'https://markreynoso.github.io/cookie-stand/', 'images/salmoncookies.png', '2017', 'Code Fellows', 'website');
