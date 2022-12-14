<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	$table = "news";	
	$ripple = "news_ripple";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>커뮤니티 - NEWS</title>
	<link rel="shortcut icon" type="image/x-icon"  href="../favicon.ico">
    <link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/sub_common.css">
    <link rel="stylesheet" href="../sub4/common/css/sub4common.css">
    <link rel="stylesheet" href="./css/news.css">
    <script src="../js/prefixfree.min.js"></script>
	<script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
</head>
<?

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";
    $scale=5;			// 한 화면에 표시되는 글 수

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
<body>
	<? include '../sub_header.html' ?>
		<div class="subLayout">
			<div class="main">
				<h3>커뮤니티</h3>
			</div>
			<div class="subNav">
				<ul>
					<li>
						<a href="../greet/list.php">공지사항</a>
					</li>
					<li>
						<a class="current" href="./list.php">NEWS</a>
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
                <p>금호문화재단 공지사항을 알려드립니다</p>
				<p>대한민국 최고의 메세나 기관으로서 모든 예술분야를 지원합니다</p>
				<div class="listWrap">
					
					<div class="listSort">
						<div class="listInfo">
							<p> 총 <?= $total_record ?> 개의 게시물이 있습니다.  </p>
						</div>
						<select class="scale" name="scale" onchange="location.href='list.php?scale='+this.value+'&liststyle=<?=$liststyle?>'">
							<option value=''><?=$scale?>개씩</option>
							<option value='5'>5개씩</option>
							<option value='8'>8개씩</option>
							<option value='10'>10개씩</option>
							<option value='12'>12개씩</option>
						</select>

					</div>

					<div class="listBody">
						<ul class="listContent">
							<?		
								for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
								{
									mysql_data_seek($result, $i);       
									// 가져올 레코드로 위치(포인터) 이동  
									$row = mysql_fetch_array($result);
									// 하나의 레코드 가져오기
									
									$item_num     = $row[num];
									$item_id      = $row[id];
									$item_name    = $row[name];
									$item_nick    = $row[nick];
									$item_hit     = $row[hit];
									$item_date    = $row[regist_day];
									$item_date = substr($item_date, 0, 10);  
									$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
									$item_content = str_replace(" ", "&nbsp;", $row[content]);

									$sql = "select * from $ripple where parent=$item_num"; // 추가 $item_num=메인게시글의 num
									$result2 = mysql_query($sql, $connect); // 추가
									$num_ripple = mysql_num_rows($result2); // 추가 해당 메인게시글의 댓글의 갯수
									
									// 이미지 경로 가져오기
									if($row[file_copied_0]){	// 첨부된 첫번째 이미지가 있으면 해당 이미지
										$item_img = 'https://oilpaintingkim.cafe24.com/news/data/'.$row[file_copied_0];
									}else{
										$item_img = 'https://oilpaintingkim.cafe24.com/news/data/default.jpg';	// 이미지가 없으면 default.jpg
									}
									
							?>
							<li class="listItem">
								<a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">
									<div class="image"><img src="<?=$item_img?>" alt=""></div>
									<div class="listTxt">
										<strong><?= $item_subject ?></strong>
										<p><?= $item_content ?></p>
										<span><?= $item_nick ?></span>
										<span><?= $item_date ?></span>
										<?
											if ($num_ripple){	// 댓글이 있으면
												echo "<span><i class='fa-regular fa-comment-dots'></i><span class='hidden'>댓글</span> $num_ripple </span>";
											}
										?>
										<span><i class="fa-regular fa-eye"></i><span class="hidden">조회수</span> <?= $item_hit ?></span>
									</div>
								</a>
							</li>
							<?
									$number--;
								}
							?>
						</ul>
					</div>

					<div class="pageBtn">
						<span class="prev"><i class="fa-solid fa-chevron-left"></i><span class="hidden">이전</span></span>
						<?
							// 게시판 목록 하단에 페이지 링크 번호 출력
							for ($i=1; $i<=$total_page; $i++)
							{
								if ($page == $i)     // 현재 페이지 번호 링크 안함
								{
									echo "<span class='active'>{$i}</span>";
								}
								else
								{
									if($mode=="search")	// 검색리스트일 때 (page, scale, mode, find, search)
									{
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle&mode=search&find=$find&search=$search'>{$i}</a></span>";
									}
									else
									{    // 일반 리스트일 때
										echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle'>{$i}</a></span>";
									}
								}
							}
						?>
						<span class="next"><i class="fa-solid fa-chevron-right"></i><span class="hidden">다음</span></span>
					</div>

					<div class="moBtn">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
						<? if($userid){	// 로그인 했을 경우 ?>
						<a href="write_form.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">글쓰기</a>
						<? } ?>
					</div>
					

					<div class="searchWrap">
						<form name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search&liststyle=<?=$liststyle?>"> 
							<div class="listSearch">
								<select name="find">
									<option value='subject'>제목</option>
									<option value='content'>내용</option>
									<option value='nick'>별명</option>
									<option value='name'>이름</option>
								</select>
								<label class="hidden" for="search"></label>
								<input type="text" name="search" id="search">
								<button type="submit"><span class="hidden">검색</span><i class="fa-solid fa-magnifying-glass"></i></button>
							</div>
						</form>
					</div>

				</div>
		</article>
	<? include '../sub_footer.html' ?>
	<?
		if (!$liststyle){
			$liststyle = 'list';	// 리스트 스타일
			echo "
				<script>
					$('.listStyle li').removeClass('active');
					$('.listStyle li:eq(0)').addClass('active');
				</script>
			";
		} else if($liststyle == 'box'){
			$liststyle = 'box';	// 리스트 스타일
			echo "
				<script>
					$('.listStyle li').removeClass('active');
					$('.listStyle li:eq(1)').addClass('active');
					$('.listBody').addClass('box');
				</script>
			";

		}
	?>

</body>
</html>