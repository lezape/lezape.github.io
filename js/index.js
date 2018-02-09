$(document).ready(function() {
  var gp = $(".w-icon");
  var lps = $(".w-nav-menu");
  var lpf = $(".before");
  var lg = $(".before");//.css({"display": "none"});
  
    var lp = lps + lg;
    
    
//    $(function(before){
//        
//        $(".w-nav-menu").prepend("<div class='before'>Закріть меню</div>");
//        $(".before").click(function(){
//            
//            
//
//            
//            
//        });
//       }); 
    
    
   
    

  $(".w-icon , .before").click(function() {
    lps.stop().slideToggle(500);
  });

  $(window).resize(function(jj) {
    if ($(this).width() >= 600) {
      lps.removeAttr("style");
    } else {
    }
  });
    
//     before();
});







/*--
$(document).ready(function() {
  var gp = $(".w-icon");
  var lp = $(".w-nav-menu");

  $(".w-icon").click(function() {
    lp.stop().slideToggle(500);
  });

  $(window).resize(function(jj) {
    if ($(this).width() >= 600) {
      lp.removeAttr("style");
    } else {
    }
  });
});






--*/