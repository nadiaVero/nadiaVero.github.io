$(function(){
// var header = document.getElementById('header');
// var headroom= new Headroom(header);
// headroom.init();

var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

/*Menu responsive*/

var ancho = $(window).width(),
    enlaces = $('#enlaces'),
    btnmenu = $('#btn-menu'),
    icono = $('#btn-menu .icono');

    if(ancho < 700){
        enlaces.hide();
        icono.addClass('fa-bars');
    }
    btnmenu.on('click' , function(e){
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');

    });

    $(window).on('resize' , function(){
        if($(this).width() > 700){
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');

        }else
        {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');

        }
    })





});


