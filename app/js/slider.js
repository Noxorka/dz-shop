var slider = (function () {
    //privet metod

    return {
        init: function () {
            var _this = this;

            $('.slider__controls--button').on('click', function(e) {
                e.preventDefault();

                var
                    $this = $(this),
                    slider = $this.closest('slider').find('.slider__item'),
                    activeSlider = slider.filter('.slider--activ'),
                    nextSlider = activeSlider.next(),
                    prevSlider = activeSlider.prev(),
                    firstSkider = slider.first(),
                    lastSlider = slider.last();

                if ($('.slider__controls--button_next ')) {
                    _this.moveSlide(nextSlider, 'forward');
                }
            });
        },
        /*function move slide*/
        moveSlide: function(slide, derection) {
            var
                container = slide.closest('.slider'),
                slider = container.find('.slider__item'),
                active = slider.filter('.slider--activ'),
                slideWidth = slider.width(),
                duration = 500,
                reqCssPosition = 0,
                reqSlideStrafe = 0;

            if (derection === 'forward') {
                reqCssPosition = -slideWidth;
                reqSlideStrafe = slideWidth;
            } else if (derection === 'backward') {
                reqCssPosition = slideWidth;
                reqSlideStrafe = - slideWidth;
            }

            slide.css('left',reqCssPosition).addClass('inlide')
        }
    }
}());

$(document).ready(function () {
    if($('.slider').length) {
        slider.init();
    }
});