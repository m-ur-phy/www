// youtube popup
// ajax
const videoList = document.querySelectorAll(".videoList li");
const videoPop = document.querySelector(".videoPop");
const videoPopBg = document.querySelector(".videoPopBg");


let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {  
    if(xhr.status === 200) { 
        responseObject = JSON.parse(xhr.responseText);

        
        // about
        videoList.forEach((list, idx) => {
            list.addEventListener('click', (e) => {
            e.preventDefault();
            
            let videopop = '';
            let $Title = responseObject.video[idx].title;
            let $Con = responseObject.video[idx].con;
            let $Link = responseObject.video[idx].link;
            let $Iframe = responseObject.video[idx].iframe;
            
            videopop += `<div class="youtubeBox">
                            <div>
                                ${$Iframe}
                            </div>
                        </div>
                        <dl class="popCon">
                            <dt>${$Title}</dt>
                            <dd>
                                <p>${$Con}</p>
                                <a href="${$Link}" target="_blank" title="open new window">Watch it on YouTube <i class="fa-brands fa-youtube"></i></a>
                            </dd>
                        </dl>
                        <a href="#" class="closeBtn"><span class="hidden">close</span><i class="fa-solid fa-xmark"></i></a>`

            videoPop.innerHTML = videopop;
            
            // 생성 된 이후에 checking 이 안되었는데, click event 내부에 변수 설정 및 새로운 event를 설정해주니 되었다.
            let closeBtn = videoPop.querySelector(".closeBtn");
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                    hide(videoPop);
                    videoPop.innerHTML = '';
                    hide(videoPopBg);
            })

            videoPopBg.addEventListener('click', (e) => {
                e.preventDefault();
                    hide(videoPop);
                    videoPop.innerHTML = '';
                    hide(videoPopBg);
            })

            show(videoPop);
            videoPop.style.display = 'flex';

            show(videoPopBg);
            })
            
            
        })
    }
};

xhr.open('GET', './data/info.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.  

window.onload = function() {
    
}

// player 만들기~
const musicWrap = document.querySelector(".playerWrap");
const musicImg = musicWrap.querySelector(".playerImg img");
const musicName = musicWrap.querySelector(".playInfo .name");
const musicArtist = musicWrap.querySelector(".playInfo .artist");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#controlPlay");
const musicPrevBtn = musicWrap.querySelector("#controlPrev");
const musicNextBtn = musicWrap.querySelector("#controlNext");
const musicProgress = musicWrap.querySelector(".playerProgress");
const musicProgressBar = musicProgress.querySelector(".bar");
const musicProgressCurrent = musicProgress.querySelector(".current");
const musicProgressDuration = musicProgress.querySelector(".duration");
const MusicListBtn = musicWrap.querySelector("#controlList");

let musicIndex = 1;

// 음악과 관련된 모든 것 load
function loadMusic(num){
    musicImg.src = `./images/video/${allMusic[num - 1].img}.png`;
    musicImg.alt = `${allMusic[num - 1].img}`;
    musicName.innerText = allMusic[num - 1].name;
    musicArtist.innerText = allMusic[num - 1].artist;
    musicAudio.src = `./audio/${allMusic[num - 1].audio}.mp3`;
}

// 플레이
function playMusic(){
    musicWrap.classList.add("paused");
    musicPlay.innerText = "pause";
    musicPlay.setAttribute("title", "일시정지")
    musicAudio.play();
}

// 일시정지
function pauseMusic(){
    musicWrap.classList.remove("paused");
    musicPlay.innerText = "play_arrow";
    musicPlay.setAttribute("title", "재생")
    musicAudio.pause();
}

// 이전곡 듣기
function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// 다음곡 듣기
function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// 음악 progress bar
musicAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/duration) * 100;
    musicProgressBar.style.width = `${progressWidth}%`

    musicAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;

        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    })

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

// 진행
musicProgress.addEventListener("click", e=>{
    let progressWidth = musicProgress.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = musicAudio.duration;
    
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})

// 재생 일시정지
musicPlay.addEventListener("click", ()=>{
    const isMusicPaused = musicWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
})

musicPrevBtn.addEventListener("click", ()=>{
    prevMusic();
});
musicNextBtn.addEventListener("click", ()=>{
    nextMusic();
});


// 음악 끝난 뒤
musicAudio.addEventListener("ended", ()=>{
    let getText = musicRepeat.innerText;

    switch(getText){
        case "repeat" :
            nextMusic();
        break;

        case "repeat_one" : 
            loadMusic(musicIndex);
            playMusic();
        break;

        case "shuffle" : 
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
        break;
    }
})

// 창이 열리면 노래 시작
window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
});