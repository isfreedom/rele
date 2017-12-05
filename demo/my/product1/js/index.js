window.onload=function(){
	var oLi=document.getElementById('me');
	var oImg=oLi.getElementsByTagName('img')[0];
	var oImg2=oLi.getElementsByTagName('img')[1];
	var oA=document.getElementById('my');
	var oUl=document.getElementById('ul');
	var oDown=document.getElementById('my')

	var oLi1=document.getElementById('helpLi');
	var oUl2=oLi1.getElementsByTagName('ul')[0]
	var oImg3=oLi1.getElementsByTagName('img')[0];
	var oImg4=oLi1.getElementsByTagName('img')[1];
	var oDown2=document.getElementById('help')
	var oA2=oLi1.getElementsByTagName('a')[0];

	oLi.onmouseover=function(){
		oImg.src='img/me2.png';
		oImg2.src='img/down2.png';
		oA.style.color='#ffd203';
		oUl.style.display='block';
	}
	oLi.onmouseout=function(){
		oImg.src='img/me.png';
		oImg2.src='img/down.png';
		oA.style.color='#fff';
		oUl.style.display='none';
		// oA.color='#ffd203';
	}

	oLi1.onmouseover=function(){
		oImg3.src='img/help2.png';
		oImg4.src='img/down2.png';
		oA2.style.color='#ffd203';
		oUl2.style.display='block';
	}
	oLi1.onmouseout=function(){
		oImg3.src='img/help.png';
		oImg4.src='img/down.png';
		oA2.style.color='#fff';
		oUl2.style.display='none';
	}
}


	




$(function(){
	// 下拉框
	$("#nav li").mouseover(function(){
		$(this).find("ul").stop(true,true).show(300);
	}).mouseleave(function(){
		$(this).find("ul").stop(true,true).hide(300);
	});
	$(".san").click(function(){
		$(".sub_select").slideToggle(400);
	});
	$(".sub_select li").click(function(){
		var text=$(this).text();
		$(".san").attr("value",text);
		$(this).parent().slideUp(400);
	});
	$(document).click(function(){
		$(".sub_select").slideUp(400);
	});
	$(".san").click(function(e){
		e.stopPropagation(); 
	});
	$(".check_span").click(function(){
		if($(this).hasClass("check-span-checked")){
			$(this).removeClass("check-span-checked");
		}
		else{
			$(this).addClass("check-span-checked");
		}
	});
	$(".checkedAll").click(function(){
		$(".check_span").toggleClass("check-span-checked");
	});
	// 我的交易订单
	$(".table-title p").click(function(){
		$(".table-title p").eq($(this).index()).addClass("title-active").siblings().removeClass('title-active');
		$("table").hide().eq($(this).index()).show();
	});
});
/**********************广告指上去箭头出现*********************/
	$(function(){
		$(".popup").hover(function(){
	        $(this).children('a').toggleClass("btnahover");
	    });
	});
/**********************删除弹出框*********************/
$(function(){
	$(".del").click(function(){
		$(".code_mask,.code_mask_wrap").show();
	});
	$(".code_cancel").click(function(){
		$(".code_mask,.card_mask,.code_mask_wrap").hide();
	});
	$(".ensure").click(function(){
		$(".code_mask,.card_mask,.code_mask_wrap").hide();
		$(".thingList i").parent().parent("li").remove();
	});
});

$(function(){
	$(".allDel").click(function(){
		if($('input[type=checkbox]').is(":checked")){
			$(".code_mask,.code_mask_wrap").show();
		}
		else{
			alert("请选择！");
		}
	});
});
// 个人信息选项卡
$(function(){
	
	function TabClick( obj, child){
		var Title = $(obj);
		Title.click(function(){
		   $(this).addClass('click').siblings().removeClass('click');
		   
		   var index = Title.index( $(this) ); 
		   $(child).eq(index).show().siblings().hide();
		});
	}
	TabClick( ".tab_title span", '.tab_con');
	TabClick( ".login_info h3 a", '.login_field');
	TabClick( ".register h3 a", '.register_table');
	
	// TabClick( ".price .title a", '.list table'); //info 价目表
	// TabClick( ".price .size a", '.con .sub'); //info 价目表
});
// 收藏夹
$(function(){
	$(".heart").click(function(){
		$(this).toggleClass('heart2');
	})
})