$(function(){
    $(".nvr_fix_bt button").on("click", function(){
        $(this).addClass("is_on").siblings().removeClass("is_on");

        var this_type = $(this).attr("data-type");

        if(this_type != "default"){
            $("body").removeClass().addClass(this_type);
        }else{
            $("body").removeClass();
        }
    });
});