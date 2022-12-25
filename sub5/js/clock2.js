// time
        
var nowTime = document.querySelector('.nowTime');
var canTime = document.querySelector('.canTime')
var d = [], h = 0, m = 0;
var ap = '';

// 요일 미리 지정하기
d[0] = '일';
d[1] = '월';
d[2] = '화';
d[3] = '수';
d[4] = '목';
d[5] = '금';
d[6] = '토';

function clock1(){
        var now = new Date();
        var day = d[now.getDay()];
        var can = ''; // 가능 불가능을 담아주는 변수

        h = now.getHours(); // 0 ~ 23
        m = now.getMinutes();
        s = now.getSeconds();
        console.log(h);
        // 금호아트홀 조건
        if(day === '일'){
                can = '불가능';
                canTime.innerHTML='지금은 입장 '+ can +'합니다';
        } else if(day === '토'){
                if(h<14 || h>22){
                        can = '불가능';
                        canTime.innerHTML='지금은 입장 '+ can +'합니다';
                }else{
                        can = '가능';
                        canTime.innerHTML='지금은 입장 '+ can +'합니다';
                }
        } else if(h<9 || h>18){
                can = '불가능';
                canTime.innerHTML='지금은 입장이 <span>'+ can +'</span>합니다';
        }else{
                can = '가능';
                canTime.innerHTML='지금은 입장이 <span>'+ can +'</span>합니다';
        }
        
        // 오전 오후 만들기
        if(h < 12){
                ap = '오전';
        } else {
                ap = '오후';
        }

        if(h > 12){
                h -= 12;
        }

        // 두자리 시간 만들기
        if(h < 10){
                h = '0' + h;
        }
        if(m < 10){
                m = '0' + m;
        }
        if(s < 10){
                s = '0' + s;
        }
        nowTime.innerHTML ='현재는 '+day+'요일 <span>'+ ap +' '+h+'시 ' + m +'분 '+ s +'초</span> 입니다';
        
        
        
        
}

setInterval(clock1, 1000);


