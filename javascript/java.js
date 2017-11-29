$(document).ready(function() {


  $('.cercle-middle').on('click', function() {
    $(this).toggleClass('cercle-when-clicked');
    $('.left').toggleClass('all-screen-width');
    $('#hidden-text-menu').toggleClass("hidden-for-js");
    $('#hidden-text-menu').toggleClass("show");
    $('.texte').toggleClass("hidden-for-js");
    $('.texte').toggleClass("show");

});
    });



