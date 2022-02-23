$(function() {
    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img href="#" src="images/arrow_left.svg" alt=""></a></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img href="#" src="images/arrow_right.svg" alt=""></a></button>',
    });

    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
    });
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });
});

$('.open__popup').click(function(e) {
    e.preventDefault()
    $('.popup__bg').fadeIn(600);
})

$('.close__popup').click(function() {
    $('.popup__bg').fadeOut(600);
})