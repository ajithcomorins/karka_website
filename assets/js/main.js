// Timeline Scroll Section
// --------------------------------------------------------------
var items = $(".timeline li"),
timelineHeight = $(".timeline ul").height(),
greyLine = $('.default-line'),
lineToDraw = $('.draw-line');

// sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

// run this function only if draw line exists on the page
if(lineToDraw.length) {
  $(window).on('scroll', function () {

    // Need to constantly get '.draw-line' height to compare against '.default-line'
    var redLineHeight = lineToDraw.height(),
    greyLineHeight = greyLine.height(),
    windowDistance = $(window).scrollTop(),
    windowHeight = $(window).height() / 2,
    timelineDistance = $(".timeline").offset().top;

    if(windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if(line <= greyLineHeight) {
        lineToDraw.css({
          'height' : line + 20 + 'px'
        });
      }
    }

   
    // This takes care of adding the class in-view to the li:before items
    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    items.each(function(index){
      var circlePosition = $(this).offset();

      if(bottom > circlePosition.top) {				
        $(this).addClass('in-view');
        $(this).removeClass('hidden');
        
      } else {
        $(this).removeClass('in-view');
        $(this).addClass('hidden');
      }
    });	
    $(document).ready(function(){ 
      var default_height = $(".timeline ul").height();
       
      $(".default-line").height(default_height-20+`px`); 
    });
      
  });
}

//Get the button

// When the user scrolls down 20px from the top of the document, show the button



//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let brochure = document.getElementById("btn-brochure");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    brochure.style.display = "block";
  } else {
    mybutton.style.display = "none";
    brochure.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// progressbar js start

document.ready = function( callback ) {
	if( document.readyState != 'loading' ) {
		callback();
	}
	else {
		document.addEventListener( 'DOMContentLoaded', callback );
	}
};


(function() {

	document.ready( function() {

		/* We have to know some stuff of the current screen, that we will get over the following variables */
		let progressbar = document.getElementById( "progressbar" );
		if( !!progressbar ) {

			let body = document.getElementsByTagName( "body" )[0];
			let window_height = body.offsetHeight;
			let client_height = document.documentElement.clientHeight;

			/* The following variables are for storing the neccessary scroll-data */
			let last_known_scroll_position = 0;
			let ticking = false;

			/* This Event-Listener will hook onto the Scroll-Event of the Browser */
			window.addEventListener( 'scroll', function( e ) {

				last_known_scroll_position = window.scrollY;
				if( !ticking ) {

					window.requestAnimationFrame( function() {
							
						nowScrolling( last_known_scroll_position );
						ticking = false;

					});
					ticking = true;

				}

			});

			/*
			I use the Client-Height for a accurate percentage of the current screen-state.
			On window-resizing the variable "client_height" would stay the same, if I won't add this Event-Listener
			*/
			window.addEventListener( "resize", refactorScreenHeight );
			var mutationObserver = new MutationObserver( refactorScreenHeight );
			mutationObserver.observe(document.documentElement, {
				attributes: true,
				characterData: true,
				childList: true,
				subtree: true,
				attributeOldValue: true,
				characterDataOldValue: true
			});

			function refactorScreenHeight() {

				client_height = document.documentElement.clientHeight;
				window_height = body.offsetHeight;

			}

			function nowScrolling( last_known_scroll_position ) {

				/* Here you also can add your own functions. The following is an example for the Scroll-Bar */
				let percentage = last_known_scroll_position / ( window_height - client_height ) * 100;
				progressbar.style.right = "calc( 100% - " + Math.round( percentage ) + "% )";

			}

		}

	});

})();
