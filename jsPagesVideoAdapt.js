
(function($) {

	$.fn.jsPagesVideoAdapt = function( parent ){
	
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
		
			_this.jsPagesVideoAdaptSet(parent , w , h );
		
		});
		
		this.jsPagesVideoAdaptSet(parent , w , h );
	
	};
	
	$.fn.jsPagesVideoAdaptSet = function( parent , w , h ){
	
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
	
	}
		

	})(jQuery);
