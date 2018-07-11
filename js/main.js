jQuery(function ($) {
    $('._main_lst li a').on('mouseenter',function () {
        $('#_header').stop().animate({
            height: 336
        },400);
    });
    $('#_header').on('mouseleave',function () {
        $('#_header').stop().animate({
            height: 86
        },400);
    }); //메뉴슬라이드 이벤트
    $w=$(window).height();
    $('#_main_slide').css("height",$w);
    //메인 슬라이드 높이 설정
    //mainslide Strat
    var mainSlide=$('._slide_img').bxSlider({
        mode: 'fade',
        speed: 2000,
        control: false,
        pager: false,
        auto: true,
        autoControls: true,
        autoControlsCombine: true,
        autoControlsSelector: $('._start_pause'),
        prevSelector: $('._prev'),
        nextSelector: $('._next'),
        onSlideAfter: function () {
            no=mainSlide.getCurrentSlide();
            ++no;
            $('._current').text("0" + no);
        }
    });
    //mainslide end
    //content2 slide img start
    var prevTextNo=3;
    var nextTextNo=3;
    var prevpx=0;
    var nextpx=0;
    $('._content1_prev').on('click',function () {
        prevContentText();
        prevContentImgSlide();
    });
    $('._content1_next').on('click',function () {
        nextContentText();
        nextContentImgSlide();
    });
    function prevContentText() {
        if (prevTextNo==3) {
            $('._text' + (prevTextNo - 2)).fadeOut(1000);
            $('._text' + (prevTextNo)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (prevTextNo));
            --prevTextNo;
            nextTextNo=1;
        } else if (prevTextNo==2) {
            $('._text' + (prevTextNo + 1)).fadeOut(1000);
            $('._text' + (prevTextNo)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (prevTextNo));
            --prevTextNo;
            nextTextNo=2;
        } else {
            $('._text' + (prevTextNo + 1)).fadeOut(1000);
            $('._text' + (prevTextNo)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (prevTextNo));
            prevTextNo=3;
            nextTextNo=3;
        }
    }
    function prevContentImgSlide() {
        if (prevpx==1) {
            $('._slideimg4').stop().animate({
                left: 2090
            },1000)
            $('._slideimg5').css({
                left: -2370
            })
            $('._slideimg6').css({
                left: -1580
            })
            $('._slideimg1').stop().animate({
                left: -790
            },1000);
            $('._slideimg2').stop().animate({
                left: 0
            },1000);
            $('._slideimg3').stop().animate({
                left: 1300
            },1000);
            ++prevpx;
            nextpx=4;
        } else if (prevpx==2) {
            $('._slideimg4').css({
                left: -2370
            })
            $('._slideimg5').css({
                left: -1580
            })
            $('._slideimg6').stop().animate({
                left: -790
            },1000)
            $('._slideimg1').stop().animate({
                left: 0
            },1000);
            $('._slideimg2').stop().animate({
                left: 1300
            },1000);
            $('._slideimg3').stop().animate({
                left: 2090
            },1000);
            ++prevpx;
            nextpx=3;
        } else if (prevpx==3) {
            $('._slideimg4').css({
                left: -1580
            })
            $('._slideimg5').stop().animate({
                left: -790
            },1000)
            $('._slideimg6').stop().animate({
                left: 0
            },1000)
            $('._slideimg1').stop().animate({
                left: 1300
            },1000);
            $('._slideimg2').stop().animate({
                left: 2090
            },1000);
            $('._slideimg3').css({
                left: -2370
            });
            ++prevpx;
            nextpx=2;
        } else if (prevpx==4) {
            $('._slideimg4').stop().animate({
                left: -790
            },1000)
            $('._slideimg5').stop().animate({
                left: 0
            },1000)
            $('._slideimg6').stop().animate({
                left: 1300
            },1000)
            $('._slideimg1').stop().animate({
                left: 2090
            },1000);
            $('._slideimg2').css({
                left: -2370
            });
            $('._slideimg3').css({
                left: -1580
            });
            ++prevpx;
            nextpx=1;
        } else if (prevpx==5) {
            $('._slideimg4').stop().animate({
                left: 0
            },1000)
            $('._slideimg5').stop().animate({
                left: 1300
            },1000)
            $('._slideimg6').stop().animate({
                left: 2090
            },1000)
            $('._slideimg1').css({
                left: -2370
            });
            $('._slideimg2').css({
                left: -1580
            });
            $('._slideimg3').stop().animate({
                left: -790
            },1000);
            prevpx=0;
            nextpx=0;
        } else {
            $('._slideimg4').stop().animate({
                left: 1300
            },1000)
            $('._slideimg5').stop().animate({
                left: 2090
            },1000)
            $('._slideimg6').css({
                left: -2370
            })
            $('._slideimg1').css({
                left: -1580
            });
            $('._slideimg2').stop().animate({
                left: -790
            },1000);
            $('._slideimg3').stop().animate({
                left: 0
            },1000);
            ++prevpx;
            nextpx=5;
        }
    }
    function nextContentText() {
        if (nextTextNo==3) {
            $('._text' + (nextTextNo - 2)).fadeOut(1000);
            $('._text' + (nextTextNo - 1)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (nextTextNo - 1));
            --nextTextNo;
            prevTextNo=1;
        } else if (nextTextNo==2) {
            $('._text' + (nextTextNo)).fadeOut(1000);
            $('._text' + (nextTextNo + 1)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (nextTextNo + 1));
            --nextTextNo;
            prevTextNo=2;
        } else {
            $('._text' + (nextTextNo + 2)).fadeOut(1000);
            $('._text' + (nextTextNo)).fadeIn(1000);
            $('._contnet1_count_area ._cureent_no').text("0" + (nextTextNo));
            nextTextNo=3;
            prevTextNo=3;
        }
    }
    function nextContentImgSlide() {
        if (nextpx==1) {
            $('._slideimg4').stop().animate({
                left: -1580
            },1000)
            $('._slideimg5').stop().animate({
                left: -790
            },1000)
            $('._slideimg6').stop().animate({
                left: 0
            },1000)
            $('._slideimg1').stop().animate({
                left: 1300
            },1000);
            $('._slideimg2').css({
                left: 2090
            });
            $('._slideimg3').css({
                left: -2370
            });
            ++nextpx;
            prevpx=4;
        } else if (nextpx==2) {
            $('._slideimg4').css({
                left: -2370
            })
            $('._slideimg5').stop().animate({
                left: -1580
            },1000)
            $('._slideimg6').stop().animate({
                left: -790
            },1000)
            $('._slideimg1').stop().animate({
                left: 0
            },1000);
            $('._slideimg2').stop().animate({
                left: 1300
            },1000);
            $('._slideimg3').css({
                left: 2090
            });
            ++nextpx;
            prevpx=3;
        } else if (nextpx==3) {
            $('._slideimg4').css({
                left: 2090
            })
            $('._slideimg5').css({
                left: -2370
            })
            $('._slideimg6').stop().animate({
                left: -1580
            },1000)
            $('._slideimg1').stop().animate({
                left: -790
            },1000);
            $('._slideimg2').stop().animate({
                left: 0
            },1000);
            $('._slideimg3').stop().animate({
                left: 1300
            },1000);
            ++nextpx;
            prevpx=2;
        } else if (nextpx==4) {
            $('._slideimg4').stop().animate({
                left: 1300
            },1000)
            $('._slideimg5').css({
                left: 2090
            })
            $('._slideimg6').css({
                left: -2370
            })
            $('._slideimg1').stop().animate({
                left: -1580
            },1000);
            $('._slideimg2').stop().animate({
                left: -790
            },1000);
            $('._slideimg3').stop().animate({
                left: 0
            },1000);
            ++nextpx;
            prevpx=1;
        } else if (nextpx==5) {
            $('._slideimg4').stop().animate({
                left: 0
            },1000)
            $('._slideimg5').stop().animate({
                left: 1300
            },1000)
            $('._slideimg6').css({
                left: 2090
            })
            $('._slideimg1').css({
                left: -2370
            });
            $('._slideimg2').stop().animate({
                left: -1580
            },1000);
            $('._slideimg3').stop().animate({
                left: -790
            },1000);
            nextpx=0;
            prevpx=0;
        } else {
            $('._slideimg4').stop().animate({
                left: -790
            },1000)
            $('._slideimg5').stop().animate({
                left: 0
            },1000)
            $('._slideimg6').stop().animate({
                left: 1300
            },1000)
            $('._slideimg1').css({
                left: 2090
            });
            $('._slideimg2').css({
                left: -2370
            });
            $('._slideimg3').stop().animate({
                left: -1580
            },1000);
            ++nextpx;
            prevpx=5;
        }
    }
    //content2 slide img End
    //content3 slide img start
    var content3Index=0    
}); //jQuery End
