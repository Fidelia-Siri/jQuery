$(function(){
    
    var imgname = "";
    var flag = true;
    
    $("#onoroff").click(function(){
        if(flag){
        var imgname = "images/off.jpg"
        flag = false;
            
        }else{
            
        var imgname = "images/on.jpg"
        flag = true;
        }
        
        $("img").attr("src", imgname);
    });
    
    /* Show, Hide & Toggle Example */
    
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
    
    $("#btnshow").click(function(){
        $("#randomtext").show();
    });
    
    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });
    
    /* End of Show, Hide & Toggle Example */
    
    /* Fade In, Out & Toggle Example */
    
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    
    $("#fadein").click(function(){
        $("#box").fadeIn();
    });
    
    $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
});