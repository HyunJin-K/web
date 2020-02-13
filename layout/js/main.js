/* [P] Index */
$(function(){
    var $sideMenu = $(".main_sd");
    var $menuBtn = $(".main_mn_bt");
    
    // skipnav 바로가기
    $(".skip_nav a").on("keydown", function(e){
        if($(this).attr("href") == "#sideMenu" && e.keyCode == 13){
            $(".main_mn_bt").trigger("click");
            $("#sideMenu").focus();
        }
    });

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