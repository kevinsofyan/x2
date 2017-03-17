/**
 * Created by kevinsofyan on 3/8/17.
 */
'use strict';
$(document).ready(function () {

    /* carousel */
    $('.carousel').carousel({
        interval: 3000
    });
    $('.carousel').carousel('cycle');

    $('.owl-carousel-feature').owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.owl-carousel-testimonial').owlCarousel({
        items: 4,
        loop: true
    });
    $('.owl-carousel-story').owlCarousel({
        items: 1,
        loop: true
    });
    $('.owl-carousel-banner').owlCarousel({
        items: 1,
        loop: true,
        responsive:false
    });

    $('.story-category li').click(function () {
        var target = $(this).attr("data-target");
        var text = $(this).find("span").text();
        $('.story-category li').removeClass('active');
        $(this).addClass('active');
        $('.stories').find('.owl-carousel-story').addClass("hidden");
        $(target).removeClass("hidden");
    });

    $('.navbar-nav li').click(function () {
        var body = $("html, body");
        var target = $(this).find("a").attr("href");
        var height = $(target).offset().top;
        body.stop().animate({scrollTop: height -40}, '500', 'swing', function() {
        });
    })

    $('.nav a').on('click', function(){
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    });

});