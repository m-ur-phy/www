// intro
const pageIntro = document.querySelector('.pageIntro');
const content = "매일의 힘을 믿으니까, ROUNDLAB"
const introTxt = document.querySelector(".introTxt")
let index = 0;

// typing 효과
function typing() {
  if (index < content.length) {
    let txt = content.charAt(index);
    introTxt.innerHTML += txt;
    index++;
  }
}
setInterval(typing, 100)

// 5초 뒤 none
setTimeout(function(){
  pageIntro.style.display = 'none'
}, 4000);

let tabBtn = document.querySelectorAll('.tabBtn li');
let tabList = document.querySelectorAll('.contList');
  
    tabBtn.forEach((tab, idx) => {
      tab.addEventListener('click', function(e){
        e.preventDefault();
        tabList.forEach((content) => {
          content.classList.remove('active')
        })
        tabBtn.forEach((btn) => {
          btn.classList.remove('active')
        })
        tabBtn[idx].classList.add('active')
        tabList[idx].classList.add('active')
      })
    })

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 1,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },
    },
  });

// scroll
const winH = window.innerHeight;

const section = document.querySelectorAll("section");
const sectionMove = function () {
    for(let i = 0; i < section.length; i++){
        if(winH > section[i].getBoundingClientRect().top){
          section[i].classList.add("move");
            
        } else {
          section[i].classList.remove("move");
        }
    }
}

addEventListener("scroll", sectionMove);

// story scroll
const story = document.querySelectorAll(".story li");
const storyMove = function () {
  for(let i = 0; i < story.length; i++){
      if(winH > story[i].getBoundingClientRect().top){
        story[i].classList.add("move");
          
      } else {
        story[i].classList.remove("move");
      }
  }
}

addEventListener("scroll", storyMove);

// product scroll
const findProduct = document.querySelector(".findProduct");
const findMove = function () {
      if(winH > findProduct.getBoundingClientRect().top){
        findProduct.classList.add("move");
          
      } else {
        findProduct.classList.remove("move");
      }
}

addEventListener("scroll", findMove);



// productPopUp
// ajax
const productList = document.querySelectorAll(".swiper-slide");
const popUp = document.querySelector(".popUp");
const popUpBg = document.querySelector(".popUpBg");


let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {  
    if(xhr.status === 200) { 
        responseObject = JSON.parse(xhr.responseText);

        
        // about
        productList.forEach((list, idx) => {
            list.addEventListener('click', (e) => {
            e.preventDefault();
            
            let pop = '';
            let $Name = responseObject.best[idx].name;
            let $Price = responseObject.best[idx].price;
            let $Txt = responseObject.best[idx].txt;
            let $Img1 = responseObject.best[idx].image1;
            let $Img2 = responseObject.best[idx].image2;
            
            pop += `<div class="popUpImage">
                        <div class="image on"><img src="${$Img1}" alt="" class="img-fluid"></div>
                        <div class="hoverImage"><img src="${$Img2}" alt="" class="img-fluid"></div>
                        <ul class="popUpBtn list-unstyled">
                            <li class="active"><a href="#">PRODUCT</a></li>
                            <li><a href="#">TEXTURE</a></li>
                        </ul>
                    </div>
                    <dl class="popTxt">
                        <dt>${$Name}</dt>
                        <dd>소비자가 : <span>${$Price} 원</span></dd>
                        <dd>판매가 : <strong>${$Price * 0.8} 원</strong></dd>
                        <dd>${$Txt}</dd>
                    </dl>
                    <a href="#" class="closeBtn"><span class="hidden">close</span><i class="bi bi-x-lg"></i></a>`

            popUp.innerHTML = pop;
            
            // 생성 된 이후에 checking 이 안되었는데, click event 내부에 변수 설정 및 새로운 event를 설정해주니 되었다.
            let closeBtn = popUp.querySelector(".closeBtn");
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                    popUp.style.display = 'none';
                    popUp.innerHTML = '';
                    popUpBg.style.display = 'none';
            })

            popUpBg.addEventListener('click', (e) => {
              e.preventDefault();
              popUp.style.display = 'none';
              popUp.innerHTML = '';
              popUpBg.style.display = 'none';
            })

            let popUpBtn = popUp.querySelectorAll(".popUpBtn li");
            let imgList = popUp.querySelectorAll(".popUpImage div");
            popUpBtn.forEach((btn, idx) => {
              btn.addEventListener('click', function(e){
                e.preventDefault();
                imgList.forEach((content) => {
                  content.classList.remove('on')
                })
                popUpBtn.forEach((btn) => {
                  btn.classList.remove('active')
                })
                imgList[idx].classList.add('on')
                popUpBtn[idx].classList.add('active')
              })
            });

            popUp.style.display = 'block';
            popUp.style.display = 'flex';
            popUpBg.style.display = 'block';

            })
        })
    }
};

xhr.open('GET', './data/product.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.  

window.onload = function() {
    
}

// top
const topBtn = document.querySelector(".topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

