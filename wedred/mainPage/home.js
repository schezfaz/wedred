$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').addClass('fixed');
          }
          else {
              $('nav').removeClass('fixed');
          }
     });
 });


//slideshow

$(function(){
    setInterval(function(){
       $(".slideshow1 ul").animate({marginLeft:-550},800,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 2000);
 });


 //slideshow for photomoments
 