		function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}
		function startMove(obj,attr,iTarget){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var cur=0;
				if(attr=='opacity'){
					//Math.round() -四舍五入
					cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					cur=parseInt(getStyle(obj,attr));
				}
				
				var iSpeed=(iTarget-cur)/6;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				if(cur==iTarget){
					clearInterval(obj.timer);
				}
				else{
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+iSpeed)+')';
						obj.style.opacity=(cur+iSpeed)/100;
					}
					else{
						obj.style[attr]=cur+iSpeed+'px';
					}
				}
			},30);
		
		}