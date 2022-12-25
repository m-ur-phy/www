// sub3 tab
$('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열기
$('.tabNav .tab1').css('background','#c01').css('color','#fff'); //첫번째 탭메뉴 활성화
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$('.tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        var ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다

        $(".contlist").hide(); //모든 탭내용을 안보이게
        $(".contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color', '#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#c01').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

});


// sub3_4
// gallery ajax
var modernData = [];
var designData = [];

function modernArtPrint(i){
    $.ajax({
        method: 'get',
        url: './data/data.json',
        dataType: 'jSon',
        success: function(data){
            modernData = data.modernWorks;
            
            var $ArtistName = modernData[i].artistName;
            var $Title = modernData[i].title;
            var $ArtPic = modernData[i].artPic;
            

            var txt = '<li>';
            txt += '<img src="'+ $ArtPic +'" alt="">';
            txt += '<p>';
            txt += '<span>'+$ArtistName+'</span>';
            txt += ' - ';
            txt += '<span>'+$Title+'</span>';
            txt += '</p>'
            txt += '</li>'
            $('.modernMain').html(txt).hide().stop().fadeIn('slow');
        }
    })
}

modernArtPrint(0);

$('.modernSub li a').click(function(e){
    e.preventDefault();
    var ind = $(this).index('.modernSub li a');

    modernArtPrint(ind);

});

function designArtPrint(i){
    $.ajax({
        method: 'get',
        url: './data/data.json',
        dataType: 'jSon',
        success: function(data){
            designData = data.designWorks;
            
            var $Title = designData[i].title;
            var $Num = designData[i].num;
            var $ArtPic = designData[i].artPic;

            var txt = '<li>';
            txt += '<img src="'+ $ArtPic +'" alt="">';
            txt += '<p>';
            txt += '<span>'+$Title+'</span>';
            txt += ' - ';
            txt += '<span>'+$Num+'</span>';
            txt += '</p>'
            txt += '</li>'
            $('.designMain').html(txt).hide().stop().fadeIn('slow');
        }
    })
}

designArtPrint(0);

$('.designSub li a').click(function(e){
    e.preventDefault();
    var ind = $(this).index('.designSub li a');

    designArtPrint(ind);
})



