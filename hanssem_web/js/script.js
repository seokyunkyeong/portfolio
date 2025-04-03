$(document).ready(function(){

  //모바일 함수 시작
    function mobile(){

         //모바일연혁 슬라이드
         var swiper = new Swiper(".history_slide .mySwiper", {
          slidesPerView: 'auto',//보여질 슬라이드개수
          spaceBetween: 0,//슬라이드여백
        });

        //사업영역 슬라이드
      var swiper = new Swiper(".business .mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
          autoplay: {
          delay: 3000
      }
      });

      //csr 아코디언 부분

      // let onoff = true;
      // $(".csr li").on("click",function(e){
      //   e.preventDefault();
      //   onoff = !onoff;
      //   if(onoff == false){
      //   $(this).animate({"height":"50vw"})
      //   $(this).siblings().animate({"height":"30vw"})
      //   }else{
      //     $(this).animate({"height":"30vw"})

      //   }
        
      // })

      let onoff = false;

      $(".csr li").on("click", function(e) {
        e.preventDefault(); // 기본 링크 동작을 막음
      
        // 클릭한 항목이 이미 열려있다면, 닫기
        if ($(this).hasClass('active')) {
          $(this).animate({ "height": "30vw" }).removeClass('active');
        } else {
          // 다른 항목들을 닫고, 클릭한 항목만 열기
          $(this).animate({ "height": "50vw" }).addClass('active');
          $(this).siblings().animate({ "height": "30vw" }).removeClass('active');
        }
      });

      //뉴스 슬라이드 모바일
      var swiper = new Swiper(".news_slide .swiper", {
        slidesPerView: '2',//보여질 슬라이드개수
        spaceBetween: 30,//슬라이드여백
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        
      });

    }//모바일 함수끝

    //tablet함수 시작
    function tablet(){

     
        gsap.to(".history_slide_pc .slide1",{
            transform:"scale(0.8)",
            scrollTrigger:{
                trigger:".slide1",
                start:"20% top",
                scrub:1,
                //markers:true,

            }
        })//박스1
        gsap.to(".history_slide_pc .slide2",{
            transform:"scale(0.8)",
            scrollTrigger:{
                trigger:".slide2",
                start:"30% top",
                scrub:1,
                //markers:true,
                
            }
        })//박스2
        gsap.to(".history_slide_pc .slide3",{
            transform:"scale(0.8)",
            scrollTrigger:{
                trigger:".slide3",
                start:"40% top",
                scrub:1,
                //markers:true,
                
            }
        })//박스3
        // gsap.to(".slide4",{
        //     transform:"scale(0.8)",
        //     scrollTrigger:{
        //         trigger:".slide4",
        //         start:"top top",
        //         scrub:1,
        //         markers:true,
                
        //     }
        // })//박스4
  
      //tablet연혁 슬라이드
    //   gsap.to(".slide2",{
    //     scrollTrigger:{
    //         trigger:".slide1",
    //         start:"top 10%",
    //         end: "+=4000 top",
    //         pin:true,
    //         //markers:true,
    //         pinSpacing:false
    //     }
    // })

    // gsap.to(".slide3",{
    //     scrollTrigger:{
    //         trigger:".slide2",
    //         start:"top 15%",
    //         end: "+=4000 50%",
    //         pin:true,
    //         //markers:true,
    //         pinSpacing:false
    //     }
    // })

    // gsap.to(".slide4",{
    //     scrollTrigger:{
    //         trigger:".slide3",
    //         start:"top 20%",
    //         end: "bottom 50%",
    //         pin:true,
    //         //markers:true,
    //         pinSpacing:false
    //     }
    // })


    //사업영역 슬라이드
    var swiper = new Swiper(".business .mySwiper", {
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop: true,
          autoplay: {
          delay: 3000
      },

      breakpoints : { // 반응형 설정이 가능 width값으로 조정

       1440 : { //1440이상
      
          slidesPerView : 4,
      
        },
      
      },
      
      });
      //아코디언 테블릿부터
      $(".csr li").on("mouseover",function(){
        $(this).stop().animate({"width":"40%"},200);
        $(this).siblings().animate({"width":"18%"},200)
      }).on("mouseout",function(){
        $(".csr li").stop().animate({"width":"23.5%"},200)
      })

      //뉴스 슬라이드 모바일
      var swiper = new Swiper(".news_slide .swiper", {
        slidesPerView: '1.5',//보여질 슬라이드개수
        spaceBetween: 20,//슬라이드여백
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },

        breakpoints : {
          1440 : {
            slidesPerView : "2.5",
            spaceBetween: 20,
          }
        }
        
      });
      
      // let history = gsap.timeline();
      // history.from(".history .date",1,{autoAlpha:0, y:100})
      //        .from(".history .maintext",1,{autoAlpha:0, y:100})
      //       .from(".history .viewmorebtn",1,{autoAlpha:0, y:100})

      // ScrollTrigger.create({
      //   animation:history,
      //   trigger:".history",
      //   start:'top top',
      //    end:"+=3000",
      //   scrub:true,
      //   //pin:true,
      //  // anticipatePin:1,
      //   markers:true,
      //  })


      let point = gsap.timeline();

      point.from(".hanssemtext .han",{autoAlpha:0, x:200})
      point.from(".hanssemtext .working",{autoAlpha:0, x:-200})
      point.from(".hanssemtext .always",{autoAlpha:0, x:200})
      
      ScrollTrigger.create({
        animation:point,
        trigger:".hanssemtext",
        start:'top 20%',
        end:"+=3000",
        scrub:true,
        pin:true,
        anticipatePin:1,
        //markers:true,
      })

      

    }//tablet함수끝


    //pc함수 시작
   // function pc(){

        //사업영역 슬라이드
    // var swiper = new Swiper(".business .mySwiper", {
    //     slidesPerView: auto,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       dynamicBullets: true,
    //     },
    //       autoplay: {
    //       delay: 3000
    //   },
      
    //   });


   // }//pc 함수 끝



    let winWidth = $(window).width();

    if(winWidth < 780){
        mobile()
    }else{
        tablet()
    }

        
    //메인이미지 슬라이드
    var swiper = new Swiper(".mainslide .mySwiper ", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
            delay: 5000,
          },
      });

      AOS.init();
      
 

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
})