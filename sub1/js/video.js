$.ajax({
    url: './data/video.json',
    dataType : 'json',
    success : function(data){
        var useVideo = data.video;
        var ind = 0;

        function videoPrint(){

            var videomain = '<iframe width="900" height="500" src="' + useVideo[0].youtube + '?rel=0" frameborder="0" allowfullscreen></iframe>';
            videomain += '<dl>';
            videomain += '<dt>' + useVideo[0].title + '</dt>';
            videomain += '<dd>' + useVideo[0].con + '</dd>';

            var videotxt ='';
            for(var i in useVideo){
                videotxt += '<li><a href="#">';
                videotxt += '<div class="image"><img src="'+ useVideo[i].image +'" alt="'+ useVideo[i].title +'"><i class="fa-brands fa-youtube"></i></div>';
                videotxt += '<dl>'
                videotxt += '<dt>' + useVideo[i].title + '</dt>';
                videotxt += '<dd>' + useVideo[i].con + '</dd>';
                videotxt += '</dl>'
                videotxt += '</a></li>';
            }

            $('.mainVideo').html(videomain);
            $('.videoList').html(videotxt);
        };
        videoPrint();

        $('.videoList li a').click(function(e){
            e.preventDefault();

            var scrollvalue = $('.mainVideo').offset().top - 150;
            ind = $(this).index('.videoList li a');

            $('.mainVideo iframe').attr('src', useVideo[ind].youtube);
            $('.mainVideo dl dt').html(useVideo[ind].title);
            $('.mainVideo dl dd').html(useVideo[ind].con);

            $("html,body").stop().animate({"scrollTop":scrollvalue},300); // 스크롤

        });


    }
});