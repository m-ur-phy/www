<?
    session_start();
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>커뮤니티-공지사항</title>
    <link rel="shortcut icon" type="image/x-icon"  href="../favicon.ico">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../common/css/sub_common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/greet.css">

    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>

<?
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	if(!$scale)$scale=5; // 한 화면에 표시되는 글 수
    if ($mode=="search") // 검색을 통해서 이 페이지가 실행되면
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
		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page) // 페이지 번호($page)가 0 일 때(안 들어왔을 때)
		$page = 1; // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;
	$number = $total_record - $start; // 일련번호 중에서도 가장 위

?>
</head>
<body>
    <? include "../common/sub_header.html" ?>
        <div class="main">
            <img src="../sub6/common/images/visual_06.jpg" alt="">
            <h3>커뮤니티</h3>
        </div>
        <div class="subNav">
            <ul>
                <li>
                    <a href="../sub6/sub6_1.html">관람예절</a>
                </li>
                <li>
                    <a class="current" href="./list.php">공지사항</a>
                </li>
                <li>
                    <a href="../news/list.php">NEWS</a>
                </li>
                <li>
                    <a href="../sub6/sub6_4.html">일정</a>
                </li>
            </ul>
        </div>
        <article id="content">
            <div class="titleArea">
                <div class="lineMap">
                    <i class="fa-solid fa-house-chimney"></i>
                    <span class="hidden">HOME</span>
                    &gt;<span> 커뮤니티 </span>&gt; 
                    <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>
            </div>
            <div class="contentArea">
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

						<ul class="listStyle">
							<li class="active"><a href="list.php?scale=<?=$scale?>&liststyle=list"><span class="hidden">목록형으로보기</span><i class='fa-solid fa-table-list'></i></a></li>
							<li><a href="list.php?scale=<?=$scale?>&liststyle=box"><span class="hidden">박스형으로보기</span><i class='fa-solid fa-table-cells-large'></i></a></li>
						</ul>

					</div>

					
					<div class="listBody">
						<ul class="listTitle">
							<li class="listWidth1">번호</li>
							<li class="listWidth2">제목</li>
							<li class="listWidth3">글쓴이</li>
							<li class="listWidth4">등록일</li>
							<li class="listWidth5">조회</li>
						</ul>
						<ul class="listContent">
						<?
							for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)  // 마지막 페이지에서 늘어남 방지
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
								// 공백 문자를 &nbsp 특수문자로 바꾸자
						?>
							<li class="listItem">
								<div class="listWidth1"><?= $number ?></div>
								<div class="listWidth2">
									<a href="view.php?num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">
									<p><?= $item_subject ?></p>
									<div class="content"><?= $item_content ?></div>
								</a></div> <!-- db에 들어가는 number -->
								<div class="listWidth3"><?= $item_nick ?></div>
								<div class="listWidth4"><?= $item_date ?></div>
								<div class="listWidth5"><?= $item_hit ?></div>
							</li>
						<?
							$number--; }
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
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
					<? 
					if($userid)
						{ ?>
							<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">글쓰기</a>
					<? } ?>
						</div>
					<div class="searchWrap">
						<form name="board_form" method="post" action="list.php?mode=search&liststyle=<?=$liststyle?>">
							<div class="listSearch">
									<select name="find">
										<option value='subject'>제목</option>
										<option value='content'>내용</option>
										<option value='nick'>별명</option>
										<option value='name'>이름</option>
									</select>
								<input type="text" name="search">
								<button type="submit">검색</button>
							</div>
						</form>
					</div>		

        		</div>
            </div>
        </article>
        <? include "../common/sub_footer.html" ?>
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
	<script src="../sub6/js/sub6.js"></script>
</body>
</html>
