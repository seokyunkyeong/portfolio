$(document).ready(function(){
    function mobile(){
        $(".menu_btn").on("click",function(){
            $("nav").stop().fadeIn()
        })
        $(".closebtn").on("click",function(){
            $("nav").stop().fadeOut()
        })
        //스크롤시 헤더색
        $(document).on("scroll",function(){
            if($(window).scrollTop() > 50){
                $("header").addClass("on")
                $("header").removeClass("out")
            }else{
                $("header").addClass("out")
                $("header").removeClass("on")            
            }
        })
         //메뉴를 클릭하면 해당하는 메뉴로 가기
    $(".gnb>li").on("click",function(){
        let i = $(this).index();
        let sec = $("section").eq(i).offset().top

        $("nav").stop().hide()
        //스크롤이 섹션의 offset().top 값만큼 움직여야함
        $("html,body").stop().animate({'scrollTop': sec})

    })

    }//모바일함수

    function pc(){

        $(".gallery .con").on("mouseover",function(){
            $(this).find(".imgBox").stop().animate({opacity:1});
            $(this).siblings().find(".imgBox").stop().animate({opacity:0})
        }).on("mouseout",function(){
            $(this).find(".imgBox").stop().animate({opacity:0})
        })

        //스크롤시 헤더색
        $(document).on("scroll",function(){
            if($(window).scrollTop() > 87){
                $("header").addClass("on")
                $("header").removeClass("out")
            }else{
                $("header").addClass("out")
                $("header").removeClass("on")            
            }
        })

        //메뉴를 클릭하면 해당하는 메뉴로 가기
    $(".gnb>li").on("click",function(){
        let i = $(this).index();
        let sec = $("section").eq(i).offset().top
        //스크롤이 섹션의 offset().top 값만큼 움직여야함
        $("html,body").stop().animate({'scrollTop': sec})
        $(this).addClass("col")
        $(this).siblings().removeClass("col")
    })
    //해당하는 구간에 있을때 .gnb>li 색깔 바뀌기
    $(window).on("scroll",function(){
        let scr = $(window).scrollTop();
        let top1 = $(".s1").offset().top;
        let top2 = $(".s2").offset().top;
        let top3 = $(".s3").offset().top;
        let top4 = $(".s4").offset().top;
        let top5 = $("footer").offset().top;
        console.log('top3',top3)
        console.log('top4',top4)
        console.log('scr ',scr )

        if(top1<=scr && top2>scr){
            $(".gnb>li").eq(0).addClass("col")
            $(".gnb>li").eq(0).siblings().removeClass("col")
        }else if(top2<=scr && top3>scr){
            $(".gnb>li").eq(1).addClass("col")
            $(".gnb>li").eq(1).siblings().removeClass("col")
        }else if(top3<=scr && top4>scr){
            $(".gnb>li").eq(2).addClass("col")
            $(".gnb>li").eq(2).siblings().removeClass("col")
        }else if(top4<=scr && top5>scr){
             $(".gnb>li").eq(3).addClass("col")
             $(".gnb>li").eq(3).siblings().removeClass("col")
        }else{
            $(".gnb>li").removeClass("col")
        }
        
    })
    //푸터 글자흐름
    let swiperTop = new Swiper(".swiper", {
        autoplay: {
    delay: 0
    },
    spaceBetween:20,
    slidesPerView:'auto',
    loop:true,//무한반복
    speed:8000,
    });

    }//pc함수

    let winwid = $(window).width();
    if(winwid < 1200){
        mobile()
    }else{
        pc()
    }
    //축제팝업
    $(".gallery .festival").on("click",function(){
        let photo = $(this).find(".imgBox").html();

        $(".view").stop().fadeIn();
        $(".viewPic").html(photo);
    })

    $(".viewclose, .bgclose").on("click",function(){
        $(".view").stop().fadeOut()
    })
    
   
        AOS.init({
          once: true  // 애니메이션이 한 번만 실행되도록 설정
        });
    
      
    //브라우저가 리사이징될때마다 실행시키기
    // $(window).resize(function(){
    //     document.location.reload();
    // })

    // var delay = 300;
    // var timer = null; 
    // $(window).on('resize', function(){
    //   clearTimeout(timer);
    //   timer = setTimeout(function(){
    //   document.location.reload();
    //   }, delay);
    // });
        lastWidth = window.innerWidth;
    $(window).resize(function(){
    if(window.innerWidth != lastWidth){
        location.reload();
        scrollTrigger.refresh();
    }
    lastWidth = window.innerWidth;
    });
})//document