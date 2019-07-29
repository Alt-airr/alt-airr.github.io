
 history.scrollRestoration = 'manual';


$(window).scroll(function(){
    
    var st = $(this).scrollTop();
    
    $(".parallax").css({
        
        "transform" : "translate 0%, " + st + "%"
        
    });
});


$(function () {
    $('#universe__h2').delay(500).fadeIn(3000)
});


$(function () {
    $('#universe__p').delay(1000).fadeIn(2500)
});


$(function () {
    $('#universe__img1').delay(2000).fadeIn(2000)
});



var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 1000, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();   
});



$(window).scroll(function(){
    
    var st = $(this).scrollTop();
    
    console.log(st)
    
    $(".parallax").css({
        
        "transform" : "translate(0%, -" + st/10 + "%"
    });
});




$(document).ready(function(){
 $("#menu").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
       
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




 $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     var unih = $("#universe").height();
     var milh = $("#milky").height();
     var solh = $("#solar").height();
     var earh = $("#earth").height();
     var lanh = $("#landing").height();
     
   
     if (scroll <= unih ) {
        
        $("#pnt1").addClass("actv");
     }
        else {$("#pnt2").removeClass("actv");
    };
     
     if (scroll <= milh  && scroll > unih) {
        
        $("#pnt2").addClass("actv");
         $("#pnt1").removeClass("actv")
     }
        else {$("#pnt2").removeClass("actv");
    };
     
     if (scroll <= (solh + milh)  && scroll > milh) {
        
        $("#pnt3").addClass("actv");}
        else {$("#pnt3").removeClass("actv");
    };
     
     
     if (scroll <= (earh + solh + milh)  && scroll >  (solh + milh) ){
        
        $("#pnt4").addClass("actv");}
        else {$("#pnt4").removeClass("actv");
    };
     
     if (scroll  > (earh + solh + milh)) {
        
        $("#pnt5").addClass("actv");}
        else {$("#pnt5").removeClass("actv");
    };
 });




