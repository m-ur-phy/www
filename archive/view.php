<? 
	session_start(); 

	// 새 글 쓰기
	// $table = 'archive';

	// 수정 글 쓰기
	// $table = 'archive', $num=1, $mode == "modify";
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	// for 문으로
	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];

	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];

	$item_category_1 = str_replace(" ", "&nbsp;", $row[category_1]);
	$item_category_2 = str_replace(" ", "&nbsp;", $row[category_2]);
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	// 첨부된 이미지 가져오기
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i])  // 첨부된 이미지가 있으면
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			// 배열로 리턴 [이미지너비값, 이미지높이값, 이미지타입(jpg, png)]

			$image_width[$i] = $imageinfo[0]; // 이미지 너비
			$image_height[$i] = $imageinfo[1]; // 이미지 높이
			$image_type[$i]  = $imageinfo[2]; // 이미지 종류

			if ($image_width[$i] > 785) // 이미지 너비를 제한한다... 
				$image_width[$i] = 785; // 
		}
		else // 첨부된 이미지가 없으면
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>음악사업-시상 및 기금</title>
    <link rel="shortcut icon" type="image/x-icon"  href="../favicon.ico">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../common/css/sub_common.css">
    <link rel="stylesheet" href="../sub2/common/css/sub2common.css">
    <link rel="stylesheet" href="../sub2/css/sub2_content4.css">
	<link rel="stylesheet" href="./css/archive.css">

    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</head>
<body>
<? include "../common/sub_header.html" ?>
        <div class="main">
            <img src="../sub2/common/images/visual_02.jpg" alt="">
            <h3>커뮤니티</h3>
        </div>
        <div class="subNav">
			<ul>
                <li>
                    <a href="../sub2/sub2_1.html">클래식공연지원</a>
                </li>
                <li>
                    <a href="../sub2/sub2_2.html">음악교육 및 지원</a>
                </li>
                <li>
                    <a href="../sub2/sub2_3.html">시상 및 기금</a>
                </li>
                <li>
                    <a class="current" href="./list.php">금호 연주자 아카이브</a>
                </li>
            </ul>
        </div>
        <article id="content">
            <div class="titleArea">
                <div class="lineMap">
                    <i class="fa-solid fa-house-chimney"></i>
                    <span class="hidden">HOME</span>
                    &gt;<span> 음악사업 </span>&gt; 
                    <strong>금호 연주자 아카이브</strong>
                </div>
                <h2>금호 연주자 아카이브</h2>
            </div>
            <div class="contentArea">
                <p>금호문화재단을 빛내는</p>
				<p>연주자들을 만나보세요</p>
				<div class="listWrap">
				<ul class="listViewTitle">
						<li>
							<span><?=$item_category_1?></span>
							<span><?=$item_category_2?></span>
							<strong><?= $item_subject ?></strong>
						</li>
						<li>
							<span><?= $item_nick ?></span>
							<span><?= $item_date ?></span>
							<span><i class="fa-regular fa-eye"></i><span class="hidden">조회수</span> <?= $item_hit ?></span>
						</li>
					</ul>

					
					<div class="listViewCont">
						<?
							for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
							{
								if ($image_copied[$i])	// 첨부된 파일이 있으면
								{
									$img_name = $image_copied[$i];
									$img_name = "./data/".$img_name; 
                                    echo "<div class='image'><img src='$img_name' alt='첨부이미지'></div>";
								}
							}
						?>
						<?= $item_content ?>
					</div>

					<div class="moBtn">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
						<? 
							if($userid==$item_id || $userlevel==1 || $userid=="admin")
							// 로그인된 아이디 == 글쓴이 이거나 최고 관리자면 참
							{
						?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>')">삭제</a>
						<?
							}
						?>
						<? 
							if($userid)  //로그인이 되면 글쓰기
							{
						?>
						<a href="write_form.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<?
							}
						?>
					</div>
				</div>
            </div>
        </article>
        <? include "../common/sub_footer.html" ?>
	<script src="../sub2/js/sub2.js"></script>
</body>
</html>