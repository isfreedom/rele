$(function(){
    //顶部导航固定
    var win=$(window);
    var nav=$('#nav');
    var doc=$(document);
    win.scroll(function(){
        if (doc.scrollTop()>=5) {
            nav.addClass('fixednav');
            $('.navTmp').fadeIn();
        }
        else{
            nav.removeClass('fixednav');
            $('.navTmp').fadeOut();
        };
    })

    //登录
    var oBtn=document.getElementById('log-a');
    oBtn.onclick=function(){
        var sHeight=document.documentElement.scrollHeight;
        var sWidth=document.documentElement.scrollWidth;
        var clientH=document.documentElement.clientHeight;
        var clientW=document.documentElement.clientWidth;
        var oWrap=document.createElement('div');
            oWrap.id='wrap';
            oWrap.style.height=sHeight+'px';
            oWrap.style.width=sWidth+'px';
            document.body.appendChild(oWrap);
        var oLogin=document.createElement('div');
        oLogin.id='login';
        oLogin.innerHTML='<div class="loginCon"><div id="top"><a href="#">Login</a><p id="close" title="close"><i class="fa fa-times" aria-hidden="true"></i></p></div><div id="bottom"><div class="left"><ul class="typeList"><li><label for="email">Email：</label><input type="text" name="email" placeholder="Please enter the login mailbox" class="text" required/></li><li><label for="pwd">Password：</label><input type="text" name="pwd" class="pwd" /></li></ul><div class="clear"><a href="#" class="oneself"><input type="checkbox" checked="checked" />automatic logon</a><a href="#" class="forget">Forget password?</a></div><div class="ha"><a href="#" class="register">Register now</a><a href="#" class="landing">Login</a></div></div><div class="right"><p class="fast">One key authorization fast</p><a href="#" class="QQ">QQ account</a><a href="#" class="sina">Sina micro-blog account</a></div></div></div>'
        document.body.appendChild(oLogin);
        var oHeight=oLogin.offsetHeight;
        var oWidth=oLogin.offsetWidth;
        oLogin.style.left=clientW/2-oWidth/2+'px';
        oLogin.style.top=clientH/2-oHeight/2+'px';
        var oClose=document.getElementById('close');
        oWrap.onclick=oClose.onclick=function(){
            document.body.removeChild(oWrap);
            document.body.removeChild(oLogin);
        }
    }
    $('#close').button({
        disabled:false,
        icons:{
            primary:'ui-icon-close'
        },
    })
    //搜索
    var aSearch=document.getElementById('search-a');
    var aInput=document.getElementById('txt');
    aSearch.onmouseover=function(){
        aInput.style.display='block';
        aSearch.style.color='#fff';
    }
    aInput.onmouseout=function(){
        this.style.display='none';
        aSearch.style.color='#99969e';
    }

    //显示
    var aI=document.getElementById('show');
    var aMenu=document.getElementById('sub-nav-menu');
    aMenu.onmouseover=aI.onmouseover=function(){
        aMenu.style.display='block';
        aI.style.color='#333';
    }
    aMenu.onmouseout=function(){
        aMenu.style.display='none';
        aI.style.color='#666';
    }
    //图片滑动
    function getByClass(oParent,sClass){
        var aEle=oParent.getElementsByTagName('*');
        var aResult=[];
        for(var i=0;i<aEle.length;i++){
            if(aEle[i].className==sClass){
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }
    var sliderDiv=document.getElementById('slider-pic');
    var oBtnLeft=getByClass(sliderDiv,'btn-left')[0];
    var oBtnRight=getByClass(sliderDiv,'btn-right')[0];
    var oMaskLeft=getByClass(sliderDiv,'mask-left')[0];
    var oMaskRight=getByClass(sliderDiv,'mask-right')[0];

    var oUlBig=getByClass(sliderDiv, 'slider-list')[0];
    var aLiBig=oUlBig.getElementsByTagName('li');
    var nowZIndex=1;
     var now=0;

    // oBtnLeft.onmouseover=oMaskLeft.onmouseover=function(){
    //     startMove(oBtnLeft,'opacity',100);
    // }
    // oBtnLeft.onmouseout=oMaskLeft.onmouseout=function(){
    //     startMove(oBtnLeft,'opacity',0);
    // }
    // oBtnRight.onmouseover=oMaskRight.onmouseover=function(){
    //     startMove(oBtnRight,'opacity',100);
    // }
    // oBtnRight.onmouseout=oMaskRight.onmouseout=function(){
    //     startMove(oBtnRight,'opacity',0);
    // }

    oBtnLeft.onclick=function(){
        now--;
        if(now==-1)
        {
            now=aLiBig.length-1;
        }
        aLiBig[now].style.zIndex=nowZIndex++;
    }
    oBtnRight.onclick=function(){
        now++;
        if(now==aLiBig.length)
        {
            now=0;
        }
         aLiBig[now].style.zIndex=nowZIndex++;
    }
    var timer=setInterval(oBtnLeft.onclick, 2000);
    oBtnLeft.onmouseover=oBtnRight.onmouseover=oUlBig.onmouseover=function(){
        clearInterval(timer)
    }
     oBtnLeft.onmouseout=oBtnRight.onmouseout=oUlBig.onmouseout=function(){
        timer=setInterval(oBtnLeft.onclick, 2000);
    }
})