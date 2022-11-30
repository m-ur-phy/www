<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) 
   {
      echo"<span class='fail'><i class='fas fa-times'></i> 닉네임을 입력하세요</span>
            <script>
               $('#nick').parent().parent('dl').removeClass('success');
               $('#nick').parent().parent('dl').addClass('fail');
            </script>
            ";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if (strlen($nick) < 4 || strlen($nick) > 10) {
         echo "<span class='fail'><i class='fas fa-times'></i> 닉네임은 4자 이상 10자 이하여야합니다</span>
               <script>
                  $('#nick').parent().parent('dl').removeClass('success');
                  $('#nick').parent().parent('dl').addClass('fail');
               </script>
               ";
      }else if ($num_record){
         echo "<span class='fail'><i class='fas fa-times'></i> 중복된 닉네임입니다</span>
               <script>
                  $('#nick').parent().parent('dl').removeClass('success');
                  $('#nick').parent().parent('dl').addClass('fail');
               </script>
               ";
      }else{
         echo "<span class='success'><i class='fas fa-check'></i> 사용가능한 닉네임입니다</span>
               <script>
                  $('#nick').parent().parent('dl').removeClass('fail');
                  $('#nick').parent().parent('dl').addClass('success');
               </script>
               ";
      }
      mysql_close();
   }
?>

