// id 중복검사
$("#id").keyup(function() {    // id입력 상자에 id값 입력시
var id = $('#id').val(); // aaa value 메소드

$.ajax({
   type: "POST",
   url: "check_id.php",
   data: "id="+ id,  
   cache: false, 
   success: function(data) // echo로 찍는 문자열이 data로 들어옴
   {
        $("#idtext").html(data);
   }
});
});

// password 유효성
$('#pass').keyup(function () {
    var pass = $('#pass').val();
    $.ajax({
       type: 'POST',
       url: 'check_pass.php',
       data: 'pass=' + pass,
       cache: false,
       success: function (data) {
           $('#passtext').html(data);
        },
    });
});

// password 일치
$('#pass_confirm').keyup(function () {
    var pass_confirm = $('#pass_confirm').val();
    var pass = $('#pass').val();
    $.ajax({
       type: 'POST',
       url: 'check_pass2.php',
       data:  { pass: pass, pass_confirm: pass_confirm },
       cache: false,
       success: function (data) {
           $('#pass2text').html(data);
        },
    });
});

// name
$('#name').keyup(function () {
    var name = $('#name').val();
    $.ajax({
       type: 'POST',
       url: 'check_name.php',
       data: 'name=' + name,
       cache: false,
       success: function (data) {
           $('#nametext').html(data);
        },
    });
});

// nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();
    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
            $("#nicktext").html(data);
        }
    });
});		 

// phone
$("#hp2, #hp3").keyup(function() {    // id입력 상자에 id값 입력시
    var hp1 = $('#hp1').val(); 
    var hp2 = $('#hp2').val(); 
    var hp3 = $('#hp3').val(); 
    $.ajax({
        type: "POST",
        url: "check_hp.php",
        data: { hp1: hp1, hp2: hp2, hp3: hp3 },
        cache: false, 
        success: function(data)
        {
            $("#hptext").html(data);
        }
    });
});	

// email
$("#email1, #email2").keyup(function() {    // id입력 상자에 id값 입력시
    var email1 = $('#email1').val(); 
    var email2 = $('#email2').val(); 
    $.ajax({
        type: "POST",
        url: "check_email.php",
        data: { email1: email1, email2: email2 },
        cache: false, 
        success: function(data)
        {
            $("#emailtext").html(data);
        }
    });
});	


