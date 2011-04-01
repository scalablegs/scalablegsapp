/* Author: Kenneth Nordahl

*/


	$(document).ready(function() {
	
		//Setting the height of some site elements
		contentheight = $(window).height();
		/*
		$("#intro").height(contentheight);
		$("#portfolio").height(contentheight);
		$("#about").height(contentheight);
		$("#contact").height(contentheight);
		$("#social").height(contentheight / 2);
		*/
		//Scroll to effect
		$("#navigation a").click(function(){
			if(this.hash){
				var hash = this.hash;
				
				var $toElement = $(hash);
				var toPosition = $toElement.position().top;
				
				$("body,html").animate({
					scrollTop : toPosition  					
				},1500);  				
				return false;
			}
		});
		

		if(location.hash){
			var hash = location.hash;
			window.scroll(0,0);
			$("#navigation a[href="+hash+"]").click();
		};

		//animation, first item in the portfolio			
		$('#backstoryline').click(function() {
			$('#storyline').fadeIn('slow', function() {
		  	$('#storyline').detach().appendTo('#clients');		
		  });
			return false;
		});			
		$('#tokdnmedia').click(function() {
			$('#adco').fadeOut('slow', function() {
        // Animation complete
        $('#adco').detach().prependTo('#clients');
      });
		  $("#adco").fadeIn("slow");
			return false;
		});
		
		//animation, second item in the portfolio			
		$('#backadco').click(function() {
			$('#adco').fadeIn('slow', function() {
		  	$('#adco').detach().appendTo('#clients');		
		  });
			return false;
		});
		$('#tostoryline').click(function() {
			$('#kdnmedia').fadeOut('slow', function() {
		  	$('#kdnmedia').detach().prependTo('#clients');
		  });
		  $("#kdnmedia").fadeIn("slow");
			return false;
		});
		
		//animation, third item in the portfolio
		$('#backkdnmedia').click(function() {
			$('#kdnmedia').fadeIn('slow', function() {
		  	$('#kdnmedia').detach().appendTo('#clients');
		  });
			return false;
		});
		$('#toadco').click(function() {
			$('#storyline').fadeOut('slow', function() {
		  	$('#storyline').detach().prependTo('#clients');
		  });	
		  $("#storyline").fadeIn("slow");
			return false;
		});
		
	});






















