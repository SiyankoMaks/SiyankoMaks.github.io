var document;
var $;

jQuery(function ($) {
    $(document).ready(function () {
        $(".sliders").slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ],
            slidesToScroll: 2,
            slidesToShow: 4
        });
    });
});