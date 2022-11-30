
// 변수 설정 (많이쓰는 것 위주)
let screenSize, screenHeight;
const headerArea = document.querySelector('#headerArea');
const gnb = document.querySelector('#gnb');
const menuTrigger = document.querySelector('.menuTrigger');
const contentArea = document.querySelector('#contentArea');
const section = document.querySelectorAll("section");
const topTrigger = document.querySelector('.top');
const downTrigger = document.querySelector('.down');

const videoBG = document.querySelector('#videoBG');
const imgBG = document.querySelector('#imgBG');

// Show and Hide 함수
// Show
const show = function (elem) {
	elem.style.display = 'block';
};

// Hide
const hide = function (elem) {
	elem.style.display = 'none';
};


// navigation
let navCurrent = 0;
function screenW(){
    screenSize = window.innerWidth;
    screenHeight = window.innerHeight;
    if (screenSize > 640){
        show(gnb);
        navCurrent = 1;
    }
    if (navCurrent == 1 && screenSize < 640){
        hide(gnb);
        navCurrent = 0;
    }

}

window.addEventListener("resize", screenW);

// 햄버거메뉴
let op = false; //네비가 열려있으면(true) 닫혀있으면(false)
menuTrigger.addEventListener('click', function(e){
    e.preventDefault();

    if(op == false) {
        show(gnb);
        gnb.animate([
            { left: "-100%" },
            { left: "0" }
        ], {
            duration: 200,
            fill: "forwards"
        });
        headerArea.classList.add('mnOpen');
        op=true;     
    } else {
        gnb.animate([
            { left: "0"},
            { left: "-100%"}
        ], {
            duration: 200,
            fill: "forwards"
        });
        headerArea.classList.remove('mnOpen');   
        op=false;  
    }
});

// top
topTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo( {top: 0, behavior: "smooth"});
});

downTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: screenHeight, behavior: "smooth"});
})

// window.onload = function () {
//     // scroll 통합
//     // 스크롤 변수 정의
//     // 윈도우 높이 
//     // 각 스크롤 적용할 부분의 top 값 구하는 법
//     const sectionMove = function () {
//         for(let i = 0; i < section.length; i++){
//             if(screenHeight > section[i].getBoundingClientRect().top){
//                 section[i].classList.add("move");
//             } 
//             // else {
//             //     section[i].classList.remove("move");
//             // }
//         }
//     }

//     window.addEventListener("scroll", sectionMove);
// }