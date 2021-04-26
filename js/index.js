// global $,alert,console

$(function(){

    // Set Hesder height

    var myHeader = $(".header");
    myHeader.height($(window).height());
    $(window).resize(function () { 
        myHeader.height($(window).height());
    });

    // active link
    $(".links li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // slider 

    var myslider = $('.bxslider');
    
    $(".header .bx-wrapper, .header .bxslider , .header .bx-wrapper .bx-viewport").height($(window).height());

    $(window).resize(function () { 
        $(".header .bx-wrapper, .header .bxslider , .header .bx-wrapper .bx-viewport").height($(window).height());
    });
    myslider.append('<li id="rere">'+
    '<h2>Welcome To <span>Classic 5</span></h2>'+
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos obcaecati cumque, error quam enim vel eaque incidunt pariatur ad, quis adipisci fugit animi impedit aliquam ipsa corporis odio officiis.</p>'+
    '</li>');

    myslider.bxSlider({
        pager:false    
    });

    // boxslider to center

    myslider.each( function () {
        $(this).css("paddingTop",($(window).height()-$(".bxslider li").height())/2)
    });

    $(window).resize(function () { 
        myslider.each( function () {
            $(this).css("paddingTop",($(window).height()-$(".bxslider li").height())/2)
        });    
    });

    // smooth scroll
    
    $(".links li").click(function (e) { 
        $("html , body").animate({
            scrollTop:$("#"+$(this).data("value")).offset().top             
        },1000);
    });

    // Our auto slider code

    (function autoslider() {

        $(".slider .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(3000).fadeOut(3000 , function () { 
                    $(this).removeClass("active");
                    $(this).next().fadeIn(1000).addClass("active");
                    autoslider();
                });
            }else{
                $(this).delay(3000).fadeOut(1000 ,function () {
                    $(this).removeClass("active");
                    $(".slider div").eq(0).fadeIn(2000).addClass("active");
                    autoslider();
                })
            }
        });

    }());

    // Shuffle

    $("#container").mixItUp();

    $(".shuff li").click(function (e) { 
        
        $(this).addClass("selected").siblings().removeClass("selected")
        
    });

    $("html").niceScroll({
        cursorcolor:"#1abc9c",
        cursorborder:"1px solid #1abc9c"
    });
});