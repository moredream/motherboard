(function($) {
var App = { init: function() { App.HomepageHeight();
                               App.HomepageOpacity();
                               // App.MaxImage_Slider();
							   App.MaxImage_Single();
							   App.ScrollToSomeplace();
							   // App.Count_Down();
							   App.FormValidation();
							   },

	// Homepage Height
	HomepageHeight: function() {
	"use strict"; 
	    var h = window.innerHeight;
	    $('.hero_fullscreen').css('height', h );
	},
	
	
	// Homepage Opacity - for single background image version
	HomepageOpacity: function() {
    "use strict"; 
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#maximage_single').css('opacity', (1-st/h) );
        });
    },

	
	// MaxImage Fullscreen Background Slider
	MaxImage_Single: function() {
	"use strict";
	    $('#maximage_single').maximage();
	},
	
	
	// Scroll To ...
    ScrollToSomeplace: function() {
    $('#more_info_btn').click(function () {$.scrollTo('#more_info',1000,{easing:'easeInOutExpo','axis':'y'});return false});
    },
    
    
	// Newsletter Form Validation
    FormValidation: function() {
	    function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
	    return pattern.test(emailAddress);
		};
    
	    $('#subscribe-form').isHappy({
	    submitButton: '#subscribe-form-submit',
	    fields: {
	      '#email': {
	        required: true,
	        message: 'Please enter a valid e-mail address!',
	        test: isValidEmailAddress
	      }
	    }
		});

		$('#message-form').isHappy({
	    submitButton: '#new-message-form-submit',
	    fields: {
	      '#new-post-title': {
	        required: true,
	        message: 'Please enter a valid e-mail address!',
	        test: isValidEmailAddress
	      }
	    }
		});

		$('#contactus-form').isHappy({
	    submitButton: '#new-contactus-form-submit',
	    fields: {
	      '#contact_email': {
	        required: true,
	        message: 'Please enter a valid e-mail address!',
	        test: isValidEmailAddress
	      },

	      '#contact_message': {
	        required: true,
	        message: 'Please enter a message!'
	      }
	    }
		});
    },
    


}


$(function() {
  App.init();
  $(window).resize(App.HomepageHeight);  
});

})(jQuery);