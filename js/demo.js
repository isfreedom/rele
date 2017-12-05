// 个人简历
// 弹出微信二维码
$(function(){
	var runPage;
	    runPage = new FullPage({
	        id: 'pageContain',
	        slideTime: 800,
	        effect: {
	            transform: {
	                translate: 'Y',
	                scale: [0, 1],
	                rotate: [0, 0]
	            },
	            opacity: [0, 1]
	        },
	        mode: 'wheel, touch, nav:navBar',
	        verticalCentered: false,
	        anchors:["page1","page2","page3","page4","page5","page6"], 
	        easing: 'ease',
	        callback:function(index,thisPage){
	        	if(index==1){
	        		$(".setoff").animate({width:"220px"},800,function(){
	        			$(this).find("img").fadeIn();
	        			$(".likeTxtWrap").animate({width:"1000px",bottom:"10%",left:"50%"},700,'easeOutElastic',function(){
	        				$(this).find("p").fadeIn(700);
	        			});
	        		});
	        	}
	        	if(index==2){
	        		$(".set-skill").animate({width:"220px"},800,function(){
	        			$(this).find("img").fadeIn();
	        			$(".meSkill").fadeIn(700,function(){
	        				$(this).animate({top:"30%"},700,'easeOutQuad');
	        			})
	        		});

	        	}
	        	if(index==3){
	        		$(".set-pre").animate({width:"220px"},800,function(){
	        			$(this).find("img").fadeIn();
	        			$(".meProject").slideDown(400);
	        		})
	        	}
	        	if(index==4){
	        		$(".set-work").animate({width:"220px"},800,function(){
	        			$(this).find("img").fadeIn();
	        		})
	        	}
	        	if(index==5){
	        		$(".set-link").animate({width:"220px"},800,function(){
	        			$(this).find("img").fadeIn();
	        			$(".meSay2").find("li").eq(0).fadeIn(300,function(){
	        				$(this).next().fadeIn(300,function(){
	        					$(this).next().fadeIn(300,function(){
	        						$(this).next().fadeIn(300);
	        					})
	        				})
	        			})
	        		})
	        	}
	        }
    });
    $(".weixin").click(function(){
        $(".WeChatWrap,.addWeChat").fadeIn(700);
    });
    $(".WeChatWrap").click(function(){
        $(".WeChatWrap,.addWeChat").fadeOut(700);
        return false;
    });
});
// 更换头像
$(function(){
    $(".meWrap2").hover(function(){
        $(this).find(".mepic").fadeOut(800);
    },function(){
        $(this).find(".mepic").stop(true,false).fadeIn(800);
    });
    $(".null").click(function(){
    	alert("暂时为空！");
    })
});
// 作品
//边框效果--移入
function biankuang(obj){
    $(obj).find('.biankuang_1').stop(true).animate({
        height:'305px'
    },300)
    $(obj).find('.biankuang_2').stop(true).delay(300).animate({
        width:'360px'
    },300)
    $(obj).find('.biankuang_3').stop(true).animate({
        height:'305px'
    },300)
    $(obj).find('.biankuang_4').stop(true).delay(300).animate({
        width:'360px'
    },300)
}
//边框效果--移出
function biankuang1(obj){

    $(obj).find('.biankuang_1').stop(true).delay(100).animate({
        height:'0px'
    },100)
    $(obj).find('.biankuang_2').stop(true).animate({
        width:'0px'
    },100)
    $(obj).find('.biankuang_3').stop(true).delay(100).animate({
        height:'0px'
    },100)
    $(obj).find('.biankuang_4').stop(true).animate({
        width:'0px'
    },100)
}
//触发
$(function(){
    $('.demoLi').hover(
	    function () {
	      var obj = $(this);
	        biankuang(obj);
	    },
	    function () {
	      var obj = $(this);
	        biankuang1(obj);
	});
     $(".productMore").click(function(){
        $(".mask_wrap").show();
        $("#htmlMask").fadeIn();
    });
     $(".sureBtn").click(function(){
        $("#htmlMask").fadeOut();
         $(".mask_wrap").hide();
    });
});