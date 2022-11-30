<?
session_start();

@extract($_GET); 
@extract($_POST); 
@extract($_SESSION); 

      include "../lib/dbconn.php";

      $sql = "delete from news_ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
	    location.href = 'view.php?table=$table&page=$page&scale=$scale&num=$num&liststyle=$liststyle';
	   </script>
	  ";
?>
