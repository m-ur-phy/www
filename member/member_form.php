<? 
	session_start(); 
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>회원가입-정보입력</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/member_common.css">
	<link rel="stylesheet" href="./css/member_form.css">

</head>
<body>
    <header>
        <h1><a class="logo" href="../index.html"></a> </h1>
    </header>
	 
	<article id="content">  
		<h2>회원가입</h2>
		<ul class="joinStep">
			<li>약관동의</li>
			<li class="active">정보입력</li>
			<li>가입완료</li>
		</ul>
		<form name="member_form" method="post" action="insert.php"> 
			<dl>
				<dt><label for="id">아이디</label></dt>
				<dd>
					<input type="text" name="id" id="id" required>
					<span id="idtext"></span>
				</dd>
			</dl>
			<dl>
				<dt><label for="pass">비밀번호</label></dt>
				<dd>
					<input type="password" name="pass" id="pass" required>
					<span id="passtext"></span>
				</dd>
			</dl>
			<dl>
				<dt><label for="pass_confirm">비밀번호확인</label></dt>
				<dd>
					<input type="password" name="pass_confirm" id="pass_confirm"  required>
					<span id="pass2text"></span>
				</dd>
			</dl>
			<dl>
				<dt><label for="name">이름</label></dt>
				<dd>
					<input type="text" name="name" id="name"  required> 
					<span id="nametext"></span>
				</dd>
			</dl>
			<dl>
				<dt><label for="nick">닉네임</label></dt>
				<dd>
					<input type="text" name="nick" id="nick"  required>
					<span id="nicktext"></span>
				</dd>
			</dl>
			<dl class="hp">
				<dt>휴대폰</dt>
				<dd>
					<label class="hidden" for="hp1">전화번호앞3자리</label>
					<select class="hp" name="hp1" id="hp1"> 
						<option value='010'>010</option>
						<option value='011'>011</option>
						<option value='016'>016</option>
						<option value='017'>017</option>
						<option value='018'>018</option>
						<option value='019'>019</option>
					</select>
			<span>-</span> 
			<label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" maxlength="4" required><span>-</span><label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" maxlength="4" required>
				<span id="hptext"></span>	
				</dd>
			</dl>
			<dl class="email">
				<dt>이메일</dt>
				<dd>
				<label class="hidden" for="email1">이메일아이디</label>
					<input type="text" id="email1" name="email1"  required> 
					<span>@</span> 
					<label class="hidden" for="email2">이메일주소</label>
					<input type="text" name="email2" id="email2"  required>
					<span id="emailtext"></span>
				</dd>
			</dl>
			<div class='button'>
				<a href="#" onclick="check_input()">회원가입</a>
				<a href="#" onclick="reset_form()">취소하기</a>
			</div>
		</form>
	</article>
	<script src="../common/js/jquery-1.12.4.min.js"></script>
  	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/member_form.js"></script>
    <script src="./js/member_form_check.js"></script>
</body>
</html>


