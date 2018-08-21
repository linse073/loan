/**/
$(function(){

	var $panels				= $('#slider .scrollContainer > li');
	var $parent=$panels.parent();
	var $length=$panels.length;
	var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));
	var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;
	$parent.append($first);
	$parent.prepend($last);
	var totalPanels			= $(".scrollContainer").children().size();
	var regWidth			= $(".panel").css("width");
	var regImgWidth			= $(".panel img").css("width");
	var movingDistance	    = 295;
	var curWidth			= 340;
	var curHeight         =340;
	var curImgWidth  =340;
	var curImgHeight  =340;
	var othersW           =220;
	var othersH           =220;
	var othersImgW           =220;
	var othersImgH           =220;
	var $panels				= $('#slider .scrollContainer > li');
	var $container			= $('#slider .scrollContainer');
	$panels.css({'float' : 'left','position' : 'relative'});
	$("#slider").data("currentlyMoving", false);
	$container.css('width', (($panels[0].offsetWidth+120) * $panels.length) + 120 ).css('left','0');
	var scroll = $('#slider .scroll').css('overflow', 'hidden');
	function returnToNormal(element) {
		$(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
	};
	function growBigger(element) {
		$(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
		.end().find("img").animate({width:curImgWidth,height:curImgHeight})
	}
	//direction true = right, false = left
	function change(direction) {
		//if not at the first or last panel
		if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
			return false;
		}	
		//if not currently moving
		if (($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next         = direction ? curPanel + 1 : curPanel - 1;
			var leftValue    = $(".scrollContainer").css("left");
			var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({"left": movement}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_"+curPanel);
			growBigger("#panel_"+next);
			curPanel = next;
			//remove all previous bound functions
			$("#panel_"+(curPanel+1)).unbind();
			$(this).find(".ins-text").show();
			//go forward
			$("#panel_"+(curPanel+1)).click(function(){ change(true); });
			//remove all previous bound functions															
			$("#panel_"+(curPanel-1)).unbind();
			//go back
			$("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
			//remove all previous bound functions
			$("#panel_"+curPanel).unbind();

		}
	}

	growBigger("#panel_1");	
	var curPanel = 1;
	$("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
	$("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
	//when the prev/next arrows are clicked
	$("#slider .next").click(function(){ change(true);});	
	$("#slider .prev").click(function(){ change(false);});
	$(window).keydown(function(event){
		switch (event.keyCode) {
			case 13: //enter
				$(".next").click();

			break;
			case 37: //prev arrow

			break;
			case 39: //next arrow
				$(".next").click();
			break;
		}
	});	
	
});
