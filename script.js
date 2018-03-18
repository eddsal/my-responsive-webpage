window.onload = function(){
     //page 1 navigation
    $('.menu-button').click(function(){
       $('nav ul').toggleClass('show');
    })
    $(".home").click(function() {
        $('html,body').animate({
            scrollTop: $("#page1").offset().top},
            'slow');
    });

    $(".serv").click(function() {
        $('html,body').animate({
            scrollTop: $("#page2").offset().top},
            'slow');
    });
    $(".port").click(function() {
        $('html,body').animate({
            scrollTop: $("#page3").offset().top},
            'slow');
    });




    //page 3 portfolio

    $('.all').click(function(){  
        $('#photos').css("display","show");
    })
    $('.pana').click(function(){  
        $('.p1' ).css("display","");
    })
    $('.portrail').click(function(){  
        $('.photos').css("display","show");
    })
    $('.macro').click(function(){  
        $('.photos').css("display","show");
    })
    $('.journal').click(function(){  
        $('.photos').css("display","show");
    })
    
}