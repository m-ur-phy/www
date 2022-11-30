<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   
   if(!$name)  {
      echo "<span class='fail'><i class='fas fa-times'></i> 이름을 입력해주세요</span>
            <script>
                $('#name').parent().parent('dl').removeClass('success');
                $('#name').parent().parent('dl').addClass('fail');
            </script>
            ";
    } else {
        if(!preg_match("/^[a-zA-Z가-힣]+$/", $name)){
            echo "<span class='fail'><i class='fas fa-times'></i> 이름에는 숫자 및 특수문자를 사용하실 수 없습니다</span>
                <script>
                    $('#name').parent().parent('dl').removeClass('success');
                    $('#name').parent().parent('dl').addClass('fail');
                </script>
                ";
        } else {
            echo "<span class='success'><i class='fas fa-check'></i> 올바른 이름입니다</span>
                    <script>
                        $('#name').parent().parent('dl').removeClass('fail');
                        $('#name').parent().parent('dl').addClass('success');
                    </script>
                    ";
            include "./check_all.php";
            }
            mysql_close();
        }
?>