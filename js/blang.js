$(document).ready(function(){
    $(window).scroll(function(){
        
        var scrolTop= $(".scroll-top")
         
         if($(window).scrollTop() >=1000){
             
             if(scrolTop.is(':hidden'))
             
            scrolTop.fadeIn(500);
         } 
         else{
              scrolTop.fadeOut(500);
         }
         
     });
    
    $(window).on("load",function(){
       
        $('.loader').fadeOut('slow');
    });

});
