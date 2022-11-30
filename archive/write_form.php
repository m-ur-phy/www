<? 
	session_start(); 

	// 새 글 쓰기
	// $table = 'archive'

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	if ($mode=="modify") // 수정 글 쓰기
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
		
		$item_category_1  = $row[category_1];
		$item_category_2  = $row[category_2];

		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
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
	function check_input()
	{
		if (!document.board_form.subject.value)
		{
			alert("제목을 입력하세요!");    
			document.board_form.subject.focus();
			return;
		}

		if (!document.board_form.content.value)
		{
			alert("내용을 입력하세요!");    
			document.board_form.content.focus();
			return;
		}
		if (!document.board_form.category_1.value)
			{
				alert("카테고리를 선택하세요!");    
				document.board_form.category_1.focus();
				return;
			}

		if (!document.board_form.category_2.value)
		{
			alert("카테고리를 선택하세요!");    
			document.board_form.category_2.focus();
			return;
		}
		document.board_form.submit();
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
				<? if($mode=="modify"){	// 수정하기 => insert.php 에 mode=modify와 num을 넘겨준다?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>&table=<?=$table?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data">

					<? } else {	// 새 글쓰기 ?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
					<? } ?>


						<ul class="writeTop">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="category_1">악기</label></dt>
									<dd>
										<select name="category_1" id="category_1">
											<option value="바이올린">바이올린</option>
											<option value="색소폰">색소폰</option>
											<option value="클라리넷">클라리넷</option>
											<option value="타악기">타악기</option>
											<option value="튜바">튜바</option>
											<option value="트롬본">트롬본</option>
											<option value="피아노">피아노</option>
										</select>
										
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="category_2">레벨</label></dt>
									<dd>
										<select name="category_2" id="category_2">
											<option value="영재">영재</option>
											<option value="영아티스트">영아티스트</option>
											<option value="영체임버">영체임버</option>
										</select>
										
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd>
										<input type="text" name="subject" id="subject" value="<?=$item_subject?>" >
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="content">내용</label></dt>
									<dd>
										<? if( $userid && ($mode != "modify") ) {   // 새글쓰기 에서만 HTML 쓰기가 보인다 ?>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<? } ?>
										<div>
											<textarea name="content" id="content"><?=$item_content?></textarea>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file1">이미지파일1</label></dt>
									<dd>
										<input type="file" id="file1" name="upfile[]">

										<? if ($mode=="modify" && $item_file_0){	// 수정하기 및 0번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_0?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file1" name="del_file[]" value="0">
												<label for="del_file1">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file2">이미지파일2</label></dt>
									<dd>
										<input type="file" id="file2" name="upfile[]">
										
										<? if ($mode=="modify" && $item_file_1) {	// 수정하기 및 1번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_1?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file2" name="del_file[]" value="1">
												<label for="del_file2">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="file3">이미지파일3</label></dt>
									<dd>
										<input type="file" id="file3" name="upfile[]">
										
										<? if ($mode=="modify" && $item_file_2){	// 수정하기 및 2번파일이 있을 때 ?>
										<div class="delete_ok">
											<?=$item_file_2?> 파일이 등록되어 있습니다.
											<div class="check">
												<input type="checkbox" id="del_file3" name="del_file[]" value="2">
												<label for="del_file3">삭제</label>
											</div>
										</div>
										<? } ?>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="moBtn">
							<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
							<a href="#" onclick="check_input()" class='active'>완료</a>
						</div>

					</form>
				</div>
			</div>
        </article>
        <? include "../common/sub_footer.html" ?>
	<script src="../sub2/js/sub2.js"></script>
</body>
</html>