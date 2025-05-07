document.getElementById('login-btn')
.addEventListener('click',function(event)
{
    event.preventDefault();
    const AccountNumber=document.getElementById('account-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    const ConformPin=parseInt(pinNumber);
    // console.log(AccountNumber.length,pinNumber.length);
    if(AccountNumber.length===11)
    {
        if(ConformPin==1234)
        {
            window.location.href="./mian.html";
        }
        else{
           alert("your pin number is not ok try agian");
        }
    }
    else{
        alert("Invalid Account number");
    }
});