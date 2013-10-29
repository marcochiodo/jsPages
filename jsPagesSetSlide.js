/*

	Questa roba è quella che fa funzionare il mio sito. Dentro c'è anche la gestione degli url che andrà a parte

*/

(function($) {

	var slideStruct = {
		listSlide : [],
		namePages : [],
		currentSlide : 0,
		positionSlide : {
			current : {},
			previous : {},
			next : {}
		},
		duration : 750,
		dysplay : 1
	}

	$.slideStructLoad = function( options ){
		$.extend( slideStruct , options );
		
		$("a").click(function(event){
			
			var page = this.href.split('/')[4];
		
			if( $.inArray( page , slideStruct.namePages) != -1 && window.history && window.history.pushState ){
			
				event.preventDefault();
				
				var indexPage = slideStruct.namePages.indexOf( page );
				
				$.setSlide( slideStruct.namePages[indexPage]  );
				
				history.pushState(null,'',page);

				
			}
			
		});	
		
	}
	
	
	$.setSlide = function( slide ) {

		

		if( typeof slide == 'number' ){
			if( slideStruct.namePages[slide] ){
				var indexNew = slide;
				var slide = slideStruct.namePages[slide];
			}
			else
				var slide = null;
		}
		else
			var indexNew = slideStruct.namePages.indexOf( slide );
		
		var indexCurrent = slideStruct.currentSlide;
		
 		if( slide != null ){

			if( indexNew > indexCurrent ){
					
				$('#'+slideStruct.listSlide[indexNew]).css({
					'left':'25%',
					'display':'inline-block'
				});
				
				$('#'+slideStruct.listSlide[indexCurrent]).animate( {'left':'0%'} , slideStruct.duration);
				
				var f = function(){
					$('#'+slideStruct.listSlide[indexNew]).animate( {'left':'0%'} , slideStruct.duration,function(){
						$('#'+slideStruct.listSlide[indexCurrent]).css({'display':'none'});
						$('#'+slideStruct.listSlide[indexNew]).css({'left':'25%'});
					});
				}
				
				if( slideStruct.distance == 0 )
					f();
				else
					setTimeout( f , slideStruct.duration*(slideStruct.distance / 100));
			
			}	
			else if( indexNew < indexCurrent ){
					
				$('#'+slideStruct.listSlide[indexNew]).css({'left':'0%','display':'inline-block'});
				
				$('#'+slideStruct.listSlide[indexCurrent]).css({'left':'0%'});
				
				$('#'+slideStruct.listSlide[indexCurrent]).animate( {'left':'25%'} , slideStruct.duration );
				
				var f = function(){
					$('#'+slideStruct.listSlide[indexNew]).animate( {'left':'25%'} , slideStruct.duration,function(){
						$('#'+slideStruct.listSlide[indexCurrent]).css({'display':'none'});
					});
				}
				
				if( slideStruct.distance == 0 )
					f();
				else
					setTimeout( f , slideStruct.duration*(slideStruct.distance / 100));
			}
			
			if( slideStruct.top )
				$( slideStruct.top ).animate({scrollTop:'0px'},slideStruct.duration);
				
			slideStruct.currentSlide = indexNew;

		}
		return this;
 		
    }
    
  
})(jQuery);
