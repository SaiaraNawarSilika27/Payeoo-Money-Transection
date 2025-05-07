function getInputByID(id)
{
    const valu=document.getElementById(id).value;
    const ConvartedValue=parseFloat(valu);
    return ConvartedValue;
}
function getInputTextById(id)
{
    const valu=document.getElementById(id).innerText;
    const ConvertedValu=parseFloat(valu);
    return ConvertedValu;
}
function setTheIDAndValue (id,valu)
{
    document.getElementById(id).innerHTML=valu;
}

function setTheStyle(id,status)
{
    document.getElementById(id).style.display=status;
}