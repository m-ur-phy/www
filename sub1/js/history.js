// sub1_2
$(window).load(function(){ // 페이지 이미지까지 전부 로드 후 실행
    $('.navBox .hisTab li:eq(0) a').addClass('spy');

    // 첫번째 서브메뉴 활성화
    var tabmove = $('.titleArea').height()+1000;
    var h1= $('.history:eq(1)').offset().top - 400;
    var h2= $('.history:eq(2)').offset().top - 400;
    var h3= $('.history:eq(3)').offset().top - 400;

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        // 스크롤top의 좌표
        // sticky menu 처리
        if(scroll>tabmove){ 
            $('.navBox').addClass('navOn');
            // 스크롤의 거리가 서브 타이틀 영역보다 커지면 서브메뉴를 고정시킨다
            $('#headerArea').fadeOut();
            $('.historyWrap').css('marginTop', 500);
        }else{
            $('.navBox').removeClass('navOn');
            // 스크롤의 거리가 서브 타이틀 영역보다 작아지면 서브메뉴를 원래대로 돌려놓는다
            $('#headerArea').fadeIn();
            $('.historyWrap').css('marginTop','');
        }
        
        $('.hisTab li').find('a').removeClass('spy');
        // 모든 서브메뉴를 비활성화한다
        
            // 스크롤 거리에 따른 범위 처리
        if(scroll>=0 && scroll<h1){
            $('.hisTab li:eq(0)').find('a').addClass('spy');
            // 첫번째 서브메뉴 활성화
            $('.hisTab li:eq(0)')
        }else if(scroll>=h1 && scroll<h2){
            $('.hisTab li:eq(1)').find('a').addClass('spy');
            // 두번째 서브메뉴 활성화
            
        }else if(scroll>=h2 && scroll<h3){
            $('.hisTab li:eq(2)').find('a').addClass('spy');
            // 세번째 서브메뉴 활성화

        }else if(scroll>=h3){
            $('.hisTab li:eq(3)').find('a').addClass('spy');
            // 네번째 서브메뉴 활성화
        }
        
        // 연혁 붙이기
        $('.historySubSlogan').removeClass('yearCurrent');
        if(scroll > tabmove+800 && scroll < h1-10){
            $('.historySubSlogan:eq(0)').addClass('yearCurrent');
        } else if(scroll>=h1+900 && scroll<h2-10){
            $('.historySubSlogan:eq(1)').addClass('yearCurrent');
        } else if(scroll>=h2+900 && scroll<h3-10){
            $('.historySubSlogan:eq(2)').addClass('yearCurrent');
        } else if(scroll>h3+900){
            $('.historySubSlogan:eq(3)').addClass('yearCurrent');
        } else {
            //$('.year').removeClass('current');
        }
    });

    // tab click, scroll move
    $('.hisTab li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.hisTab li a');
        var value = $('.history:eq(' + ind + ')').offset().top - 100;
        
        // value의 위치로 움직여라
        $("html,body").stop().animate({"scrollTop":value},500);
    });
});