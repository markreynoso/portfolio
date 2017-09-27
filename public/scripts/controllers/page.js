'use strict';

page('/', homePage);
page('/portfolio', portfolioPage);
page('/experience', experiencePage);
page();

function homePage(){
  $('[data-type="about"]').show();
  $('[data-type="portfolio"]').hide();
  $('[data-type="experience"]').hide();
}

function portfolioPage(){
  app.Project.onLoadPage();
  $('[data-type="about"]').hide();
  $('[data-type="portfolio"]').show();
  $('[data-type="experience"]').hide();
}

function experiencePage(){
  $('[data-type="about"]').hide();
  $('[data-type="portfolio"]').hide();
  $('[data-type="experience"]').show();
}
