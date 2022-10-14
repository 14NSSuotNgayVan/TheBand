var gotoright = ()=>{
    var next_slide = $('.active').next();
    var next_dot = $(".current").next();
    if(next_slide.length!=0){
        $('.current').removeClass('current');//remove truoc khi add class cho next() de khong xoa mat class vua add
        next_dot.addClass("current");//add sau khi thuc hien xong remove
  
        $('.active').addClass('go-to-left').one('webkitAnimationEnd', function(){
            $('.go-to-left').removeClass('go-to-left').removeClass('active');
        })
        
        
        next_slide.addClass("active").addClass("come-from-right").one('webkitAnimationEnd', function(){
            $(".come-from-right").removeClass("come-from-right");
        })
    }
    else{
        $('.current').removeClass('current');//same here  
        $(".dot:first-child").addClass("current");//here too
        
        $('.active').addClass('go-to-left').one('webkitAnimationEnd', function(){
            $('.go-to-left').removeClass('go-to-left').removeClass('active');
        })
        $('.sliderbox:first-child').addClass("active").addClass("come-from-right").one('webkitAnimationEnd', function(){
            $(".come-from-right").removeClass("come-from-right");
        })
    }
}
var gotoleft = ()=> {
    var prev_slide = $('.active').prev();
    var prev_dot = $('.current').prev();
    if(prev_slide.length!= 0){
        $('.current').removeClass('current');//remove truoc khi add class cho next() de khong xoa mat class vua add
        prev_dot.addClass("current");//add sau khi thuc hien xong remove
        
        $('.active').addClass('go-to-right').one('webkitAnimationEnd', function(){
            $('.go-to-right').removeClass('go-to-right').removeClass('active');
        })

        prev_slide.addClass("active").addClass("come-from-left").one('webkitAnimationEnd', function(){
            $(".come-from-left").removeClass("come-from-left");

        })

    }else{
        $('.current').removeClass('current');//same here  
        $(".dot:last-child").addClass("current");//here too

        $('.active').addClass('go-to-right').one('webkitAnimationEnd', function(){
            $('.go-to-right').removeClass('go-to-right').removeClass('active');
        })

        $('.sliderbox:last-child').addClass("active").addClass("come-from-left").one('webkitAnimationEnd', function(){
            $(".come-from-left").removeClass("come-from-left");

        })
    }
}
var menuDisplay =()=>{
    var menubtn = $('.menu');
    var exitbtn =$('.exits');
    var navbar = $('.navbar');

    menubtn.click(function(){
        menubtn.addClass('menuClose');
        navbar.addClass('navbarOpen');
    });
    exitbtn.click(function(){
        menubtn.removeClass('menuClose');
        navbar.removeClass('navbarOpen');
    });
}
$(document).ready(function() {
    var loop = setInterval(gotoright,3000);
    
    $('.next-btn').click(function(){
        gotoright();
        clearInterval(loop);
    });
    
    $('.prev-btn').click(function(){
        gotoleft();
        clearInterval(loop);
    });
    
    
    $('.dot').click(function(){
        clearInterval(loop);
        var current = $(".current").index()+1;//nth-child tính chỉ số từ 1 trong khi index tính từ 0 nên +1
        var nextCurrent = $(this).index()+1;
        $(".dot").removeClass("current");
        $(this).addClass("current");
        if(current!=nextCurrent){

            if(current < nextCurrent){
                $('.active').addClass('go-to-left').one('webkitAnimationEnd', function(){
                    $('.go-to-left').removeClass('go-to-left').removeClass('active');
                })
                $(".sliderbox:nth-child("+(nextCurrent)+")").addClass("active").addClass("come-from-right").one('webkitAnimationEnd', function(){
                    $(".come-from-right").removeClass("come-from-right");
                })
            }
            else{
            $('.active').addClass('go-to-right').one('webkitAnimationEnd', function(){
                $('.go-to-right').removeClass('go-to-right').removeClass('active');
            })
            
            $(".sliderbox:nth-child("+(nextCurrent)+")").addClass("active").addClass("come-from-left").one('webkitAnimationEnd', function(){
                $(".come-from-left").removeClass("come-from-left");
                
            })
            }
        }
    })

    $('.ticket-btn').click(function(){
        document.querySelector('.ticket-modal').style.display = 'block';
    })
    
    $('.ticket-modal').click(function(){
        document.querySelector('.ticket-modal').style.display = 'none';
    })
    $(".modal").click(function(event){
        event.stopPropagation();
    })
    menuDisplay();
})