//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // laptop events
    $('section img#laptop').mouseover(
        function (){
            $('section img#laptop').attr('src','images/laptopH.svg');
        });
    $('section img#laptop').mouseout(
        function (){
            $('section img#laptop').attr('src','images/laptopL.svg');
        }); 
    $('section img#laptop').hover(
        function(){
            $('section p#laptop').css('visibility','visible');
        },
        function(){
            $('section p#laptop').css('visibility','hidden');
        });
    $('section img#laptop').stop().click(
        function (){
           $('section img#laptop').attr('src','images/laptopF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end laptop
    
    // bottle events
    $('section img#bottle').mouseover(
        function (){
            $('section img#bottle').attr('src','images/bottleH.svg');
        });
    $('section img#bottle').mouseout(
        function (){
            $('section img#bottle').attr('src','images/bottleL.svg');
        });
    $('section img#bottle').hover(
        function(){
            $('section p#bottle').css('visibility','visible');
        },
        function(){
            $('section p#bottle').css('visibility','hidden');
        });
    $('section img#bottle').stop().click(
        function (){
           $('section img#bottle').attr('src','images/bottleF.svg').fadeIn().unbind('mouseover mouseout hover'); 
            return false;
        }); //end bottle
    
    // planner events
    $('section img#planner').mouseover(
        function (){
            $('section img#planner').attr('src','images/plannerH.svg');
        });
    $('section img#planner').mouseout(
        function (){
            $('section img#planner').attr('src','images/plannerL.svg');
        });
    $('section img#planner').hover(
        function(){
            $('section p#planner').css('visibility','visible');
        },
        function(){
            $('section p#planner').css('visibility','hidden');
        });
    $('section img#planner').stop().click(
        function (){
           $('section img#planner').attr('src','images/plannerF.svg').fadeIn().unbind('mouseover mouseout hover'); 
            return false;
        }); //end planner
    
    // phone events
    $('section img#phone').mouseover(
        function (){
            $('section img#phone').attr('src','images/phoneH.svg');
        });
    $('section img#phone').mouseout(
        function (){
            $('section img#phone').attr('src','images/phoneL.svg');
        });
    $('section img#phone').hover(
        function(){
            $('section p#phone').css('visibility','visible');
        },
        function(){
            $('section p#phone').css('visibility','hidden');
        });
    $('section img#phone').stop().click(
        function (){
           $('section img#phone').attr('src','images/phoneF.svg').fadeIn().unbind('mouseover mouseout hover'); 
            return false;
        }); //end phone
    
    // pencil events
    $('section img#pencil').mouseover(
        function (){
            $('section img#pencil').attr('src','images/pencilH.svg');
        });
    $('section img#pencil').mouseout(
        function (){
            $('section img#pencil').attr('src','images/pencilL.svg');
        });
    $('section img#pencil').hover(
        function(){
            $('section p#pencil').css('visibility','visible');
        },
        function(){
            $('section p#pencil').css('visibility','hidden');
        });
    $('section img#pencil').click(
        function (){
           $('section img#pencil').attr('src','images/pencilF.svg').fadeIn().unbind('mouseover mouseout hover'); 
            return false;
        }); //end pencil
    
}); //end ready