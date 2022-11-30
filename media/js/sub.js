let pageTtl = document.querySelector('.pageTtl')

// screen resize
function screen_size(){
  screenSize = window.innerWidth; //스크린의 너비
  screenHeight = window.innerHeight;  //스크린의 높이
  
  contentArea.style['margin-top'] = screenHeight + 'px';
  show(imgBG);
  pageTtl.style['height'] = screenHeight + 'px';

  if(screenSize > 1024){
    // wide
  }else if(screenSize > 768 && screenSize <= 1024) {
    // tablet
  } else if(screenSize > 640 && screenSize <= 768) {
    // mini tablet
  } else if(screenSize <= 640 ) {
    // mobile
  }

}

screen_size();  //최초 실행시 호출
window.addEventListener("resize", screen_size);


