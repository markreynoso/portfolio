'use strict';

page('/', homePage);
page('/portfolio', portfolioPage);
page('/design', designPage);
page();

function homePage(){
  $('[data-type="about"]').show();
  $('[data-type="portfolio"]').hide();
  $('[data-type="design"]').hide();
}

function portfolioPage(){
  app.Project.onLoadPage();
  $('[data-type="about"]').hide();
  $('[data-type="portfolio"]').show();
  $('[data-type="design"]').hide();
}

function designPage(){
  $('[data-type="about"]').hide();
  $('[data-type="portfolio"]').hide();
  $('[data-type="design"]').show();
}
