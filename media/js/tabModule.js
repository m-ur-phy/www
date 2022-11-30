// tab 기능을 module로 불러와보자
const tab = () => {

    let tabBtn = document.querySelectorAll('.tabBtn li');
    let tabList = document.querySelectorAll('.contlist');
  
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
}

export default tab();