$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll > $('.intro1').offset().top - 600){
        $('.intro1').addClass('moveToTop');
    } else {
        $('.intro1').removeClass('moveToTop');
    }

    const intro2Li = Number($('.intro2 li').length);
    for(var i = 0; i < intro2Li; i++){
        if(scroll > $('.intro2 li:eq('+i+')').offset().top - 600){
            $('.intro2 li:eq('+i+')').addClass('moveToTop');
        } else {
            $('.intro2 li:eq('+i+')').removeClass('moveToTop');
        }
    }
})


