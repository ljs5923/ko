jQuery(function ($) {
    // main js start
    //nav event start
    $('._main_lst li a').on('mouseenter', function () {
        $('#_header').stop().animate({
            height: 336
        }, 400);
        $('#_header').addClass('_active');
        $('._main_dept').addClass('_active');
        $('._logo_img').addClass('_active');
        $('._logo_img').addClass('_active');
        $('._siteMap .fa-bars').addClass('_active');
    });
    $('#_header').on('mouseleave', function () {
        $('#_header').stop().animate({
            height: 86
        }, 400, function () {
            $(this).removeClass('_active');
            $('._main_dept').removeClass('_active');
            $('._logo_img').removeClass('_active');
            $('._siteMap .fa-bars').removeClass('_active');
        });
    });
    $('._main_lst_dept').hover(
        function () {
            var mainlstIndex = $(this).index();
            $(this).find('span').addClass('_active');
            $('._sub_lst').eq(mainlstIndex).addClass('_active');
        },
        function () {
            var mainlstIndex = $(this).index();
            $(this).find('span').removeClass('_active');
            $('._sub_lst').eq(mainlstIndex).removeClass('_active');
        }
    );
    $('._sub_lst_dept a').hover(
        function () {
            $(this).addClass('_active');
        },
        function () {
            $(this).removeClass('_active');
        }
    );
    //nav event end    
    //FAMILY SITE open start
    $('._btn_familysite_open').on('click', function () {
        $('._footer_bottom_familysite_container').fadeToggle(500, function () {
            $('._familysite_title').toggleClass('active');
        });
        $('._btn_familysite_icon').toggleClass('_cancle');
    })
    //FAMILY SITE open end
}); //jQuery End
