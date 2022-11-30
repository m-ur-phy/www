<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if (!$message) {
      echo "<span class='fail'><i class='fas fa-times'></i> 신청내용을 입력해주세요</span>
            <script>
               $('#message').parent().parent('dl').removeClass('success');
               $('#message').parent().parent('dl').addClass('fail');
            </script>
            ";
   } else {

      if(mb_strlen($message, 'UTF-8')<12) {
         echo "<span class='fail'><i class='fas fa-times'></i> 신청내용은 12자 이상 입력해주셔야합니다</span>
            <script>
               $('#message').parent().parent('dl').removeClass('success');
               $('#message').parent().parent('dl').addClass('fail');
            </script>
            ";

      } else {
         echo "<span class='success'><i class='fas fa-check'></i> 올바른 형식입니다</span>
            <script>
               $('#message').parent().parent('dl').removeClass('fail');
               $('#message').parent().parent('dl').addClass('success');
            </script>
            ";
         include "./check_all.php";
      }
      
      }

      mysql_close();
?>

