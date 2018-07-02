$(document).ready(function(){
    $(".open").click(function(){  //opening of the book
        setTimeout(function() { $(".everything").css({'display':'block'});}, 3000);
        $(".cover").css('transform','rotateY(-178deg)');
        // $(".container").css('transform','rotateY(-160deg)');
         $(".book").css('box-shadow','inset 20px 0 50px rgba(0,0,0,0.5), 0 10px 100px rgba(0,0,0,0.5)');
        //  $(".book").css('margin-left', '+150px');
         $(".book").css("height","100%").css("width","100%");
         $(".book ").css("transition","3s");
         $(".book").css("visibility","hidden") ;
        //  $(".close").css('visibility','visible');
    });

    $(window).bind('scroll',function(){ //for sticky navbar on scroll
        var navHeight = $(window).height() - 70;
        if($(window).scrollTop()>navHeight){
            $('nav').addClass('fixed');
        }

        else{
            $('nav').removeClass('fixed');
        }

    });

    //slideshow

    $(function(){
        setInterval(function(){
        $(".slideshow1 ul").animate({marginLeft:-550},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
        })
        }, 2000);
    });
});