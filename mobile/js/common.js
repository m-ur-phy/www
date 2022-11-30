// header
$(window).on('scroll',function(){//스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
  //console.log(scroll);
  
  if(scroll>100){//스크롤300까지 내리면
      $('#headerArea').addClass('on');
  } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
      $('#headerArea').removeClass('on');
  };
});

// navigation
let op = false;  // 네비가 열려있으면(true) 닫혀있으면(false)
  
$(".menuTrigger").click(function(e) { // 메뉴버튼 클릭시
    e.preventDefault();
    
    let documentHeight =  $(document).height();
    // $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비의 높이로 반환

    if(op==false){ // 네비가 닫혀있는 상태에서 클릭
      $("#gnb").animate({left:0,opacity:1}, 'fast');
      $('#headerArea').addClass('mnOpen');
      $('body').css({overflow:"hidden"});
      op=true;
    }else{ // 네비가 열려있는 상태에서 클릭
      $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
      $('#headerArea').removeClass('mnOpen');
      $('body').css({overflow:"auto"});
      op=false;
    }
});

  // 2depth 메뉴 교대로 열기 처리 
  var onoff=[false,false,false,false]; // 각각의 메뉴가 닫혀있으면(false) / 열려있으면(true)
  var arrcount=onoff.length;  // 메뉴의개수 4
  
  $('.depth1 ul').slideUp('fast'); // 다 닫아두기

  $('#gnb .depth1 h3 a').click(function(e){  // 1depth 메뉴를 각각 클릭하면
    e.preventDefault();
      var ind=$(this).parents('.depth1').index();
      
    if(onoff[ind]==false){
      // $('#gnb .depth1 ul').hide();
      $(this).parents('.depth1').find('ul').slideDown('fast'); // 클릭한 해당 메뉴의 2depth를 열여라
      $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); // 나머지 메뉴의 서브를 다 닫아라
      for(var i=0; i<arrcount; i++) {
        onoff[i]=false; // 모든 메뉴의 상태를 false
      }
      onoff[ind]=true;  // 자신의 상태만 true
        
      $('.depth1 i').attr('class','fa-solid fa-chevron-down');   
      $(this).find('i').attr('class','fa-solid fa-chevron-up');   
          
    }else{  // 클릭한 해당메뉴가 open
      $(this).parents('.depth1').find('ul').slideUp('fast'); // 자신의 서브메뉴만 닫아라
      onoff[ind]=false;   
        
      $(this).find('i').attr('class','fa-solid fa-chevron-down');     
    }
  }); 

// familysite
$('.family .open').toggle(function(e){
  e.preventDefault();
  $('.family ul').stop().slideDown(200);

}, function(e){
  e.preventDefault();
  $('.family ul').stop().slideUp(200);
});

// topmove
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  
  if(scroll > 350){ // 350이상의 거리가 발생되면
      $('.topMove').fadeIn('slow');  // top 보이기    
  }else{
      $('.topMove').fadeOut('fast'); // top 감추기
  }
});

$('.topMove').click(function(e){
  e.preventDefault();
  $("html,body").stop().animate({"scrollTop":0}, 500);
});

$('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열기
$('.tabNav .tab1').css('background','#c01').css('color','#fff'); //첫번째 탭메뉴 활성화
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$('.tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        let ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다

        $(".contlist").hide(); //모든 탭내용을 안보이게...
        $(".contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color', '#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#c01').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

});


