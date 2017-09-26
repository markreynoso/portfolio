'use strict';

page('/', homePage);
page('/portfolio', portfolioPage);
page('/experience', experiencePage);
page();

function homePage(){
  $('[data-type="about"]').css({display: 'block'});
  $('[data-type="portfolio"]').css({display: 'none'});
  $('[data-type="experience"]').css({display: 'none'});
}

function portfolioPage(){
  sneakyPete.onLoadPage();
  $('[data-type="about"]').css({display: 'block'});
  $('[data-type="portfolio"]').css({display: 'none'});
  $('[data-type="experience"]').css({display: 'none'});
}

function experiencePage(){
  $('[data-type="about"]').css({display: 'block'});
  $('[data-type="portfolio"]').css({display: 'none'});
  $('[data-type="experience"]').css({display: 'none'});
}
