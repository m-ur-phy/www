// // sub_scroll
// $(window).on('scroll',function(){
//     let scroll = $(window).scrollTop();
//     let moveCon = [];
//     let secNum = Number($('.moveToTop').length);
//         for(let i = 0; i < secNum; i++ ){
//             moveCon[i] = $('.moveToTop:eq('+i+')');
//             if(scroll > moveCon[i].offset().top - 400){
//                 $('.moveToTop:eq('+i+')').addClass('move');
//             } else {
//                 $('.moveToTop:eq('+i+')').removeClass('move');
//             }
//         }
// });