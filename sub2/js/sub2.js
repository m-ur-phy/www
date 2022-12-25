// sub2 tab
$('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열기
$('.tabNav .tab1').css('background','#c01').css('color','#fff'); //첫번째 탭메뉴 활성화
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$('.tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        var ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다

        $(".contlist").hide(); //모든 탭내용을 안보이게...
        $(".contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color', '#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#c01').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

});

// sub2_2
// artSupport
//객체배열(json)
var artistData = [];

function artistPrint(i){
        $.ajax({
                method: 'get',
                url: './data/sub2_data.json',
                dataType: 'json',
                success: function(data){
                        artistData = data.artistData;

                        var $Job = artistData[i].job;
                        var $MusicianPic = artistData[i].musicianPic;
                        var $MusicianName = artistData[i].musicianName;
                        var $Instrument = artistData[i].instrument;
                        var $Des = artistData[i].des;

                        var txt = '<dl>';
                        txt += '<dt>'+$Job+'</dt>';
                        txt += '<dd><img src="'+ $MusicianPic +'" alt="">';
                        txt += '<span><span>'+$Instrument+'</span>'+$MusicianName+'</span></dd>';
                        txt += '<dd>'+$Des+'</dd>';
                        txt += '</dl>';

                        $('.popUpTxt').html(txt).hide().stop().fadeIn('slow');
                }
        })
}

$('.popMenu li a').click(function(e){
        e.preventDefault();
        var popUpInd = $(this).index('.popMenu li a');  // 0 1 2 3
        
        $('.modalBox').fadeIn('fast');
        $('.popUp').fadeIn('fast');

        artistPrint(popUpInd);
});

$('.popUpCloseBtn, .popMenu .modalBox').click(function(e){
        e.preventDefault();
        $('.popMenu .modalBox').hide();
        $('.popMenu .popUp').hide();
});