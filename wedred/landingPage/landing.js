$(document).ready(function(){
    $(".open").click(function(){
        $(".cover").css('transform','rotateY(-178deg)');
        // $(".container").css('transform','rotateY(-160deg)');
         $(".container").css('box-shadow','inset 20px 0 50px rgba(0,0,0,0.5), 0 10px 100px rgba(0,0,0,0.5)');
         $(".container").css('margin-left', '+150px').delay(3000);
         $(".container").css("height","100%").css("width","100%");
         $(".container").css("transition","3s");
         $(".container").css("visibility","hidden");
        //  $(".close").css('visibility','visible');


    });

});
      

/* keep a background image on the cover, screenshot/miniature version of the website interface, 
give a certain delay/ transition: 2000-3000ms
visibility of the whole book as not-visible,
and on-transition, keep visibility of the entire div containing the website as visible using javascript */

