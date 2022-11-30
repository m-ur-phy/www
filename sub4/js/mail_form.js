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

// message
$("#message").keyup(function() {    // id입력 상자에 id값 입력시
    var message = $('#message').val();
    $.ajax({
        type: "POST",
        url: "check_message.php",
        data: 'message=' + message,
        cache: false, 
        success: function(data)
        {
            $("#messagetext").html(data);
        }
    });
});	