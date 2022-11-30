function check_input()
{
    if (!document.mail_form.name.value)
    {
        alert("이름을 입력하세요");    
        document.mail_form.name.focus();
        return;
    }

    if (!document.mail_form.email1.value || !document.mail_form.email2.value )
    {
        alert("이메일을 입력하세요");    
        document.mail_form.email1.focus();
        return;
    }

    if (!document.mail_form.hp2.value || !document.mail_form.hp3.value )
    {
        alert("휴대폰 번호를 입력하세요");    
        document.mail_form.hp2.focus();
        return;
    }

    if (!document.mail_form.message.value)
    {
        alert("신청 내용을 입력하세요");    
        document.mail_form.message.focus();
        return;
    }


    document.mail_form.submit(); 

}
