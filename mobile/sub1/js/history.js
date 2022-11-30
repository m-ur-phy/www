var history_onoff = false;
var history_tab =['1977 ~ 1993 <i class="fa-solid fa-caret-down"></i>', '1994 ~ 1999 <i class="fa-solid fa-caret-down"></i>', '2000 ~ 2009 <i class="fa-solid fa-caret-down"></i>', '2010 ~ 현재 <i class="fa-solid fa-caret-down"></i>'];

    $('.hisNavBox span').click(function(e){
        e.preventDefault();
        
        if(history_onoff == false){
            $('.hisNavBox ul').stop().slideDown();
            $(this).find('i').attr('class','fa-solid fa-caret-up'); 
            history_onoff = true;
        } else {
            $('.hisNavBox ul').stop().slideUp();
            $(this).find('i').attr('class','fa-solid fa-caret-down'); 
            history_onoff = false;
        }

    });


    
    $('.historyWrap .history').hide();
    $('.historyWrap .history:eq(0)').show();
$('.hisNavBox ul li a').click(function(e){
    e.preventDefault();
    let ind = $(this).index('.hisNavBox ul li a');

    $('.hisNavBox span').html(history_tab[ind]);

    $('.historyWrap .history').hide();
    $('.historyWrap .history:eq(' + ind + ')').show();

    $('.hisNavBox span').removeClass('on');
    $('.hisNavBox ul').stop().slideUp();
    history_onoff = false;
    
});