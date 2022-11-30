<? 
	session_start(); 
	
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>커뮤니티-공지사항</title>
    <link rel="shortcut icon" type="image/x-icon"  href="../favicon.ico">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub_common.css">
    <link rel="stylesheet" href="../sub4/common/css/sub4common.css">
    <link rel="stylesheet" href="./css/greet.css">

    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
    <script src="../js/prefixfree.min.js"></script>

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
    <? include "../sub_header.html" ?>
    <div class="subLayout">
			<div class="main">
				<h3>커뮤니티</h3>
			</div>
			<div class="subNav">
				<ul>
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
		</div>
        <article id="contentArea">
            <div class="titleArea">
                <h2>공지사항</h2>
            </div>
                <p>금호문화재단 공지사항을 알려드립니다</p>
				<p>대한민국 최고의 메세나 기관으로서 모든 예술분야를 지원합니다</p>
				<div class="listWrap">
					<form name="board_form" method="post" action="insert.php?page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">
						<ul class="writeTop">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" id="subject" name="subject"></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="content">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="content" id="content"></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="moBtn">
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>
					</form>
				</div>
        </article>
        <? include "../sub_footer.html" ?>
	<script src="../sub4/js/sub4.js"></script>
</body>
</html>
