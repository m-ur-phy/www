let pic1 = document.querySelector('.memberList li:nth-child(1) img');
let pic1Con = document.querySelector('.memberList li:nth-child(1) dl');
let pic2 = document.querySelector('.memberList li:nth-child(2) img');
let pic2Con = document.querySelector('.memberList li:nth-child(2) dl');
let intro = document.querySelector('.intro');

let current=false;
function screen_size(){

  screenSize = window.innerWidth; //스크린의 너비
  screenHeight = window.innerHeight; //스크린의 높이

  contentArea.style['margin-top'] = screenHeight + 'px';

  if(screenSize > 768 && current==false) {
    show(videoBG);
    hide(imgBG);
    videoBG.setAttribute('src', './images/main.mp4');
    current = true;
  }
  if(screenSize <= 768) {
    hide(videoBG);
    show(imgBG);
    videoBG.setAttribute('src', '');
    current = false;
  }
  if(screenSize <= 1024) {
    pic1.setAttribute('src', './images/rosa.jpg');
    pic1Con.innerHTML = ` <dt>ROSE AND LISA</dt>
                          <dd>Rose and Lisa were born in a foreign country and debuted after a long trainee life in Korea.</dd>`

    pic2.setAttribute('src', './images/jenji.jpg');
    pic2Con.innerHTML = ` <dt>JENNIE AND JISOO</dt>
                          <dd>Jenny and jisoo were born in Korea and debuted after a long trainee life in yg.</dd>`

    
  } else if (screenSize >= 1024) {
    pic1.setAttribute('src', './images/lisa.jpg');
    pic1Con.innerHTML = ` <dt>LISA</dt>
                          <dd>Lalisa Manoban (born March 27, 1997) is a Thai rapper, singer and dancer based in South Korea.</dd>`

    pic2.setAttribute('src', './images/rose.jpg');
    pic2Con.innerHTML = ` <dt>ROSE</dt>
                          <dd>Roseanne Park (born February 11, 1997) is a Korean-New Zealand singer and dancer based in South Korea.</dd>`

  }
  if(screenSize <= 640) {
    pic1.setAttribute('src', './images/member_all.jpg');
    pic1Con.innerHTML = ` <dt>BLACKPINK</dt>
                          <dd>All the members became top stars called blackpink after a hard time as a trainee.</dd>`
  }

}

  screen_size();  //최초 실행시 호출
  
  window.addEventListener("resize", screen_size);

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   let move = function () {
//         if(screenHeight > intro.getBoundingClientRect().top){
//             intro.classList.add("move");
//         } 
        
//   }


// window.addEventListener("scroll", move);

// text visual
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "BLACK",
  "PINK",
  "IN",
  "YOUR",
  "AREA"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1100;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();
  
