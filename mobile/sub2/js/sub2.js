// sub2_1
//객체배열(json)
let musicianData = [];

function musicianPrint(i){
        $.ajax({
                method: 'get',
                url: './data/sub2_1data.json',
                dataType: 'json',
                success: function(data){
                        musicianData = data.musicianData;

                        let $Job = musicianData[i].job;
                        let $MusicianPic = musicianData[i].musicianPic;
                        let $MusicianName = musicianData[i].musicianName;
                        let $Instrument = musicianData[i].instrument;
                        let $Des = musicianData[i].des;

                        let txt = '<dl>';
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
        let popUpInd = $(this).index('.popMenu li a');  // 0 1 2 3
        
        $('.modalBox').fadeIn('fast');
        $('.popUp').fadeIn('fast');

        musicianPrint(popUpInd);
});

$('.popUpCloseBtn, .popMenu .modalBox').click(function(e){
        e.preventDefault();
        $('.popMenu .modalBox').hide();
        $('.popMenu .popUp').hide();
});


let artistData = [];

function artistPrint(i){
        $.ajax({
                method: 'get',
                url: './data/sub2_3data.json',
                dataType: 'json',
                success: function(data){
                        artistData = data.artistData;

                        let $Grade = artistData[i].grade;
                        let $ArtistPic = artistData[i].artistPic;
                        let $ArtistName = artistData[i].artistName;
                        let $Instrument = artistData[i].instrument;
                        let $School = artistData[i].school;
                        let $Achieve2021 = artistData[i].achieve2021;
                        let $Achieve2022 = artistData[i].achieve2022;

                        let txt = '<img src="'+ $ArtistPic +'" alt="">';

                        txt += '<div class="artistInfo">';
                        txt += '<dl>';
                        txt += '<dt>이름</dt>'
                        txt += '<dd>'+$ArtistName+'</dd>';
                        txt += '</dl>'

                        txt += '<dl>';
                        txt += '<dt>금호아티스트</dt>'
                        txt += '<dd>'+$Grade+'</dd>';
                        txt += '</dl>'

                        txt += '<dl>';
                        txt += '<dt>학력사항</dt>'
                        txt += '<dd>'+$School+'</dd>';
                        txt += '</dl>'

                        txt += '<dl>';
                        txt += '<dt>악기</dt>'
                        txt += '<dd>'+$Instrument+'</dd>';
                        txt += '</dl>'

                        txt += '<dl>'
                        txt += '<dt>2021수상경력</dt>'
                        txt += '<dd>'+$Achieve2021+'</dd>';
                        txt += '</dl>'

                        txt += '<dl>'
                        txt += '<dt>2022수상경력</dt>'
                        txt += '<dd>'+$Achieve2022+'</dd>';
                        txt += '</dl>'
                        txt += '</div>'

                        $('.artistPopUpTxt').html(txt).hide().stop().fadeIn('slow');

                        
                }
        })
        
}


$('.artistPopMenu li a').click(function(e){
        e.preventDefault();
        let popUpInd = $(this).index('.artistPopMenu li a'); // 0 1 2 3
        
        $('.artistModalBox').fadeIn('fast');
        $('.artistPopUp').fadeIn('fast');
        $('.artistPopBtn').fadeIn('fast');
        $('body').css({overflow:"hidden"});
        

        artistPrint(popUpInd);

        $('.artistPopBtn a').click(function(e){
                e.preventDefault();
        
                if($(this).hasClass('prev')){
                        if(popUpInd==0)popUpInd=artistData.length; 
                        popUpInd--;
                        artistPrint(popUpInd);
                        console.log(popUpInd);
                }else if($(this).hasClass('next')){
                        if(popUpInd==artistData.length-1)popUpInd=-1;
                        popUpInd++;
                        artistPrint(popUpInd);
                }
        });
});

$('.popUpCloseBtn, .artistModalBox').click(function(e){
        e.preventDefault();
        $('.artistModalBox').hide();
        $('.artistPopUp').hide();
        $('.artistPopBtn').hide();
        $('body').css({overflow:"auto"});
});
