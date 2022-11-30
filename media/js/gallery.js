// ajax
let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {  
  if(xhr.status === 200) { 
    responseObject = JSON.parse(xhr.responseText);

    // about
    let gallery = '';
    gallery += `<h3>Gallery</h3>
    <p>Enjoy BLACKPINK's great pictures Isn't it amazing? I really like BLACKPINK. The person who created this page is a big fan who has been a big fan of BLACKPINK since their debut and who usually only listens to BLACKPINK songs.</p>
    <ul class="galleryList">`
    for (let i = 0; i < responseObject.gallery.length; i++) { 
      let $Title = responseObject.gallery[i].title;
      let $Con = responseObject.gallery[i].con;
      let $Src = responseObject.gallery[i].src;
      gallery += `<li>
      <img src="${$Src}" alt="">
      <dl>
          <dt>${$Title}</dt>
          <dd>${$Con}</dd>
      </dl>
  </li>` 
    }
    gallery += `</ul>`
    document.querySelector('.galleryBox').innerHTML = gallery;
  }
};

xhr.open('GET', './data/info.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.  