// 금호 장학 시스템
var scnt = 0;

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


// 아티스트 slide
var position = 0;
var movesize = 330;
$('.artistList').after($('.artistList').clone());

$('.artistBtn a').click(function(e){
    e.preventDefault();
    console.log("ok");
    //clearInterval(timeonoff);
    
    if($(this).is('.prev')){  // 이전버튼 클릭
        
        position-=movesize;  // 150씩 감소
            $('.artistSlide').stop().animate({left:position}, 'fast',
            function(){							
                if(position==-2970){
                    $('.artistSlide').css('left',0);
                    position=0;
                }
            });
            console.log(position);
    }else if($($(this).is('.prev'))){  // 다음버튼 클릭 (제일 처음에 다음버튼을 눌렀을 때의 오류를 잡기 위함)
        if(position==0){
            $('.artistSlide').css('left',-2970);
            position=-2970;
        }

        position+=movesize; // 150씩 증가
        $('.artistSlide').stop().animate({left:position}, 'fast',
            function(){							
                if(position==0){
                    $('.artistSlide').css('left',-2970);
                    position=-2970;
                }
            });
    }
});

// 아티스트 검색
$('.artistSearch').click(function(e){
    e.preventDefault();
    $('.artist .searchPop').fadeIn('slow');
    
});

$('.searchPop .close').click(function(e){
    e.preventDefault();
    $('.artist .searchPop').hide('slow');
});