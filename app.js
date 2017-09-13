function Project (url, img, year, hrs, client, type, title) {
  this.url = url;
  this.img = img;
  this.year = year;
  this.hrs = hrs;
  this.client = client;
  this.type = type;
  this.title = title;
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
// $(function(){
$('.btn').click(function(){
  $('#nav').toggleClass('toggle');
});
// });
$('.list').click(function(){
  $('#nav').togggleClass('toggle');
});
