$(document).ready(function(){

    //event
    var swiper = new Swiper(".event .mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      initialSlide:2,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

//main이미지
    var swiper = new Swiper("main .mySwiper", {
        autoplay:{
            delay:5000,
            
        },
        loop:true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        
      },
    });
  
        $(".gnb>li").on("mouseover",function(){
            $(this).children(".sub_menu").stop().slideDown()
        }).on("mouseout",function(){
            $(this).children(".sub_menu").stop().slideUp()
        })

        //리뷰 글자흐름

        
        let swiperTop = new Swiper(".review .swiper", {
            autoplay: {
        delay: 0
        },
        spaceBetween:20,
        slidesPerView:'auto',
        loop:true,//무한반복
        speed:5000,
        });

        // $(".brand_contents .box1").on("mouseover",function(){
        //   $(this).find("p").show()
        // }).on("mouseout",function(){
        //   $(this).find("p").hide()
        // })


})//document