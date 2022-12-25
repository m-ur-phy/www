var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
var on_off=false;  //false(안오버)  true(오버)

// 마우스엔터
$('#headerArea').mouseenter(function(){
    // var scroll = $(window).scrollTop();
    $(this).css('background','#fff');
    $('.dropdownmenu li a').css('color','#333'); 

    $('.topMenu ul li a').css('color', '#333');
    $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo2.png) 0 40% no-repeat');

    on_off=true;
});

$('#headerArea').mouseleave(function(){
    var scroll = $(window).scrollTop();  //스크롤의 거리
    
    if(scroll<smh-50 ){
        $(this).css('background','none').css('border-bottom','none'); 
        $('.dropdownmenu li a').css('color','#fff');
        $('.topMenu ul li a').css('color', '#fff');
        $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo.png) 0 40% no-repeat');
    }else{
        $(this).css('background','#fff'); 
        $('.dropdownmenu li a').css('color','#333');
        $('.topMenu ul li a').css('color', '#333');
        $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo2.png) 0 40% no-repeat');
    }
    on_off=false;    
});

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if(scroll>smh-50){//스크롤300까지 내리면
        $('#headerArea').css('background','#fff').css('box-shadow','0 0 15px rgba(0, 0, 0, .2)');
        $('.dropdownmenu li a').css('color','#333');
        $('.topMenu ul li a').css('color', '#333');
        $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo2.png) 0 40% no-repeat');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        if(on_off==false){
            $('#headerArea').css('background','none').css('box-shadow','0 0 0 rgba(0, 0, 0, 0)');
            $('.dropdownmenu li a').css('color','#fff');
            $('.topMenu ul li a').css('color', '#fff');
            $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo.png) 0 40% no-repeat');
        }
    }; 
});

//2depth 열기/닫기
$('ul.dropdownmenu').hover(
    function() { 
        $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
        $('#headerArea').animate({height:300},'fast').clearQueue();
    },function() {
        $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
        $('#headerArea').animate({height:80},'fast').clearQueue();
});

// 1depth 효과
$('ul.dropdownmenu li.menu').hover(
    function() { 
        $('.depth1',this).css('color','#c01');
        $('ul.dropdownmenu li a.depth1',this).css('color','#c01');
    },function() {
    $('.depth1',this).css('color','#333');
});

// 2depth 효과
$('.dropdownmenu ul li').hover(
    function() { 
        $('a',this).css('color','#c01');
    },function() {
    $('a',this).css('color','#333');
});

// topMenu 효과
$('.topMenu ul li').hover(
    function() { 
        $('a',this).css('color','#c01');
    },function() {
    $('a',this).css('color','#333');
});

    // tab 처리
$('.dropdownmenu>li.menu .depth1').on('focus', function () {        
    $('ul.dropdownmenu li.menu ul').slideDown('normal');
    $('#headerArea').animate({height:300},'fast').css('background','#fff').clearQueue();
    $('.dropdownmenu li a').css('color','#333');
    $('.topMenu ul li a').css('color', '#333');
    $('#headerArea h1 a').css('background', 'url(http://oilpaintingkim.cafe24.com/common/images/logo2.png) 0 40% no-repeat');
});

$('.dropdownmenu>li.m6 li:last').find('a').on('blur', function () {        
    $('ul.dropdownmenu li.menu ul').slideUp('fast');
    $('#headerArea').animate({height:80},'normal').clearQueue();
});

// topMove
$('.topMove').hide();

$(window).on('scroll',function(){ // 스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); // 스크롤의 거리

    if(scroll>500){ // 500이상의 거리가 발생되면
        $('.topMove').fadeIn(); // top 페이드 인
    }else{
        $('.topMove').fadeOut(); // top 페이드 아웃
    }
});

$('.topMove').click(function(e){
    e.preventDefault();
        // 상단으로 스크롤 이동
    $("html,body").stop().animate({"scrollTop":0},1000);
});

// familySite
$('.family .open').toggle(function(e){
    e.preventDefault();
    $('.family ul').stop().slideDown(200);
}, function(e){
    e.preventDefault();
    $('.family ul').stop().slideUp(200);
});

// scroll 통합
// jquery scroll
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    var secCon = [];
    var secConNum = Number($('section').length);
        for(var i = 0; i < secConNum; i++ ){
            secCon[i] = $('section:eq('+i+')');
            if(scroll > secCon[i].offset().top - 600){
                $('section:eq('+i+')').addClass('moveToTop');
            } else {
                $('section:eq('+i+')').removeClass('moveToTop');
            }
        }
});

