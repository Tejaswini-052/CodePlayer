
		            function updateOutput(){
					$("iframe").contents().find("html").html("<html> <head> <style type ='text/css'>" + $("#csspanel").val() + "</style> </head> <body>"+ $("#htmlpanel").val()+"</body> </html>");
					
					document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
					
					
					}
		            
					$(".togglebutton").hover(function(){
					
					       $(this).addClass("highlightedbutton");
					
					},function(){
					
					        $(this).removeClass("highlightedbutton");
					
					});
					
					
					
					
					
					$(".togglebutton").click(function(){
					
					         $(this).toggleClass("active");
							
							$(this).removeClass("highlightedbutton");
							
							var panelId = $(this).attr("id")+"panel";
							
							$("#" + panelId).toggleClass("hidden");
							
							var numberofactivepanels= 4-$('.hidden').length;
							
							$(".panel").width(($(window).width() / numberofactivepanels) -10);
					
					});
					    
						
					
					$(".panel").height($(window).height() - $("#header").height()-15);
					
					$(".panel").width(($(window).width()/2) -10);
					
					updateOutput();
					
					$("textarea").on('change keyup paste', function(){
					
					updateOutput();
					
					});
					
		  
		  
	   
	   