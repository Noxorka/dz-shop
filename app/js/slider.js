var slider = (function () {
    //privet metod

    return {
        init: function () {
            var _this = this;

            $('.slider__controls--button').on('click', function(e) {
                e.preventDefault();

                var
                    $this = $(this),
                    slides = $this.closest('slider').find('.slider__item'),
                    activeSlide = slides.filter('.slider--activ'),
                    nextSlider = activeSlide.next(),
                    prevSlider = activeSlide.prev(),
                    firstSlide = slides.first(),
                    lastSlide = slides.last();

                if ($('.slider__controls--button_next ')) {
                    _this.moveSlide(nextSlider, 'forward');
                }
            });
        },
        /*function move slide*/
        moveSlide: function(slide, derection) {
            var
                container = slide.closest('.slider'),
                slides = container.find('.slider__item'),
                activeSlide = slides.filter('.slider--activ'),
                slideWidth = slides.width(),
                duration = 500,
                reqCssPosition = 0,
                reqSlideStrafe = 0;

            if (direction === 'forward') {
                reqCssPosition = slideWidth;
                reqSlideStrafe = -slideWidth;

            } else if (direction === 'backward') {
                reqCssPosition = -slideWidth;
                reqSlideStrafe = slideWidth;
            }

            slide.css('left', reqCssPosition).addClass('inslide');

            var movableSlide = slides.filter('.inslide');
            activeSlider.animate({left: reqSlideStrafe}, duration);
            movableSlide.animate({left:0}, duration, function() {
                var $this = $(this);

                slides.css('left', '0').removeClass('slider--activ');

                $this.toggleClass('inslide slider--activ');
            });

        }
    }
}());



var scroll = (function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}());


$(document).ready(function () {
    if($('.slider').length) {
        slider.init();
    }
    if($('#scroll').length) {
        scroll.init();
    }

    if (!Modernizr.input.placeholder){
        $('input, textarea').placeholder();
    }
});