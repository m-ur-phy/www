// 메인 비주얼
var timeonoff;   // 타이머
var imageCount=$('.gallery ul li').size();   // 이미지의 총 개수를 구한다
var cnt=1;   // 이미지 순서 1 2 3 1 2 3 ...
var onoff=true; // true == 타이머 동작, false == 타이머 미동작

$(".gallery .con li").hide(); // 전부 hide()

$('.btn1').css('width', 50); // 버튼 너비 감소시키기
$('.btn1').addClass('on'); // 첫번째 버튼 on

$('.gallery .link1').fadeIn('slow'); // 첫번째 이미지 on
$('.gallery .link1 .slogan').css('top',400).css('opacity',0);
$('.gallery .link1 .slogan').delay(1000).animate({top:300, opacity:1},'slow');

function moveg(){
  if(cnt==imageCount+1)cnt=1;
  if(cnt==imageCount)cnt=0;  // 카운트 초기화 이미지가 전부 카운트 되면 다시 0으로

  cnt++;  // 카운트 1씩 증가

  $('.gallery li').hide(); // 모든 이미지를 보이지 않게한다
  $('.gallery .link'+cnt).fadeIn('slow'); // 현재 cnt 의 이미지만
  
  $('.btn1').addClass('on'); // 첫번째 버튼 on
  $('.mbutton').removeClass('on'); // 버튼 전부 off
  $('.mbutton').css('width', 100); // 버튼 원래의 너비
  $('.btn'+cnt).addClass('on'); // 해당 버튼 on
  $('.btn'+cnt).css('width', 50);    

  $('.gallery li .slogan').css('top',400).css('opacity',0);
  $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

    if(cnt==imageCount)cnt=0;  // 카운트 0으로 초기화
}

timeonoff= setInterval(moveg , 4000);// 타이머 동작 이미지를 순서대로 자동 처리
  // var 변수 = setInterval( function(){처리코드} , 4000);  // 해당 처리 코드의 정보를 변수에 담아놓는다
  // clearInterval(변수); -> setInterval 없애버리기


$('.mbutton').click(function(event){  // 각각 버튼을 클릭했을 때
  var $target=$(event.target); // 클릭한 버튼 $target == $(this)
  clearInterval(timeonoff); // 타이머 중지     

  //  for(var i=1;i<=imageCount;i++){
  //      $('.gallery .link'+i).hide(); // 모든 이미지를 hide() 처리한다
  //    } 
  $('.gallery li').hide(); // 모든 이미지를 hide() 처리한다

  if($target.is('.btn1')){  // 첫번째 버튼 클릭시
    cnt=1;  // 클릭한 해당 카운트를 담아놓는다
  }else if($target.is('.btn2')){  // 두번째 버튼 클릭시
    cnt=2; 
  }else if($target.is('.btn3')){ 
    cnt=3; 
  }

  $('.gallery .link'+cnt).fadeIn('slow');  // 자기 자신만 이미지가 보인다

  // for(var i=1;i<=imageCount;i++){
  //   $('.btn'+i).css('background','#00f'); // 버튼 모두 off
  //   $('.btn'+i).css('width','16');
  // }
  $('.mbutton').removeClass('on'); // 버튼 모두 off
  $('.mbutton').css('width',100);
  $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
  $('.btn'+cnt).css('width',50);

  $('.gallery li .slogan').css('top',400).css('opacity',0);
  $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

  if(cnt==imageCount)cnt=0;  // 카운트 초기화

  timeonoff= setInterval( moveg , 4000); // 타이머 부활

  if(onoff==false){ // 만약 타이머가 멈춰있다면,
    onoff=true; // 동작
    $('.ps').html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
  }

});



// stop play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
  if(onoff==true){ // 타이머가 동작 중일 때
    clearInterval(timeonoff);   // stop 버튼 클릭시 clearInterval
    $(this).html('<span class="hidden">시작하기</span><i class="fa-solid fa-play"></i>');
    onoff=false;   
  }else{  // 타이머가 중지 상태일 때
    timeonoff= setInterval( moveg , 4000); // play 버튼 클릭시 setInterval 부활
    $(this).html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
    onoff=true; 
  }
});	

// 왼쪽 오른쪽 버튼 처리
$('.main .btn').click(function(){

  clearInterval(timeonoff); // 타이머 중지시키기

  if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
    if(cnt==imageCount)cnt=0;  // 카운트가 마지막 번호 라면 초기화 한다
    //if(cnt==imageCount+1)cnt=1;  
    cnt++; // 카운트 증가
  }else if($(this).is('.btnLeft')){  // 왼쪽 버튼 클릭
    if(cnt==1)cnt=imageCount+1;   // 1->4  최초 클릭시 오류 방지
    if(cnt==0)cnt=imageCount;
    cnt--; // 카운트 감소
  }

  // for(var i=1;i<=imageCount;i++){
  //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  // }
  $('.gallery li').hide(); // 모든 이미지 hide()
  $('.gallery .link'+cnt).fadeIn('slow'); // 해당 cnt 이미지만 보이게
                      
  $('.mbutton').removeClass('on'); // 버튼 모두 off
  $('.mbutton').css('width',100);
  $('.btn'+cnt).addClass('on'); // 자신만 on
  $('.btn'+cnt).css('width',50);

  $('.gallery li .slogan').css('top',400).css('opacity',0);
  $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({top:300, opacity:1},'slow');

  // if($(this).is('.btnRight')){
  //   if(cnt==imageCount)cnt=0;
  // }else if($(this).is('.btnLeft')){
  //   if(cnt==1)cnt=imageCount+1;
  // }

  timeonoff= setInterval( moveg , 4000); // 부활

  if(onoff==false){
    onoff=true;
    $('.ps').html('<span class="hidden">멈추기</span><i class="fa-solid fa-pause"></i></i>');
  }
});



