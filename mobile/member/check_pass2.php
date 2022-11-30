<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$pass_confirm) {
        echo "<span class='fail'><i class='fas fa-times'></i> 비밀번호를 입력하세요.</span>
            <script>
                $('#pass_confirm').parent().parent('dl').removeClass('success');
                $('#pass_confirm').parent().parent('dl').addClass('fail');
            </script>
        ";
   } else {
      if ($pass == $pass_confirm) {
        echo "<span class='success'><i class='fas fa-check'></i> 비밀번호가 일치합니다.</span>
            <script>
                $('#pass_confirm').parent().parent('dl').removeClass('fail');
                $('#pass_confirm').parent().parent('dl').addClass('success');
            </script>
            ";
      } else  {
        echo "<span class='fail'><i class='fas fa-times'></i> 비밀번호가 일치하지 않습니다.</span>
                <script>
                    $('#pass_confirm').parent().parent('dl').removeClass('success');
                    $('#pass_confirm').parent().parent('dl').addClass('fail');
                </script>
            ";
      }
      mysql_close();
   }
?>