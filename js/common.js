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
    $(".header_nav ul").slideToggle(200);
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