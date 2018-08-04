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
    //scroll event start
    $('._scroll_top').on('click', function () {
        var wintop = $('html,body').offset().top;
        $('html,body').animate({
            'scrollTop': wintop
        }, 500, 'swing');
    });
    $(window).on('scroll', function () {
        var winST = $(window).scrollTop();
        var content1Top = $('#_company_content').offset().top;
        if (content1Top > winST) {
            $('._scroll_top').fadeOut();
        } else {
            $('._scroll_top').fadeIn().css("bottom", 100);
        }
    });
    //scroll event end
    //FAMILY SITE open start
    $('._btn_familysite_open').on('click', function () {
        $('._footer_bottom_familysite_container').fadeToggle(500, function () {
            $('._familysite_title').toggleClass('active');
        });
        $('._btn_familysite_icon').toggleClass('_cancle');
    })
    //FAMILY SITE open end
    //company_information_header event start
    $(window).on('scroll', function () {
        var winHT = $(window).scrollTop();
        var headerTopH = $('._header_top').height();
        if (winHT >= headerTopH) {
            $('._header_down').addClass('_fixed');
        } else {
            $('._header_down').removeClass('_fixed');
        }
    });
    //company_information_header event end
    //_btn_area event start
    $('._tab_area ._lsts ._lst').hover(
        function () {
            $(this).find('._lst_btn').addClass('_active');
        },
        function () {
            $(this).find('._lst_btn').removeClass('_active');
        }
    )
    //_btn_area event end
    //_tab_radio_area event start
    $('._tab_radio_area ul li button').hover(
        function () {
            $(this).find('span').addClass('_active');
        },
        function () {
            $(this).find('span').removeClass('_active');
        }
    )
    //_tab_radio_area event end
    //grid _cont_txt event start
    $('.grid-item').hover(
        function () {
            $(this).find('._cont_txt').addClass('_active');
        },
        function () {
            $(this).find('._cont_txt').removeClass('_active');
        }
    )
    //grid _cont_txt event end
    //grid event start
    var $gird = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 282,
        gutter: 24
    });
    $gird.imagesLoaded().progress(function () {
        $gird.masonry('layout');
    })
    var moreIndex = 1
    var gridIndex = Math.ceil($('grid-item').length / 8);
    $('._btn_more').on('click', function () {
        for (i = 0; i < 8; i++) {
            $('.grid-item').eq(i + (moreIndex * 8)).fadeIn();
        }
        $gird.masonry('layout');
        if (gridIndex == moreIndex) {
            return false;
        }
        ++moreIndex;
    })
    //grid event end
}); //jQuery End
