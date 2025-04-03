$(document).ready(function(){

    //모바일
    function mobile(){

        let onOff = false
        $(".gnb>li").on("click",function(){
          
            if(onOff == false){
                onOff = !onOff;
                console.log("1",onOff)
                $(this).children(".submenu").stop().slideDown();
                $(this).siblings().children(".submenu").stop().slideUp();
                $(this).children(".line").css("width","160px");
                $(this).siblings().children(".line").css('width','0')
                $(this).find(".plusbtn").hide()
                $(this).siblings().find(".plusbtn").show()
                $(this).find(".minusbtn").show()
            }else{
                $(this).children(".submenu").stop().slideUp();
                $(this).children(".line").css("width","0")
                $(this).find(".plusbtn").show()
                $(this).find(".minusbtn").hide()

                onOff = !onOff;
                console.log("2",onOff)
            }
        
        })

        
    
    $(".menu_button").on("click",function(){
        $("nav").animate({"marginLeft":0})
        // $(".submenu").stop().slideUp()
    })
    $(".closebtn").on("click",function(){
        $("nav").animate({"marginLeft":"100%"})
        $(".submenu").stop().slideUp()
        $(".line").css("width",0)
    })


    //헤더 내리면 색바뀜
    $(document).on("scroll",function(){
        if($(window).scrollTop() > 60){
            $("header").css("backgroundColor","white")
           $("header .logo").find(".white_logo").hide()
           $("header .logo").find(".bg_logo").show();
           $(".menu_button span").css("backgroundColor","black")
        }else{
            $("header").css("backgroundColor","transparent")
            $("header .logo").find(".white_logo").show()
           $("header .logo").find(".bg_logo").hide();
           $(".menu_button span").css("backgroundColor","white")
        }
    })


    }//모바일 함수 끝

    //pc함수 시작
    function pc(){
        $(document).on("scroll",function(){
            if($(window).scrollTop() > 100){
                $("header").css("backgroundColor","white")
               $("header .logo").find(".white_logo").hide()
               $("header .logo").find(".bg_logo").show();
               $(".gnb>li").css("color","black")
            }else{
                $("header").css("backgroundColor","transparent")
                $("header .logo").find(".white_logo").show()
               $("header .logo").find(".bg_logo").hide();
               $(".gnb>li").css("color","white")
            }
        })
        $(".gnb").on("mouseover",function(){
            $(".header_bg").stop().slideDown(500)
            $("header").css("backgroundColor","white")
            $(".gnb>li").css("color","#111");
            $("header .logo .bg_logo").show();
            $(".submenu").stop().slideDown()
        }).on("mouseout",function(){
            $(".header_bg").stop().slideUp(500);
            $("header").css("backgroundColor","transparent")//수정해야함*/
            $(".gnb>li").css("color","white");
            $("header .logo .bg_logo").hide();
            $(".submenu").stop().slideUp();
        })

        $(".gnb>li").on("mouseover",function(){
            $(this).children(".line").css("width","100%")
            $(this).siblings(".line").css("width",0)
        }).on("mouseout",function(){
            $(this).children(".line").css("width",0)
        })


  

    }//pc함수 끝

    let winWidth = $(window).width();

    if(winWidth < 780){
        mobile()
    }else{
        pc()
    }


    //브라우저가 리사이징될때마다 실행시키기
    // $(window).resize(function(){
    //     document.location.reload();
    // })
    lastWidth = window.innerWidth;
    $(window).resize(function(){
    if(window.innerWidth != lastWidth){
        location.reload();
        scrollTrigger.refresh();
    }
    lastWidth = window.innerWidth;
    });
        
    



})//document
   
    



