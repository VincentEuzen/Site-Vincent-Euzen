$(document).ready(function() {


  $('.cercle-middle').on('click', function() {
    $(this).toggleClass('cercle-when-clicked');
    // if ($(this).hasClass('cercle-when-clicked')) {
    //   $(this).removeClass('cercle-when-clicked').removeClass('cercle-middle').addClass('cercle-when-clicked-return');
    // } else {
    //   $(this).removeClass('cercle-middle').addClass('cercle-when-clicked');
    // }
    $('.left').toggleClass('all-screen-width');
    $('#hidden-text-menu').toggleClass("hidden-for-js");
    $('#hidden-text-menu').toggleClass("show fadeInNew");
    $('.texte').toggleClass("hidden-for-js");
    $('.texte').toggleClass("show");
    });


    $('.ancre-about').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
      });



});



