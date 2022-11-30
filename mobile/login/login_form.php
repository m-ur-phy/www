<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="./css/login_common.css">
    <script src="https://kit.fontawesome.com/33cd326170.js" crossorigin="anonymous"></script>
</head>
<body>
<header>
    <ul class="topMenu">
        <li><a href="javascript:history.go(-1);"><i class="fa-solid fa-arrow-left"></i><span class="hidden">뒤로</span></a></li>
        <li><a href="../index.html"><i class="fa-solid fa-house"></i><span class="hidden">메인으로</span></a></li>
    </ul>
    <h1 class="hidden"><a class="logo" href="../index.html"></a> </h1>
</header>
	 
<article id="content"> 
    <h2>로그인</h2> 
    <p>아이디와 비밀번호를 입력하세요</p>
    <form name="member_form" method="post" action="login.php"> 
        <ul>
            <li>
                <label for="id" class="hidden">아이디</label>  
                <input type="text" name="id" id="id" class="login_input" placeholder="아이디를 입력하세요" required>
            </li>
            <li>
                <label for="password" class="hidden">비밀번호</label>
                <input type="password" name="pass" id="pass" class="login_input" placeholder="비밀번호를 입력하세요" required>
            </li>
        </ul>						
        <button type="submit"><span>로그인</span></button>
        <ul class="findLink">
            <li>
                <a href="id_find.php">아이디 찾기</a>
            </li>
            <li>
                <a href="pw_find.php">비밀번호 찾기</a>
            </li>
        </ul>
        <div class="joinLink">
            <span>아직 회원이 아니신가요?</span>
            <a href="../member/member_check.html">회원가입</a>
        </div>
    </form>
</article>

</body>
</html>