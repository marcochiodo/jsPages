/*

	Edit 2

*/
(function($) {

	$.fn.jsPagesVideoAdapt = function( parent , top , left ){
	
		var w = this.width();
		var h = this.height();
		
		if( w > h ){
			w = w/h;
			h = 1;
		}
		else{
			h = h/w;
			w=1;
		}
		
		var _this = this;
	
		$(window).resize(function(){
		
			_this.jsPagesVideoAdaptSet(parent , w , h , top , left );
		
		});
		
		this.jsPagesVideoAdaptSet(parent , w , h , top , left );
	
	};
	
	$.fn.jsPagesVideoAdaptSet = function( parent , w , h , top , left ){
	
		var parentW = $(parent).width();
		var parentH = $(parent).height();
		
		if( parentW > parentH ){
			pw = parentW/parentH;
			ph = 1;
		}
		else{
			ph = parentH/parentW;
			pw=1;
		}
		
		var diffW = pw / w;
		var diffH = ph / h;
	
		if( diffW > diffH ){
			var newW = parentW;
			var newH = (newW*h)/w;
		}
		else{
			var newH = parentH;
			var newW = (newH*w)/h;
		}
		
		this.attr({
			width : newW,
			height : newH
		});
		
		var css = {};
		var maxDX = newW-parentW; //Disassamento X
		var maxDY = newH-parentH; //Disassamento Y
		
		switch(top){
			case 'top':css.top='0%';break;
			case 'center':css.top='-'+((newH-parentH)/2)+'px';break;
			case 'bottom':css.bottom='0%';break;
			default:
				if( top.indexOf('%') != -1 ){
					top = parseInt(top);
					top = newH*(top/100);
					if( top > maxDY )
						top = maxDY;
					css.top = '-'+top+'px';
				}
				else{
					top = parseInt(top);
					if( top > maxDY )
						top = maxDY;
					css.top = '-'+top+'px';
				}
			break;
		}
		switch(left){
			case 'left':css.left='0%';break;
			case 'center':css.left='-'+((newW-parentW)/2)+'px';break;
			case 'right':css.right='0%';break;
			default:
				if( left.indexOf('%') != -1 ){
					left = parseInt(left);
					left = newW*(left/100);
					if( left > maxDX )
						left = maxDX;
					css.left = '-'+left+'px';
				}
				else{
					left = parseInt(left);
					if( left > maxDX )
						left = maxDX;
					css.left = '-'+left+'px';
				}
			break;
		}
	
		this.css( css );
	
	
	}
		

	})(jQuery);
