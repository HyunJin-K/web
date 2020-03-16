$(function(){
    /* Slick Slider */
    // Main Banner
    $("#slideBanner").on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
    });
    $("#slideBanner").slick({
        autoplay: true,
        autoplaySpeed : 7000,
        arrows: false,
        touchThreshold: 30
    }).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
    });

    // 추천상품
    $(".yb_itms > section").slick({
        infinite: false,
        variableWidth: true,
        touchThreshold: 30,
        arrows: false,
        centerMode: true
    });

    // 홈쇼핑 방영상품, 이벤트, 고객 후기
    $("#slideShopping, #slideEvent, #slideReview").slick({
        infinite: false,
        dots: true,
        arrows: false,
        touchThreshold: 30
    });

    // Layer Open
    $(".yb_bnr .bt_mr").on("click", function(e){
        e.preventDefault();
        var Layer = $(this).attr("href");
        $(Layer).show();
        $("html").addClass("scroll_fix");
    });
    $(".ly_allbnr .bt_clse").on("click", function(){
        $(this).parents(".ly_allbnr").hide();
        $("html").removeClass("scroll_fix");
    });

    // Tab
    $("a[role='tab']").on("click", function(e, $tabon){
        $(this).addClass("is_on").siblings().removeClass("is_on");

        e.preventDefault();
        var nowTab = $(this).attr("href");
        $(nowTab).show().siblings("[role='tabpanel']").hide();
    });
});

// Loading
$(window).on("load", function(){
    setTimeout(
        function(){
            $(".yb_loading").fadeOut();
            $("html").removeClass("scroll_fix");
        }, 500
    );
});