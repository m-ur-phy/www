// sub2_3
const swiper = new Swiper('.swiper-container', {
  // 방향 설정
  direction: 'horizontal',
  // 한번에 보여지는 페이지 수
  slidesPerView: 3,
  // 페이지와 페이지 사이 간격 30px
  spaceBetween: 30,
  // 드래그 기능 
  debugger: true,
  // 마우스 휠 기능
  mousewheel: true,
  // 무한루프 기능
  loop: true,
  // 선택된 슬라이드를 중심으로 배치하기
  centeredSlides: true,
  // 자동 스크를링
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // 페이지네이션
  pagination: {
    // 페이지 기능
    el: '.swiper-pagination',
    // 클릭 기능
    clickable: true,
  },
  // 화살표
  navigation: {
    // 다음페이지 설정
    nextEl: '.swiper-button-next',
    // 이전페이지 설정
    prevEl: '.swiper-button-prev',
  },
});
    
$(".autoStart").on("click", function(e) {
  e.preventDefault();
  swiper.autoplay.start();
});

$(".autoStop").on("click", function(e) {
  e.preventDefault();
  swiper.autoplay.stop();
});