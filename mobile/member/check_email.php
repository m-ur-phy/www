<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   $email = $email1."@".$email2;

   if (!$email) {
      echo "<span class='fail'><i class='fas fa-times'></i> 이메일을 입력해주세요</span>
            <script>
               $('#email1').parent().parent('dl').removeClass('success');
               $('#email1').parent().parent('dl').addClass('fail');
            </script>
            ";
   } else {
      if(!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) {
         echo "<span class='fail'><i class='fas fa-times'></i> 이메일을 입력해주세요</span>
               <script>
                  $('#email1').parent().parent('dl').removeClass('success');
                  $('#email1').parent().parent('dl').addClass('fail');
               </script>
               ";
      }else{
         echo "<span class='success'><i class='fas fa-check'></i> 올바른 메일 형식입니다</span>
               <script>
                  $('#email1').parent().parent('dl').removeClass('fail');
                  $('#email1').parent().parent('dl').addClass('success');
               </script>
               ";
      }

      mysql_close();
   }
?>

