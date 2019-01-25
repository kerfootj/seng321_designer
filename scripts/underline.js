$(window).bind("scroll", function() { 
    var $sec1 = $('#About-Us').offset().top;
    var $sec2 = $('#Project-Description').offset().top;
    var $sec3 = $('#Documents').offset().top;
    var $sec4 = $('#Our-Team').offset().top; 
    var $sec5 = $('#Contact-Us').offset().top;   

    if ($(this).scrollTop() < $sec2){ 
        $(".nav1").css({"border-bottom":"2px solid #f4f5f8"});
        $(".nav2").css({"border-bottom":"0px solid #f4f5f8"});  
    }     
    if ($(this).scrollTop() + 250 > $sec2 & $(this).scrollTop() < $sec3){  
        $(".nav1").css({"border-bottom":"0px solid #f4f5f8"});
        $(".nav2").css({"border-bottom":"2px solid #f4f5f8"}); 
        $(".nav3").css({"border-bottom":"0px solid #f4f5f8"});  
    } 
    if ($(this).scrollTop() + 250 > $sec3 & $(this).scrollTop() < $sec4){ 
        $(".nav2").css({"border-bottom":"0px solid #f4f5f8"});  
        $(".nav3").css({"border-bottom":"2px solid #f4f5f8"});
        $(".nav4").css({"border-bottom":"0px solid #f4f5f8"});  
    }    
    if ($(this).scrollTop()+ 250 > $sec4 & $(this).scrollTop() < $sec5){ 
        $(".nav3").css({"border-bottom":"0px solid #f4f5f8"});
        $(".nav4").css({"border-bottom":"2px solid #f4f5f8"});
        $(".nav5").css({"border-bottom":"0px solid #f4f5f8"});
    }    
    if ($(this).scrollTop() + 800 > $sec5){ 
        $(".nav4").css({"border-bottom":"0px solid #f4f5f8"});  
        $(".nav5").css({"border-bottom":"2px solid #f4f5f8"});
    }         
});