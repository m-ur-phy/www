var linkToggle = document.querySelectorAll('.toggle-btn');

for(i = 0; i < linkToggle.length; i++){
    linkToggle[i].addEventListener('click', function(event){
    
        event.preventDefault();
        // dataset? 사용자가 해당 요소에 커스텀 속성을 추가한 객체이다.
        console.log(this) // <a class-"toggle-btn" data-containger="toggle-1" href="#">
        // this.dataset.containger -> a 태그 안에 있는 data-containger="toggle-n" 을 가져온다.
        var container = document.getElementById(this.dataset.container); // id 는 해당 toggle container(토글박스) 의 id 로 지정해주었으므로 해당 container 의 id 가 들어감

        if (!container.classList.contains('active')) { // active 가 없으면
            
            container.classList.add('active'); // container 에 class active 추가

            container.style.height = 'auto'; // 원래 값으로 초기화
            var height = container.clientHeight + 'px'; // clientHeight -> border 를 제외한 요소의 padding 까지의 값
            container.style.height = '0px';

            setTimeout(function () {
                container.style.height = height;
            }, 0);
        
        } else { // active 가 있다면 (열려있는 상태)
            container.style.height = '0px';
            container.addEventListener('transitionend', function () { // transitioned -> transition 이 마무리 된 후 동작하게 하는 이벤트
                container.classList.remove('active');
            }, {
                once: true
            });
        }
    });
}