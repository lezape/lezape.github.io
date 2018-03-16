$(document).ready(function(){
   
    $('.sl').slick();
    

    
    
    
//    $(".draganDrop").stop().mousedown(function(){
//        $(this).stop().mousemove(function(){
//            $(this).stop().animate({marginLeft:'+=1'},1);
//        });
//    });
//    

//    $(".draganDrop").mousedown(function(){
//        $(this).stop().animate({marginLeft:'+=1'},1);
//    } );
//                $(".draganDrop").mouseup(function(){
//        $(this).stop().animate({marginLeft:'-=1'},1);});  
  //    });  
    
    

    $(".draganDrop").mousedown(function(){
        $(this).stop().mousemove(function(){
            $(this).stop().animate({marginLeft:'+=1'},1);
        });        
    });
    
    $(".draganDrop").mouseup(function(){
        $(this).stop().mousemove(function(){
            $(this).stop().animate({marginLeft:'-=1'},1);
        });      
      }); 
  
  
    
    
});




/*


    $(".draganDrop").mousedown(function(){
        $(this).mousemove(function(){
           $(this).animate({left:'-=200'},500);
        });
    });


mousemove

    var link = $(".menu-link");
    var link_active = $(".menu-link_active");
    link.click(function(){
       link.toggleClass("menu-link_active"); 
    });
    link_active.click(function(){
       link_active.removeClass("menu-link_active"); 
    });
    
 





*/