<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   $num = preg_match('/[0-9]/u', $pass);
   $eng = preg_match('/[a-z]/u', $pass);
   $spe = preg_match("/[\!\@\#\$\%\^\&\*]/u", $pass);

   if(!$pass)  {
      echo "<span class='fail'><i class='fas fa-times'></i> 비밀번호를 입력하세요.</span>
               <script>
                  $('#pass').parent().parent('dl').removeClass('success');
                  $('#pass').parent().parent('dl').addClass('fail');
               </script>
               ";
   } else  {
      if (strlen($pass)<8) {
         echo "<span class='fail'><i class='fas fa-times'></i> 비밀번호는 영문, 숫자, 특수문자를 혼합하여 8자 이상 입력해주세요.</span>
                <script>
                    $('#pass').parent().parent('dl').removeClass('success');
                    $('#pass').parent().parent('dl').addClass('fail');
                </script>
                ";
      } else {
        if (preg_match("/\s/u", $pass) == true) {
            echo "<span class='fail'><i class='fas fa-times'></i> 비밀번호는 공백없이 입력해주세요.</span>
                    <script>
                        $('#pass').parent().parent('dl').removeClass('success');
                        $('#pass').parent().parent('dl').addClass('fail');
                    </script>
                ";
        } else if ( $num == 0 || $eng == 0 || $spe == 0) {
            echo "<span class='fail'><i class='fas fa-times'></i> 영문, 숫자, 특수문자를 혼합하여 입력해주세요.</span>
                    <script>
                        $('#pass').parent().parent('dl').removeClass('success');
                        $('#pass').parent().parent('dl').addClass('fail');
                    </script>
                ";
        } else {
            echo "<span class='success'><i class='fas fa-check'></i> 사용가능한 비밀번호입니다.</span>
               <script>
                  $('#pass').parent().parent('dl').removeClass('fail');
                  $('#pass').parent().parent('dl').addClass('success');
               </script>
               ";
            
        }
      }
      mysql_close();
   }
?>