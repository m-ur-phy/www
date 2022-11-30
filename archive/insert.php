<? session_start();?>

<meta charset="utf-8">
<?
	// 새 글 쓰기 => $table='archive'
	// 수정 글 쓰기 => $table='archive', $num , $mode=="modify", 
					// $subject, $content, upfile[]='파일이름.확장자', del_file[]=0/1/2

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	if(!$userid) {
		echo("
		<script>
	     window.alert('로그인 후 이용해 주세요.')
	     history.go(-1)
	   </script>
		");
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
		/*   단일 파일 업로드 
		$upfile_name	 = $_FILES["upfile"]["name"]; // 첨부된 파일의 실제 이름 (dog1.jpg)
		$upfile_tmp_name = $_FILES["upfile"]["tmp_name"]; // 첨부된 파일의 임시 파일 이름 (dog1.tmp)
		$upfile_type     = $_FILES["upfile"]["type"]; // 첨부된 파일의 종류 (image/jpeg, image/pjpeg)
		$upfile_size     = $_FILES["upfile"]["size"]; // 첨부된 파일의 실제 용량
		$upfile_error    = $_FILES["upfile"]["error"]; // 업로드 상태 (true, false) (업로드가 제대로 되었다면 true, 아니라면 false)
		*/

	// 다중 파일 업로드
	$files = $_FILES["upfile"]; // 배열로 리턴
	$count = count($files["name"]); // 배열의 개수를 빼내주는 count
			
	$upload_dir = './data/';

	for ($i=0; $i<$count; $i++)
	{
		$upfile_name[$i]     = $files["name"][$i]; // $_FILES(["upfile"]["name"])[$i] // 'dog1.jpg'
		$upfile_tmp_name[$i] = $files["tmp_name"][$i]; // 'dog1.tmp'
		$upfile_type[$i]     = $files["type"][$i]; // image/jpeg, image/pjpeg
		$upfile_size[$i]     = $files["size"][$i]; // 22.3kb 단위 : byte
		$upfile_error[$i]    = $files["error"][$i]; // true
      
		$file = explode(".", $upfile_name[$i]); // 'dog1.jpg'
		$file_name = $file[0]; // 'dog1'
		$file_ext  = $file[1]; // 'jpg'

		if (!$upfile_error[$i]) // 에러가 없으면
		{
			$new_file_name = date("Y_m_d_H_i_s"); // 2022_11_21_12_18_50
			$new_file_name = $new_file_name."_".$i; // 2022_11_21_12_18_50_0
			$copied_file_name[$i] = $new_file_name.".".$file_ext; // 2022_11_21_12_18_50_0.jpg    
			$uploaded_file[$i] = $upload_dir.$copied_file_name[$i]; // ./data/2022_11_21_12_18_50_0.jpg  

			if( $upfile_size[$i]  > 500*1024 ) { 
				echo("
				<script>
				alert('업로드 파일 크기가 지정된 용량(500KB)을 초과합니다!<br>파일 크기를 체크해주세요! ');
				history.go(-1)
				</script>
				");
				exit;
			}

			if ( ($upfile_type[$i] != "image/gif") &&
				($upfile_type[$i] != "image/jpeg") &&
				($upfile_type[$i] != "image/pjpeg") &&
				($upfile_type[$i] != "image/png") &&
				($upfile_type[$i] != "image/x-png") 
				)
			{
				echo("
					<script>
						alert('jpg와 gif, png 이미지 파일만 업로드 가능합니다!');
						history.go(-1)
					</script>
					");
				exit;
			}

			// 파일의 업로드 move_uploaded_file( pc에 있는 임시파일명, 실제 서버에 저장될 파일 경로 ) 메소드 -> 리턴(true / false)
			if (!move_uploaded_file($upfile_tmp_name[$i], $uploaded_file[$i])) // 파일을 업로드 한 후... 업로드가 안되었으면 !false -> true 잘 되었으면 !true -> false
			{
				echo("
					<script>
					alert('파일을 지정한 디렉토리에 복사하는데 실패했습니다.');
					history.go(-1)
					</script>
				");
				exit;
			}
		}
	}

	include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

	if ($mode=="modify")
	{
		$num_checked = count($_POST['del_file']); // 3
		$position = $_POST['del_file'];

		for($i=0; $i<$num_checked; $i++)                      // delete checked item
		{
			$index = $position[$i]; // 0, 1, 2
			$del_ok[$index] = "y"; // $del_ok[0]='y' $del_ok[1]='y' $del_ok[2]='y'
		}

		$sql = "select * from $table where num=$num";   // get target record
		$result = mysql_query($sql);
		$row = mysql_fetch_array($result);

		for ($i=0; $i<$count; $i++)					// update DB with the value of file input box
		{

			$field_org_name = "file_name_".$i; // file_name_0 file_name_1 file_name_2
			$field_real_name = "file_copied_".$i; // file_copied_0

			$org_name_value = $upfile_name[$i]; // dog1.jpg
			$org_real_value = $copied_file_name[$i]; // 2022_11_21_12_18_50_01.jpg 

			if ($del_ok[$i] == "y") // 삭제에 체크했다면
			{
				$delete_field = "file_copied_".$i; // file_copied_0
				$delete_name = $row[$delete_field]; // 2022_11_21_12_18_50_01.jpg 
				
				$delete_path = "./data/".$delete_name;

				unlink($delete_path);

				$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
				mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
			}
			else // 삭제에 체크하지 않았다면
			{
				if (!$upfile_error[$i])
				{
					$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
					mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행					
				}
			}

		}
		
		$category_1 = htmlspecialchars($category_1);
		$category_2 = htmlspecialchars($category_2);
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);

		$category_1 = str_replace("'", "&#039;", $category_1);
		$category_2 = str_replace("'", "&#039;", $category_2);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
		
		$sql = "update $table set category_1='$category_1', category_2='$category_2', subject='$subject', content='$content' where num=$num";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}
	else
	{
		if ($html_ok=="y")
		{
			$is_html = "y";
		}
		else
		{
			$is_html = "";
		}

		$category_1 = htmlspecialchars($category_1);
		$category_2 = htmlspecialchars($category_2);
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);

		$category_1 = str_replace("'", "&#039;", $category_1);
		$category_2 = str_replace("'", "&#039;", $category_2);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);

		$sql = "insert into $table (id, name, nick, category_1, category_2, subject, content, regist_day, hit, is_html, ";
		$sql .= " file_name_0, file_name_1, file_name_2, file_copied_0,  file_copied_1, file_copied_2) ";
		$sql .= "values('$userid', '$username', '$usernick', '$category_1', '$category_2', '$subject', '$content', '$regist_day', 0, '$is_html', ";
		$sql .= "'$upfile_name[0]', '$upfile_name[1]',  '$upfile_name[2]', '$copied_file_name[0]', '$copied_file_name[1]','$copied_file_name[2]')";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}

	mysql_close();                // DB 연결 끊기

	echo "
	   <script>
	    location.href = 'list.php?table=$table&page=$page&scale=$scale&liststyle=$liststyle';
	   </script>
	";
?>

  
