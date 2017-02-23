$(document).ready(function(){

// responsive menu
$('header nav').meanmenu();
    

// --------------------- sticky navigation ---------------------- \\   
var stickyNavTop = $('nav').offset().top; //console.log(stickyNavTop);
var stickyNav = function(){
    
    var scrollTop = $(window).scrollTop(); //console.log(scrollTop);

    if (scrollTop > stickyNavTop) { 
          $('nav').addClass('sticky');
        } else {
          $('nav').removeClass('sticky'); 
        }
};
stickyNav();
$(window).scroll(function() {
    //console.log(stickyNav());
    stickyNav();
});    
// ---------END---------- sticky navigation -----------END--------- \\      
    
    
$("#info table tr:odd").css({
    backgroundColor: "#C0C0C0",
});
    

// ------------------- navigate --------------------- \\

$("nav ul li a").click(function(){
    var nav = $(this).html().toLowerCase();
    var posToScroll = $("#"+nav).offset().top;
    
    $("html, body").animate({
        scrollTop: posToScroll-40
    }, 1000, "linear");        
        
});
    
//resonsive nav   
$(".mean-nav ul li a").click(function(){
    var nav = $(this).html().toLowerCase();
    var posToScroll = $("#"+nav).offset().top;
    
    $("html, body").animate({
        scrollTop: posToScroll-40
    }, 1000, "linear");        
        
});
    
    
    
// portfolio images
var imagesWork = ["kzm1", "kzm2", "kzm3", "kzm4", "kzm5", "kzm6"];
for(var i in imagesWork){
    $("#portfolio").append('<a class="example-image-link" rel="group" data-lightbox="example-1" ' + 
                           'href="images/projekti/kzm/img/'+imagesWork[i]+'.jpg">'+
                           '<img src="images/projekti/kzm/thumbs/'+imagesWork[i]+'.jpg" alt="ps" class="example-image"></a>');
}
    
    
});
