/**
 * Created by kevinsofyan on 3/8/17.
 */
'use strict';
$(document).ready(function () {

    $("[data-fancybox]").fancybox({
        // Options will go here
    });

    /* carousel */
    $('.carousel').carousel({
        interval: 3000
    });
    $('.carousel').carousel('cycle');

    $('.owl-carousel-feature').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
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
        loop: true
    });

});