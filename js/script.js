$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['0', '1', '2', '3', '4', '5', '6', '7'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) {
        },
        afterLoad: function (anchorLink, index) {
        },
        afterRender: function () {
        },
        afterResize: function () {
        },
        afterResponsive: function (isResponsive) {
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        }
    });

    var owl = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navContainer: $('.burger-slider__controls'),
        navText: ['', '']
    });

    $('.burger-slider__btn_next').on('click', function (e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });

    $('.burger-slider__btn_prev').on('click', function (e) {
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    })

    //horizontal accordion
    $(function(){
        $('.menu-acco__trigger').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                container = $this.closest('.menu-acco'),
                item = $this.closest('.menu-acco__item'),
                items = container.find('.menu-acco__item'),
                activeItem = items.filter('.active'),
                content = item.find('.menu-acco__content'),
                activeContent = activeItem.find('.menu-acco__content');

            if (!item.hasClass('active')) {

                items.removeClass('active');
                item.addClass('active');

                activeContent.animate({
                    'width' : '0px'
                });

                content.animate({
                    'width' : '550px'
                });

            } else {

                item.removeClass('active');
                content.animate({
                    'width' : '0px'
                });

            }
        });

        // клик вне аккордеона
        $(document).on('click', function (e) {
            var $this = $(e.target);

            if (!$this.closest('.menu-acco').length) {
                $('.menu-acco__content').animate({
                    'width' : '0px'
                });

                $('.menu-acco__item').removeClass('active');
            }
        });
    });

    //accordion
    $(function () {
        $('.team-acco__trigger').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                item = $this.closest('.team-acco__item'),
                container = $this.closest('.team-acco'),
                items = container.find('.team-acco__item'),
                content = item.find('.team-acco__content'),
                otherContent = container.find('.team-acco__content');

            if (!item.hasClass('team-acco__item_active')) {
                items.removeClass('team-acco__item_active');
                item.addClass('team-acco__item_active');
                otherContent.slideUp();
                content.slideDown();
            } else {
                item.removeClass('team-acco__item_active');
                content.slideUp();
            }
        });
    });
});