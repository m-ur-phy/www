// ajax
let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {  
  if(xhr.status === 200) { 
    responseObject = JSON.parse(xhr.responseText);

    // about
    let worldTour = '';
    worldTour += `<h3>WOLRD TOUR</h3>
                  <p>
                    From a pre-release single to a full album, and a world tour… <br>
                    Attention is being drawn to what kind of history they will write through their mega-scale project.
                  </p>
                  <ul class="worldTourList">`
    for (let i = 0; i < responseObject.worldtour.length; i++) { 
      let $Day = responseObject.worldtour[i].day;
      let $Country = responseObject.worldtour[i].country;
      let $Place = responseObject.worldtour[i].place;
      let $Link = responseObject.worldtour[i].link;
      worldTour +=  `<li>
                      <dl>
                        <dt>${$Country}</dt>
                        <dd>${$Day}</dd>
                        <dd>${$Place}</dd>
                        <dd><a class="more" href="${$Link}">VIEW MORE</a></dd>
                      </dl>
                    </li>`
    }
    worldTour += `</ul>`
    document.querySelector('.aboutTour').innerHTML = worldTour;


    // 
  }
};

xhr.open('GET', './data/info.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.  

// about ////////////////////////////////////////////////////
// audio
window.onload = function () {
  let playBtn = document.querySelectorAll('.playBtn');
  let audio = new Audio();
  let audioSrc = ["./audio/paganini.mp3", "./audio/shutdown.mp3"]; 
  let audioOnOff = 0;

  playBtn.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
    e.preventDefault();
    audio.src = audioSrc[idx]; // new Audio 수정을 해줍시다.
    
    if(audioOnOff == 0) {
      audio.currentTime = 0;
      audio.play();
      audioOnOff = 1;
      playBtn[idx].innerHTML ='<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>';
      playBtn[idx].classList.add('on');
      
    } else if(audioOnOff == 1) {
      audio.pause();
      audioOnOff = 0;
      playBtn[idx].innerHTML ='<span class="hidden">play</span><i class="fa-solid fa-play"></i>';
      playBtn[idx].classList.remove('on');
    }
  })
})

}
// 여기서 디벨롭, 위의 결과를 ^^
// let audio1 = new Audio("./audio/paganini.mp3");
// let audio2 = new Audio("./audio/shutdown.mp3");
// playBtn.forEach((btn, idx) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     if(audioOnOff == 0) {
//       audioOnOff = 1;
//       playBtn[idx].innerHTML ='<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>';
//       if(idx == 0) {
//         audio1.play();
//       } else if (idx == 1) {
//         audio2.play();
//       }
//     } else if(audioOnOff == 1) {
//       audioOnOff = 0;
//       playBtn[idx].innerHTML ='<span class="hidden">play</span><i class="fa-solid fa-play"></i>';
//       if(idx == 0) {
//         audio1.pause();
//       } else if (idx == 1) {
//         audio2.pause();
//       }
//     }
//   })
// })
