function check_input()
{
    if (!document.member_form.id.value)
    {
        alert("아이디를 입력하세요");    
        document.member_form.id.focus();
        return;
    }

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
        // insert.php 로 변수 전송
}

function reset_form()
{
    document.member_form.id.value = "";
    document.member_form.pass.value = "";
    document.member_form.pass_confirm.value = "";
    document.member_form.name.value = "";
    document.member_form.nick.value = "";
    document.member_form.hp1.value = "010";
    document.member_form.hp2.value = "";
    document.member_form.hp3.value = "";
    document.member_form.email1.value = "";
    document.member_form.email2.value = "";
    
    document.member_form.id.focus();

    return;
}
