$(document).ready(function(){
    $('.slider__list').bxSlider({
        auto:true
    });

    $('select').styler();
});


$(document).ready(function () {

    if (!Modernizr.input.placeholder){
        $('input, textarea').placeholder();
    }
});