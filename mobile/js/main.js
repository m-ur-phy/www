let timeonoff; // 자동기능 구현
let imageCount = 3;  // 이미지 개수
let cnt = 1;  // 이미지 순서
let position = 0; // main의 left값
let windowWidth = $( window ).width(); // 디바이스 가로값
var timer = null;
var sec = 300;
//let onoff = true; // true 타이머 동작 , false 동작하지 않을때

// 초기세팅
$('.main .gallery').css({width:windowWidth*3});
$('.main .gallery img').css({width:windowWidth});
$('.main .gallery .slogan:eq(0)').addClass('active');
// $('.main .dockBtn:eq(0)').addClass('on');

$(window).resize(function(){
    windowWidth = $(window).width(); // 디바이스 가로값
    $('.gallery img').css({width:windowWidth});
    // clearTimeout(timer);
    // timer = secTimeout(function(){
    //     clearInterval(timeonoff); // 타이머 중지
    //     windowWidth = $(window).width(); // 디바이스 가로값
    //     $('.gallery img').css({width:windowWidth});
    
    //     if(cnt == 0){ cnt = imageCount; } // 1 2 3 1 2 3
    
    //     position = -(cnt-1) * windowWidth;
    //     $('.gallery').css({left:position}); // 이미지 left값
        
    //     timeonoff= setInterval( moveg , 3000);
    // }, sec);
    
});

// 자동 슬라이드
function moveg(){
    //$('.visual .gallery').css({width:windowWidth*3});

    if(cnt == imageCount+1){ cnt=1; }
    if(cnt == imageCount){ cnt=0; }  // 카운트 초기화
    cnt++; 

    position = -(cnt-1) * windowWidth;
    $('.gallery').stop().animate({left:position}, 'slow'); // 이미지 left값

    $('.gallery .slogan').removeClass('active');
    $('.gallery .slogan:eq('+ (cnt-1) +')').addClass('active');
    
    // $('.main .dockBtn').removeClass('on'); 
    // $('.main .dockBtn:eq('+ (cnt-1) +')').addClass('on');

    if(cnt == imageCount){ cnt=0 };
}

timeonoff= setInterval( moveg , 3000); 

let startX, endX;
let startY, endY;
let touchB1;
let touchB2;

$('.main').on('touchstart mousedown',function(e){
    // e.preventDefault();
    clearInterval(timeonoff); // 타이머 중지
    startX = e.pageX || e.originalEvent.touches[0].pageX;
    startY = e.pageY || e.originalEvent.touches[0].pageY; 
});

$('.main').on('touchend mouseup',function(e){
    // e.preventDefault();
    endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
    endY = e.pageY || e.originalEvent.changedTouches[0].pageY;
    
    touchB1 = Math.abs(startY - endY); 
    touchB2 = Math.abs(endY - startY);
    console.log(touchB1)
    console.log(touchB2)
    
    if(touchB1 < 10 && touchB2 < 10 && startX < endX) {
        if(cnt == 1){ cnt = imageCount+1; } 
        if(cnt == 0){ cnt = imageCount; } 
        cnt--; 

    }else if (touchB1 < 10 && touchB2 < 10 && startX > endX){
        if(cnt == imageCount+1){ cnt=1; }
        if(cnt == imageCount){ cnt=0; }  // 카운트 초기화
        cnt++; 
    } 

    position = -(cnt-1) * windowWidth; // 현재 cnt에 해당하는 left값
    $('.gallery').stop().animate({left:position}, 'slow');

    $('.gallery .slogan').removeClass('active');
    $('.gallery .slogan:eq('+ (cnt-1) +')').addClass('active');

    // $('.main .dockBtn').removeClass('on'); // 버튼 off
    // $('.main .dockBtn:eq('+ (cnt-1) +')').addClass('on'); // 해당 버튼만 on

    timeonoff= setInterval( moveg , 3000);
});

// 금호 장학 시스템
let scnt = 0;

$(".support li").hide();
$(".support li:eq(0)").show();

$(".supportBtn .next").click(function(e){
    e.preventDefault();

    total = $(".support li").size();
    scnt++;
    if(scnt==total){
        scnt=0;
    }
    $(".support li").hide();
    $('.support li:eq('+scnt+')').fadeIn('slow');
});

$(".supportBtn .prev").click(function(e){
    e.preventDefault();

    total = $(".support li").size();
    scnt--;
    if(scnt==-1){
        scnt=total-1;
    }
    $(".support li").hide();
    $('.support li:eq('+scnt+')').fadeIn('slow');
})

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.05,
    spaceBetween: 5,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
