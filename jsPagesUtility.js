(function($) {

	$.fn.jsPagesGetParentOfSize = function() {
		var e = $(this);
		if( e.css('position') == 'absolute' || e.css('position') == 'fixed' ){

			var parent = e.parent();
			while( parent.css('position') == 'static' && parent.get(0).tagName != 'BODY' )
				parent = parent.parent();
		}
		else
			var parent = e.parent();

		return parent;
	}
	
	$.fn.jsPagesGetPosition = function(){
	
		var pos=[];
		pos['left']=0;
		pos['top']=0;
		obj = this.get(0);

		if(obj) {
			while(obj.offsetParent){
				pos['left']+=obj.offsetLeft-obj.scrollLeft;
				pos['top']+=obj.offsetTop-obj.scrollTop;
				var tmp=obj.parentNode;
				while(tmp!=obj.offsetParent){
					pos['left']-=tmp.scrollLeft;
					pos['top']-=tmp.scrollTop;
					tmp=tmp.parentNode;
				}
				obj=obj.offsetParent;
			}
			pos['left']+=obj.offsetLeft;
			pos['top']+=obj.offsetTop;
		}
		return {x:pos['left'],y:pos['top']};
	
	}

})(jQuery);
