$(document).ready(function() {


  $('.cercle-middle').on('click', function() {
    $(this).toggleClass('cercle-when-clicked');
    // if ($(this).hasClass('cercle-when-clicked')) {
    //   $(this).removeClass('cercle-when-clicked').removeClass('cercle-middle').addClass('cercle-when-clicked-return');
    // } else {
    //   $(this).removeClass('cercle-middle').addClass('cercle-when-clicked');
    // }
    $('.left').toggleClass('all-screen-width');
    // $('.cercle-middle-fin').toggleClass('cercle-middle-fin-extend');
    // $('#img-semi-cercle').toggleClass('img-semi-cercle-extend');
    $('#hidden-text-menu').toggleClass("hidden-for-js");
    $('#hidden-text-menu').toggleClass("show fadeInNew");
    $('.texte').toggleClass("hidden-for-js");
    $('.texte').toggleClass("show");
  });

  // $('.cercle-middle').on('hover', function() {
  //   $(this).toggleClass('box-hover');




});

$(document).ready(function() {

$('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
  });




});


$(document).ready(function() {

$('.box-test-1').hover(function(){
    $('.text-box').toggleClass('text-box-hover');
  });

$('.box-test-1').hover(function(){
    $('.btn-box').toggleClass('btn-box-hover');
  });


$('.box-test-1').hover(function(){
    $('.img-bg').toggleClass('img-bg-hover');
  });

$('.box-test-2').hover(function(){
    $('.text-box-2').toggleClass('text-box-hover-2');
  });

$('.box-test-2').hover(function(){
    $('.btn-box-2').toggleClass('btn-box-hover-2');
  });


$('.box-test-2').hover(function(){
    $('.img-bg-2').toggleClass('img-bg-hover-2');
  });

$('.box-test-3').hover(function(){
    $('.text-box-3').toggleClass('text-box-hover-3');
  });

$('.box-test-3').hover(function(){
    $('.btn-box-3').toggleClass('btn-box-hover-3');
  });


$('.box-test-3').hover(function(){
    $('.img-bg-3').toggleClass('img-bg-hover-3');
  });


$('.box-test-4').hover(function(){
    $('.text-box-4').toggleClass('text-box-hover-4');
  });

$('.box-test-4').hover(function(){
    $('.btn-box-4').toggleClass('btn-box-hover-4');
  });


$('.box-test-4').hover(function(){
    $('.img-bg-4').toggleClass('img-bg-hover-4');
  });
});


$(document).ready(function () {
    $('.all-screen-top').mousemove(function (e) {
        parallax(e, document.getElementById('pic-hole'), 1);
        parallax(e, document.getElementById('pic-me'), 2);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width ()) / 3 - (e.pageX - ($(window).width())) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};
