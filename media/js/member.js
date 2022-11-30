// ajax
const subMember = document.querySelector('.subMember');

let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {  
  if(xhr.status === 200) { 
    responseObject = JSON.parse(xhr.responseText);

    // about
    let member = '';
    member += ` <h3>MEMBER</h3>
                  <p>Blackpink is a South Korean girl band that was formed by YG Entertainment. Though the first member joined the label as a trainee in 2010, the group didn't make their debut until August of 2016, when they released their first single album, Square One.
                    As for the group's sound, it's mainly a mix of K-pop, EDM and hip hop, although some of their songs (like "As If It's Your Last") have been described as a "mixed genre of music."</p>
                  <ul class="subMemberList">`
    for (let i = 0; i < responseObject.member.length; i++) { 
      let $Name = responseObject.member[i].name;
      let $Realname = responseObject.member[i].realName;
      let $Birth = responseObject.member[i].birth;
      let $Height = responseObject.member[i].height;
      let $Weight = responseObject.member[i].weight;
      let $MBTI = responseObject.member[i].MBTI;
      let $Link = responseObject.member[i].link;

      member +=  `<li>
                    <section>
                      <h4>${$Name}</h4>
                      <ul class="memberEvent">
                        <li>
                          <dl>
                            <dt>${$Realname}</dt>
                            <dd>Birthday : ${$Birth}</dd>
                            <dd>Height : ${$Height} cm</dd>
                            <dd>Weight : ${$Weight} kg</dd>
                            <dd>MBTI : ${$MBTI}</dd>
                          </dl>
                        </li>
                        <li><div class="image roseSVG"><img src="${$Link}" alt=""></div></li>
                      </ul>
                    </section>
                  </li>`
    }
    member += `</ul>`
    subMember.innerHTML = member;
  }
};

xhr.open('GET', './data/info.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.

window.onload = function () {
  const memberEvent = document.querySelectorAll('.memberEvent')
  
  memberEvent.forEach((member, idx) => {
      member.addEventListener('click', (e) => {
      e.preventDefault();
      memberEvent[idx].classList.add('on');
    })
  })
}
