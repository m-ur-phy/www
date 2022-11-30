<? 
	session_start(); 

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);
    $row = mysql_fetch_array($result);       
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];

	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) 
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			$image_width[$i] = $imageinfo[0];
			$image_height[$i] = $imageinfo[1];
			$image_type[$i]  = $imageinfo[2];

			if ($image_width[$i] > 785)
				$image_width[$i] = 785;
		}
		else
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}
	$new_hit = $item_hit + 1;
	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);

	$ripple = 'news_ripple'
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>커뮤니티 - NEWS</title>
    <link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/sub_common.css">
    <link rel="stylesheet" href="../sub4/common/css/sub4common.css">
    <link rel="stylesheet" href="./css/news.css">
    <script src="../js/prefixfree.min.js"></script>
	<script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
</head>
<script>
	function check_input()
	{
		if (!document.ripple_form.ripple_content.value)
		{
			alert("내용을 입력하세요!");    
			document.ripple_form.ripple_content.focus();
			return false;
		}
		document.ripple_form.submit();
    }
	function del_ripple(href) 
	{
		if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
			document.location.href = href;
		}
	}

    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
<body>
	<? include "../sub_header.html" ?>
		<div class="subLayout">
			<div class="main">
				<h3>커뮤니티</h3>
			</div>
			<div class="subNav">
				<ul>
					<li>
						<a href="./list.php">공지사항</a>
					</li>
					<li>
						<a class="current" href="../news/list.php">NEWS</a>
					</li>
					<li>
						<a href="../sub4/sub4_3.html">관람예절</a>
					</li>
				</ul>
			</div>
		</div>
			<article id="contentArea">
				<div class="titleArea">
					<h2>NEWS</h2>
				</div>
					<div class="listWrap">

					<ul class="listViewTitle">
						<li><?= $item_subject ?></li>
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
									$img_name = "https://oilpaintingkim.cafe24.com/news/data/".$img_name; 
									
                                    echo "<div class='image'><img src='$img_name' alt='첨부이미지'></div>";
								}
							}
						?>
						<?= $item_content ?>
					</div>

					<!-- 댓글보기 및 댓글입력 추가 : 시작 -->
					<div class="rippleBox">
						<ul class="rippleList">
							<?
								$sql = "select * from $ripple where parent='$item_num'";
								$ripple_result = mysql_query($sql);

								while ($row_ripple = mysql_fetch_array($ripple_result))
								{
									$ripple_num     = $row_ripple[num];
									$ripple_id      = $row_ripple[id];
									$ripple_nick    = $row_ripple[nick];
									$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
									$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
									$ripple_date    = $row_ripple[regist_day];
							?>
							<li>
								<dl>
									<dt>
										<?=$ripple_nick?>
										<small><?=$ripple_date?></small>
									</dt>
									<dd>
										<span><?=$ripple_content?></span>

										<?  if($userid==$ripple_id || $userid=="admin" || $userlevel==1){	// 관리자, 글쓴이만 수정 가능 ?>
										<div class="rippleMo">
											<form name='ripple_form_modify' method='post' action='insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&ripple_num=<?=$ripple_num?>&mode=modify&liststyle=<?=$liststyle?>'>
												<textarea name='ripple_content'><?=$row_ripple[content]?></textarea>
												<a href="#">수정</a>
											</form>
										</div>
										<? } ?>

									</dd>
								</dl>
								<?  if($userid==$ripple_id || $userid=="admin" || $userlevel==1){	// 관리자, 글쓴이만 삭제 ?>

											<div class='func'>
												<a href='#' class="modify">
													<i class="fa-solid fa-screwdriver-wrench"></i><span class='hidden'>수정</span>
												</a>
												<a href="javascript:del_ripple('delete_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&ripple_num=<?=$ripple_num?>&liststyle=<?=$liststyle?>')">
													<i class='fa-regular fa-trash-can'></i><span class='hidden'>삭제</span>
												</a>
											</div>
								<? } ?>
							</li>
						<?
							}
						?>
						</ul>
						<form name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">
							<ul class="rippleInput">
								<li>
									<?	
										if($userid){
											echo "<textarea rows='5' cols='65' placeholder='댓글을 입력하세요' name='ripple_content'></textarea>";
										} else {
											echo "<textarea rows='5' cols='65' placeholder='로그인 후 이용하세요' name='ripple_content' readonly></textarea>";
										}
									?>
								</li>
								<li><a href="#" onclick="check_input()">댓글쓰기</a></li>
							</ul>
						</form>
					</div><!-- end of ripple -->
					<!-- 댓글보기 및 댓글입력 추가 : 끝 -->



					<div class="moBtn">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
						<? 
							if($userid==$item_id || $userlevel==1 || $userid=="admin")
							// 로그인된 아이디 == 글쓴이 이거나 최고 관리자면 참
							{
						?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
						<?
							}
						?>
						<? 
							if($userid)  // 로그인이 되면 글쓰기
							{
						?>
						<a href="write_form.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<?
							}
						?>
					</div>
				</div>
			</article>
	</div>
	
<? include "../sub_footer.html" ?>
<script>
		let rippleTxt;
		
		// 수정하기
		$(document).on('click', '.modify', function(e){
			e.preventDefault();

			$('.rippleBox .rippleList li dl dd span').show();	// 전체 댓글 show
			$('.rippleBox .rippleList li dl dd .rippleMo').hide();	// 전체 modify form hide
			$('.rippleBox .rippleList li .func .modify').html("<i class='fa-solid fa-screwdriver-wrench'></i><span class='hidden'>수정</span>");	// 전체 버튼변경 => 수정버튼

			rippleTxt = $(this).parent().prev().find('dd').find('span').text();	// content 텍스트 저장

			$(this).parent().prev().find('span').hide();	// 해당 댓글 hide
			$(this).parent().prev().find('.rippleMo').show();	// 해당 modify form show
			$(this).parent().prev().find('.rippleMo').find('textarea').html(rippleTxt);

			$(this).html("<i class='fa-solid fa-xmark'></i><span class='hidden'>취소</span>");	// 해당 버튼 변경 => 삭제버튼
			$(this).removeClass('modify').addClass('cancel'); // class cancel 로 변경

		});

		// 수정취소		
		$(document).on('click', '.cancel', function(e){
			e.preventDefault();

			$(this).parent().prev().find('span').show();	// 해당 댓글 show
			$(this).parent().prev().find('.rippleMo').hide();	// 해당 modify form hide
			$(this).html("<i class='fa-solid fa-screwdriver-wrench'></i><span class='hidden'>수정</span>");	// 해당 버튼 변경 => 수정버튼
			$(this).removeClass('cancel').addClass('modify'); // class modify 로 변경
			
		});


		$(document).on('click', '.rippleMo form a', function(e){
			e.preventDefault();
			let modify_form_name = $(this).parent('form');
			modify_form_name.submit();
			
		});

	</script>
</body>
</html>
