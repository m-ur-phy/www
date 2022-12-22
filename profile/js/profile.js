$(document).ready(function(){
    	// 백그라운드 영상
	var screenSize, screenHeight;
	var current=0;

	function screen_size(){
		screenSize = $(window).width(); //스크린의 너비
		screenHeight = $(window).height();  //스크린의 높이

		$("#content").css('margin-top',screenHeight);
		if (screenSize > 1024) {
            // $("#headerArea #gnb").show();
            current = 1;
        }
        if (current == 1 && screenSize <= 1024) {
            // $("#headerArea #gnb").hide();
            current = 0;
        }

	}
	screen_size();  //최초 실행시 호출

	$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
		screen_size();
	});


	// nav
	var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
    $('.menu_open').toggle(function () {
        $('#headerArea #gnb').addClass('on');
        $('.menu_open').addClass('on');

    }, function () {
        $('#headerArea #gnb').removeClass();
        $('.menu_open').removeClass('on');
    });
	

	// $(window).on('mousemove', moveCircle);
	let mouseCursor = document.querySelector(".circle");
	//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
	window.addEventListener("scroll", cursor);
	window.addEventListener("mousemove", cursor);
	//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
	function cursor(e) {
		mouseCursor.style.left = e.pageX + "px";
		mouseCursor.style.top = e.pageY - scrollY + "px";
}
	const content = "안녕하세요, 프론트엔드 개발자 김유화 입니다. 저는 도전을 두려워 하지 않고 배움을 즐기는 성격이 강점입니다.".split("");
	let typingBool = false;
	let typingIdx = 0;

	// if(typingBool == false){
	// 	typingBool = true;
	// 	var tyInt = setInterval(typing, 100)
	// }

	function typing () {
		if (typingIdx < content.length) {
			$(".story_con p").append(content[typingIdx]);
			typingIdx++; 
		} 
		else{ 
			$(".story_con p").empty();
        	typingIdx = 0;
		} 
		}
		setInterval(typing, 100)

})