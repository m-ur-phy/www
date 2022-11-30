<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
  

   // $id='a';

    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);
 
      if (strlen($id)<5) {
         echo "<span class='fail'><i class='fas fa-times'></i> 아이디는 5자 이상이어야합니다.</span>
               <script>
                  $('#id').parent().parent('dl').removeClass('success');
                  $('#id').parent().parent('dl').addClass('fail');
               </script>
               ";
      }else if (!preg_match("/^[a-zA-Z0-9]+$/", $id)) {
         echo "<span class='fail'><i class='fas fa-times'></i> 아이디는 영문과 숫자만 가능합니다.</span>
               <script>
                  $('#id').parent().parent('dl').removeClass('success');
                  $('#id').parent().parent('dl').addClass('fail');
               </script>
               ";
      } else if ($num_record) {
         echo "<span class='fail'><i class='fas fa-times'></i> 중복된 아이디입니다.</span>
               <script>
                  $('#id').parent().parent('dl').removeClass('success');
                  $('#id').parent().parent('dl').addClass('fail');
               </script>
               ";
      } else {
         echo "<span class='success'><i class='fas fa-check'></i> 사용가능한 아이디입니다.</span>
               <script>
                  $('#id').parent().parent('dl').removeClass('fail');
                  $('#id').parent().parent('dl').addClass('success');
               </script>
               ";
      }


      mysql_close();
   }

?>

