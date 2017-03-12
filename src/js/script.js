/**
 * Created by kevinsofyan on 3/8/17.
 */
'use strict';
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });

    $('.carousel').carousel('cycle');

    $('.owl-carousel').owlCarousel({
        items: 4,
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

    $('.story-category li').click(function () {
        alert('anjing');
        $('.story-category li').removeClass('active');
        $(this).addClass('active');
    });

});