<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   $hp = $hp1."-".$hp2."-".$hp3;  // 010-1111-2222

   if(!$hp)  {
      echo "<span class='fail'><i class='fas fa-times'></i> 번호를 입력해주세요</span>
            <script>
                $('#hp1').parent().parent('dl').removeClass('success');
                $('#hp1').parent().parent('dl').addClass('fail');
            </script>
            ";
   } else  {
      if (!preg_match("/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/", $hp)) {
         echo "<span class='fail'><i class='fas fa-times'></i> 올바른 형식의 번호가 아닙니다</span>
               <script>
                  $('#hp1').parent().parent('dl').removeClass('success');
                  $('#hp1').parent().parent('dl').addClass('fail');
               </script>
            ";
      } else {
            echo "<span class='success'><i class='fas fa-check'></i> 사용가능한 번호입니다</span>
                  <script>
                     $('#hp1').parent().parent('dl').removeClass('fail');
                     $('#hp1').parent().parent('dl').addClass('success');
                  </script>
               ";
            include "./check_all.php";
      }
      mysql_close();
   }
?>