document.getElementById('add-money')
.addEventListener('click',function(event)
{
  event.preventDefault();
  const mainBalance=getInputTextById("main-balance");
  const amont=getInputByID("add-amount");
  const pin=getInputByID("pin-number");
  const theDigit=document.getElementById('digits-code').value;
  const selectBankOptions=document.getElementById('select-options').value;
  console.log(selectBankOptions);
  if(amont<0)
  {
    alert("Enter Positive number");
    return;
  }
  
  if(theDigit.length===11)
  {
    if (pin==1234)
    {
      const sum= mainBalance+amont;
      setTheIDAndValue("main-balance",sum);
      const containur=document.getElementById("tranjection-containour")

      const para=document.createElement('p');
      para.innerText=`
      Added ${theDigit} from ${amont} Amount 
      Time: ${new Date(Date.now())}
      ` 
      containur.appendChild(para);
    }
    else
    {
      alert("Worong pin number");
    }
  }
  else 
  {
   alert('Enter the Right Digit');
  }
})