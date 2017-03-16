'use strict';
(function () {

    getCategoryStory();

    $(".owl-carousel-story").attrchange( {
        trackValues: true,
        callback: function (object) {
            var category = object.newValue;
            console.log(category);
        }
    });
}());


function getCategoryStory() {

    var target = $(".story-category");
    $.getJSON( "data/story.json", function( data ) {

        $.each( data.categories, function( key, val ) {
            target.append( "<li><span>"+val.title+"</span></li>" );

        });
        
        $('.story-category li').click(function () {
            var text = $(this).find("span").text();
            $('.story-category li').removeClass('active');
            $(this).addClass('active');

        });
    });
}

function getStoryImage(type) {
    $.getJSON( "data/"+type+".json", function( data ) {
        $.each( data.slides, function( key, val ) {
            target.append( "<div>" );
        });
    });
}