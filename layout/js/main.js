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

    // 로딩 화면 제어
    var Loading = setInterval(
        function(){
            $(".main_ld_txt").append(".");
            if($(".main_ld_txt").text().length >= 10){
                clearInterval(Loading);
            }
        }, 300
    );

    // 로딩화면시 스크롤 막기
    $("html").addClass("scroll_fix");
});

//페이지 로드시 로딩화면 제거
$(window).on("load", function(){
    setTimeout(
        function(){
            $(".main_ld").fadeOut();
            $("html").removeClass("scroll_fix");
        }, 500
    );
});