$("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
        $(this_li).children('a').addClass("arrow_link");
    }
});

$(".search_call").on("click", function() {
    $(".search_form").toggleClass("search_form_active");
});

$(".arrow_mob").on("click", function() {
    $(this).toggleClass("arr_active");
    $(this).siblings(".sub_menu").slideToggle(200);
});

$(".sub_menu .arrow_mob").on("click", function() {
    $(this).siblings(".sub_menu_2").slideToggle(200);
});

$(".call_menu").on("click", function() {
    $(".header_nav").toggleClass("header_nav_active");
});

$(".close_menu").on("click", function() {
    $(".header_nav").removeClass("header_nav_active");
});

$(".call_lang").on("click", function() {
    $(".select_lang_wrap").slideToggle(200);
    $(".header_nav ul").toggle();
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

var year = new Date().getFullYear();
$(".year").text(year);

$('.faq_wrap .acc_head').on('click', function() {
    $('.faq_wrap .acc_body').not($(this).next()).slideUp(150).parent().removeClass("active_acc");
    $(this).next().slideToggle(150).parent().toggleClass('active_acc');
});

$(".show_more").on("click", function() {
    $(this).siblings(".hide_text").addClass("hide_text_active");
    $(this).remove();
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.generate_casino_tab').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


const swiper = new Swiper('.swiper_casino', {
    loop: true,
    centerInsufficientSlides: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 4500,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    },
    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right_slider',
        prevEl: '.left_slider',
    },
});

$(".call_hide_item").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active_link");
    $(this).parent().parent().siblings(".item_hide_wrap").slideToggle(200);
});