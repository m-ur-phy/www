// 첫번째 맵
window.onload = function() {
    $('.map:eq(0)').show();
    $('.tabNav .tab1').css('background','#c01').css('color','#fff');
    
    $('.tab').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab');
        //console.log(ind);

        $(".map").hide(); // 모든 탭내용 hide()
        $(".map:eq("+ind+")").show(); // 클릭한 해당 탭내용만 show()
        $('.tab').css('background','#fff').css('color', '#333'); // 모든 탭메뉴를 비활성화
        $(this).css('background','#c01').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

        setTimeout(function(){
            map2.relayout();
            map2.setCenter(new daum.maps.LatLng(37.563098, 126.936924));
            map3.relayout();
            map3.setCenter(new daum.maps.LatLng(35.160775, 126.881229));
        }, 0);

    });

    var container = document.getElementById('kumhoHeadOffice');
    var options = {
        center: new daum.maps.LatLng(37.577455, 126.979893),
        level: 2
};

var map = new daum.maps.Map(container, options);
    
var mapTypeControl = new daum.maps.MapTypeControl();
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
var markerPosition  = new daum.maps.LatLng(37.577455, 126.979893); 
var marker = new daum.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
    
var overlay = new daum.maps.CustomOverlay({
    map: map,
    position: marker.getPosition()       
});

//두번째 맵
var container2 = document.getElementById('kumhoYonsei');
var options2 = {
    center: new daum.maps.LatLng(37.563098, 126.936924),
    level: 2
};

var map2 = new daum.maps.Map(container2, options2);

var mapTypeControl2 = new daum.maps.MapTypeControl();
map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

var zoomControl2 = new daum.maps.ZoomControl();
map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);

var markerPosition2  = new daum.maps.LatLng(37.563098, 126.936924); 
var marker2 = new daum.maps.Marker({
    position: markerPosition2
});

marker2.setMap(map2);

var overlay2 = new daum.maps.CustomOverlay({
    map: map2,
    position: marker2.getPosition()       
}); 

//세번째 맵
var container3 = document.getElementById('kumhoUsquare');
var options3 = {
    center: new daum.maps.LatLng(35.160775, 126.881229),
    level: 2
};

var map3 = new daum.maps.Map(container3, options3);

var mapTypeControl3 = new daum.maps.MapTypeControl();
map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

var zoomControl3 = new daum.maps.ZoomControl();
map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);

var markerPosition3  = new daum.maps.LatLng(35.160775, 126.881229); 
var marker3 = new daum.maps.Marker({
    position: markerPosition2
});

marker3.setMap(map3);

var overlay3 = new daum.maps.CustomOverlay({
    map: map3,
    position: marker3.getPosition()       
}); 
}