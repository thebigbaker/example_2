$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  
  // Nav
  $(".button-collapse").sideNav();

  // Testimonial Slider
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  // Scrollspy
  $('.scrollspy').scrollSpy();
});