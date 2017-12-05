$(function(){
	$(".learn-list").hover(function(){
		$(this).next().fadeIn();
	});
});
// 出现主菜单
var num=0;
$(function(){
    $(".menuToggle").click(function(){
        if(num==0){
            num=1;
            $(this).children("a").addClass("borderColor");
            $("#mask").fadeIn(400,function(){
                $(".menuToggle").animate({right:"637px"},1000);
            });
            $('.idolBaseInfo').fadeOut(400);
        }else if(num==1){
            num=0;
            $(this).children("a").removeClass("borderColor");
            $("#mask").fadeOut(400,function(){
                $(".menuToggle").animate({right:"17px"},1000);
            });
            $('.idolBaseInfo').fadeIn(400);
        }
    });
});