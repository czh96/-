$(function(){
	//返回顶部
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('#top').fadeIn(1500);
		}else{
			$('#top').fadeOut(1500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置
    $("#top").click(function(){
        $('html,body').animate({
            scrollTop: '0px'}, 500);
	});

	// 点击页面出现小心心
	(function(window,document,undefined){
		var hearts = [];
		window.requestAnimationFrame = (function(){
			return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
		function (callback){
			setTimeout(callback,1000/60);
		}
	})();
	init();
	function init(){
		css(".heart{z-index:999;width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
		attachEvent();
		gameloop();
	}
	function gameloop(){
		for(var i=0;i<hearts.length;i++){
			if(hearts[i].alpha <=0){
				document.body.removeChild(hearts[i].el);
				hearts.splice(i,1);
				continue;
			}
			hearts[i].y--;
			hearts[i].scale += 0.004;
			hearts[i].alpha -= 0.013;
			hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
		}
		requestAnimationFrame(gameloop);
	}
	function attachEvent(){
		var old = typeof window.onclick==="function" && window.onclick;
		window.onclick = function(event){
			old && old();
			createHeart(event);
		}
	}
	function createHeart(event){
		var d = document.createElement("div");
		d.className = "heart";
		hearts.push({
			el : d,
			x : event.clientX - 5,
			y : event.clientY - 5,
			scale : 1,
			alpha : 1,
			color : randomColor()
		});
		document.body.appendChild(d);
	}
	function css(css){
		var style = document.createElement("style");
		style.type="text/css";
		try{
			style.appendChild(document.createTextNode(css));
		}catch(ex){
			style.styleSheet.cssText = css;
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	function randomColor(){
		return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
	}
	})(window,document);

	// 搜索
	function search(){
		var search_ico = document.getElementById('search_ico');
		var search_bar = document.getElementById('search_bar');
		var input = document.getElementById('input');
		search_ico.onclick = function(){
			if(search_bar.style.width == '100%'){
				search_bar.style.width = '0';
			}else{
				search_bar.style.width = '100%';
			}
		}
	}search();

	
	(function(){
		// 手机端小导航显示
		var mnavh = document.getElementById('mnavh');
		var oSpan = mnavh.getElementsByTagName('span');
		var starlist = document.getElementById('starlist');
		mnavh.onclick = function(){
			if(starlist.style.display == 'block'){
				starlist.style.display = 'none';
				oSpan[0].style.background = '#ffffff';
				oSpan[1].style.display = 'block';
				oSpan[2].style.background = '#ffffff';
				oSpan[0].style.transform = 'rotate(0deg)';
				oSpan[2].style.transform = 'rotate(0deg)';
			}else{
				starlist.style.display = 'block';
				oSpan[0].style.background = '#ffffff';
				oSpan[1].style.display = 'none';
				oSpan[2].style.background = '#ffffff';
				oSpan[0].style.transform = 'rotate(45deg) translate(0.5rem)';
				oSpan[2].style.transform = 'rotate(-45deg) translate(0.5rem)';
			}
		}

		// 手机端二级菜单
		$(".header .nav .menu").click(function(){
			$(this).children('.header .nav .menu ul').slideToggle(500);	
			$(this).toggleClass("on"); 
		});
		$(".header .nav .menu").click(function(){
			$(".header .nav .menu").removeClass("on");
			$(this).addClass("on");
		});
	})();



})