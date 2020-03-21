$(function(){
    /* Swiper Slider */
    // Main Banner Slider
    var swiper_MainBanner = new Swiper('#slideBanner', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 추천상품 Slider
    var swiper_Recmmend = new Swiper('#Recommand01, #Recommand02', {
        slidesPerView: 'auto',
        observer: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });

    // 홈쇼핑 반영 상품 Slider
    var swiper_Shopping = new Swiper('#slideShopping', {
        pagination: {
            el: '.swiper-pagination'
        }
    });

    // 리뷰 Slider
    var swiper_Shopping = new Swiper('##slideReview', {
        pagination: {
            el: '.swiper-pagination'
        }
    });

    // 이벤트 Slider
    var swiper_Shopping = new Swiper('#slideEvent', {
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
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

    // Side Menu
    $(".yb_hg_mn .bt_ctg").on("click", function(){
        var Layer = $(this).attr("href");
        $(Layer).addClass("is_opn");
        $("html").addClass("scroll_fix");
    });

    $(".yb_ag .bt_clse").on("click", function(){
        $(this).parents(".yb_ag").removeClass("is_opn");
        $("html").removeClass("scroll_fix");
    });

    $(".yb_ag_cg .ctg a").on("click", function(e){
        e.preventDefault();
        $(".yb_ag_cg .ctg li").removeClass("is_on");
        $(this).parent("li").addClass("is_on");
    });

    $(".yb_ag_cg .ctg a").on("click", function(){
        var Layer = $(this).attr("href");
        $(Layer).show().siblings("div[role='tabpanel']").hide();
    });
});

// Loading
$(window).on("load", function(){
    setTimeout(
        function(){
            $(".yb_loading").fadeOut().removeClass("is_on");
            $("html").removeClass("scroll_fix");
        }, 500
    );
});