<?
    session_start(); // id 정보를 어디서 얻어오냐

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link href="../css/common.css" rel="stylesheet" type="text/css" media="all">
    <link href="./css/member_common.css" rel="stylesheet" type="text/css" media="all">
    <link href="./css/member_form.css" rel="stylesheet" type="text/css" media="all">
    
    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
    <script>
        
        function check_input()
        {
            if (!document.member_form.pass.value)
            {
                alert("비밀번호를 입력하세요");    
                document.member_form.pass.focus();
                return;
            }

            if (!document.member_form.pass_confirm.value)
            {
                alert("비밀번호확인을 입력하세요");    
                document.member_form.pass_confirm.focus();
                return;
            }

            if (!document.member_form.name.value)
            {
                alert("이름을 입력하세요");    
                document.member_form.name.focus();
                return;
            }

            if (!document.member_form.nick.value)
            {
                alert("닉네임을 입력하세요");    
                document.member_form.nick.focus();
                return;
            } else if(document.member_form.nick.value.indexOf(' ') > -1)
            {
                alert("공백을 포함하지 않는 닉네임을 입력하세요");    
                document.member_form.nick.focus();
                return;
            }

            if (!document.member_form.hp2.value || !document.member_form.hp3.value )
            {
                alert("휴대폰 번호를 입력하세요");    
                document.member_form.nick.focus();
                return;
            }

            if (document.member_form.pass.value != 
                    document.member_form.pass_confirm.value)
            {
                alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }

            document.member_form.submit();
        }

        function reset_form()
        {
            history.go(-1);
        }
    
    </script>
</head>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body>
    <header>
        <ul class="topMenu">
            <li><a href="javascript:history.go(-1);"><i class="fa-solid fa-arrow-left"></i><span class="hidden">뒤로</span></a></li>
            <li><a href="../index.html"><i class="fa-solid fa-house"></i><span class="hidden">메인으로</span></a></li>
        </ul>
        <h1 class="hidden"><a class="logo" href="../index.html"></a> </h1>
    </header>
	<article id="content">  
		<h2>정보수정</h2>
		<form  name="member_form" method="post" action="modify.php"> 
			<dl>
				<dt><label for="id">아이디</label></dt>
				<dd>
					<input type="text" value="<?= $row[id] ?>" readonly>
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
					<input type="text" name="name" id="name"  value="<?= $row[name] ?>"  required> 
					<span id="nametext"></span>
				</dd>
			</dl>
			<dl>
				<dt><label for="nick">닉네임</label></dt>
				<dd>
					<input type="text" name="nick" id="nick" value="<?= $row[nick] ?>" required>
					<span id="nicktext"></span>
				</dd>
			</dl>
			<dl class="hp">
				<dt>휴대폰</dt>
				<dd>
					<label class="hidden" for="hp1">전화번호앞3자리</label>
					<select class="hp" name="hp1" id="hp1"> 
                        <option value='010' <? if ($hp1 == '010') echo 'selected'; ?>>010</option>
                        <option value='011' <? if ($hp1 == '011') echo 'selected'; ?>>011</option>
                        <option value='016' <? if ($hp1 == '016') echo 'selected'; ?>>016</option>
                        <option value='017' <? if ($hp1 == '017') echo 'selected'; ?>>017</option>
                        <option value='018' <? if ($hp1 == '018') echo 'selected'; ?>>018</option>
                        <option value='019' <? if ($hp1 == '019') echo 'selected'; ?>>019</option>
					</select>
			<span>-</span> 
			<label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" maxlength="4" required><span>-</span>
            <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>" maxlength="4" required>
				<span id="hptext"></span>	
				</dd>
			</dl>
			<dl class="email">
				<dt>이메일</dt>
				<dd>
				<label class="hidden" for="email1">이메일아이디</label>
					<input type="text" id="email1" name="email1" value="<?= $email1 ?>" required> 
					<span>@</span> 
					<label class="hidden" for="email2">이메일주소</label>
					<input type="text" name="email2" id="email2" value="<?= $email2 ?>"  required>
					<span id="emailtext"></span>
				</dd>
			</dl>
			<div class='button'>
				<a href="#" onclick="check_input()">변경하기</a>
				<a href="#" onclick="reset_form()">취소하기</a>
			</div>
		</form>
	</article>
    <script src="../js/jquery-1.12.4.min.js"></script>
  	<script src="../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/member_form.js"></script>
</body>
</html>
