<? 
	session_start(); 
	/*
		$num=1  -> 게시글 번호
		$page / $scale
	*/

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>커뮤니티-관람예절</title>
    <link rel="shortcut icon" type="image/x-icon"  href="../favicon.ico">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../common/css/sub_common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/greet.css">

    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>

	<script>
    function del(href) // delete.php?num=1
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href; // href 는 delete.php?num=값
        }
    }
</script>

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
                    <a href="../sub6/sub6_3.html">NEWS</a>
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
					<ul class="listViewTitle">
						<li><?= $item_subject ?></li>
						<li>
							<span><?= $item_nick ?></span>
							<span><?= $item_date ?></span>
							<span><i class="fa-regular fa-eye"><span class="hidden">조회수</span></i> <?= $item_hit ?></span>
						</li>
					</ul>

					
					<div class="listViewCont"><?= $item_content ?></div>
					
					<div class="moBtn">
						<a href="list.php?page=<?=$page?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
						<? 
							if($userid==$item_id || $userlevel==1 || $userid=="admin")
							// 로그인된 아이디 == 글쓴이 이거나 최고 관리자면 참
							{
						?>
						<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">수정</a>
						<a href="javascript:del('delete.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>')">삭제</a>
						<?
							}
						?>
						<? 
							if($userid)  //로그인이 되면 글쓰기
							{
						?>
						<a href="write_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
						<?
							}
						?>
					</div>
				</div>

            </div>
        </article>
        <? include "../common/sub_footer.html" ?>
	<script src="../sub6/js/sub6.js"></script>
</body>
</html>
