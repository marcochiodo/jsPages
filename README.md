jsPages
=======

Version 0.1

Functions
===========

	jsPagesInit( pages )

		Takes the var pages, an array containing :
		In pos 0 the domain.
		In position 1 an array containing each page information arrays :
		  at pos 0 the page link for use in <a> tags, at pos 1 the id of
		  the div containing the page, at pos 2 the link ajax takes the
		  page from, at position 3 the ( optional ) css properties array :
		    This array contains at each position an array with :
		      an object with all the css properties,
		      the time in milliseconds of the animation
		      and the ( optional ) id if animating another div.
		In pos 2 the type of transition between pages.
		In pos 3 a loading failure message.
		In pos 4 the default css properties array :
		  [This array contains for each css property the property name
		  and the time in milliseconds of the animation.
		Puts pages in the $.jsPagesArr variable.

	jsPagesLink( e )

		Takes the click event variable ( e ) and checks if the event link
		is contained in $.jsPagesArr, in which case it prevents default
		and executes the $.jsPagesAnim function.

	jsPagesAnim( arr )

		Takes page information array and animates page change.

	jsPagesLoad( arr )

		Takes page infrmation array, loads the page in the choosen div.

	jsPagesUrl( arr )

		Takes page information array, changes the shown page url.
