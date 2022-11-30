
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<?
 
$name=$_POST['name'];

$email1=$_POST['email1'];
$email2=$_POST['email2'];
$email = $email1."@".$email2;

$hp1=$_POST['hp1'];
$hp2=$_POST['hp2'];
$hp3=$_POST['hp3'];
$hp = $hp1."-".$hp2."-".$hp3;

$message=$_POST['message'];
 
    $to='ooiillppaaiinntt@naver.com';
    $subject='금호문화재단 사이트에서 관리자에게 보낸 메일';
    $msg="보낸사람:$name\n".
        "보낸사람메일주소:$email\n".
		"보낸사람전화번호:$hp\n".
        "내용:$message\n";
   
    mail($to,$subject,$msg,'보낸사람메일주소:'.$email);   

echo "<script>
        alert('성공적으로 메일이 전송되었습니다.');
        //history.go(-1);
        location.href='./sub4_4.html' ;
</script>
"
   
?>



