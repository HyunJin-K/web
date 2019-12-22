// [C] Layer Open
var $layerID;
$("a[href^='#layer'").on("click", function(e){
    e.preventDefault();
    $layerID = $(this).attr("href");
    $($layerID).toggle();
});

// Nav
var $nav = $(".tvn_hg_nv");
var $navMenu = $(".tvn_hg_nv .nv_lst");
var $navMenuList = $navMenu.find("> li");
var $nvDetail = $navMenu.find(".nv_dtl");
var nvHeight = $nav.height();
var $nvDetailNow;

$navMenuList.on("mouseenter", function(){
    $nvDetailNow = $(this).find(".nv_dtl");
    $(this).addClass("is_on").siblings().removeClass("is_on");
    $nvDetail.hide();
    
    // Detail 메뉴 유무에 따른 nav조정
    if($(this).attr("data-nav") == "detail"){
        $nav.addClass("is_opn");
        $nav.stop().animate({
            "height" : $nvDetailNow.outerHeight() + 55
        }, 200);
        $nvDetailNow.show();
    }else{
        $nav.removeClass("is_opn");
        $nav.stop().animate({
            "height" : 55
        }, 200);
    }
})
$nav.on("mouseleave", function(){
    $navMenuList.removeClass("is_on");
    $nav.removeClass("is_opn");
    $nav.stop().animate({
        "height" : 55
    }, 200);
});

// Content
var $shortcutBtn = $(".tvn_etc_fml .bt");

$shortcutBtn.on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("is_on");
});


$('#slideBanner').slick({
    infinite : true,
    autoplay : true,
    dots : true
  });