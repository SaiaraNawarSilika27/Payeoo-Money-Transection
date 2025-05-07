document.getElementById('Withdraw-Money')
.addEventListener('click',function(event)
{
  event.preventDefault();
  const mainBalance=getInputTextById("main-balance");
  const amount=getInputByID("cashout-amount");
  const pin=getInputByID("cashout-pin-number");
  const theDigits= document.getElementById("cashout-agent-number").value;
  if (amount>mainBalance)
  {
    alert("Insufficiend Balance!");
    return;
  }
  if(theDigits.length==11)
  {
      if(pin==1234)
      {
        const sudstraction= mainBalance - amount;
        setTheIDAndValue("main-balance",sudstraction);
        const containour=document.getElementById("tranjection-containour");
        const para=document.createElement("p")
        para.innerText=`
        Cashout ${theDigits} from ${amount} 
         Time: ${new Date(Date.now())}
        `
        containour.appendChild(para);
      }
  }
  else
  {
    alert("Enter the Right Digit")
  }

})