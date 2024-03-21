// owl carousel 
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });
});
// waypoints
/*
$(".sticky-nav-menu").waypoint(function(direction){
    if( direction =="down"){
    $("nav").addClass("sticky");
    }
    else{
    	$("nav").removeClass("sticky");
    }

// }); */
// wow animation
new WOW().init();

// ScrollUp button
const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', () => {
	if(window.pageYOffset > 300){
		scrollUp.classList.add('active');
	}
	else{
		scrollUp.classList.remove('active');
	}
});

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
