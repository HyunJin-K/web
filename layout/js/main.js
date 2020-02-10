/* [P] Index */
$(function(){
    var $sideMenu = $(".main_sd");
    var $menuBtn = $(".main_mn_bt");

    // Menu side Layer
    $menuBtn.on("click", function(e){
        e.preventDefault();
        $sideMenu.fadeIn();
        $("html").addClass("scroll_fix");
    });
    $sideMenu.find(".bt_clse").on("click", function(){
        $sideMenu.fadeOut();
        $("html").removeClass("scroll_fix");
    });
});