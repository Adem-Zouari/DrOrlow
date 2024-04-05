function hidebutton1(x)
{
    x.style.display='none';
    document.getElementById("button2").style.display="inline";
}

function hidebutton2(x)
{
    x.style.display='none';
    document.getElementById('button3').style.display='inline';
}

function showbutton4()
{
    document.getElementById('button4').style.display='inline'
}

function showangry()
{
    document.getElementById('angry').style.display='inline';
}

function showagain()
{
    document.getElementById('again').style.display='inline';
}

function hidebutton3(x)
{
    x.style.display='none';
    document.getElementById('angryorlow').style.display='inline';
    document.getElementById('header').style.display='none';
    document.getElementById('footer').style.display='none';
    setTimeout(showangry,5*1000);
    setTimeout(showagain,10*1000);
    setTimeout(showbutton4,15*1000);
}

function showhappy1()
{
    document.getElementById('happy1').style.display='inline';
}

function showhappy2()
{
    document.getElementById('happy2').style.display='inline';
}

function showbutton5()
{
    document.getElementById('button5').style.display='inline';
}

function hidebutton4(x)
{
    x.style.display='none';
    document.getElementById('angryorlow').style.display='none';
    document.getElementById('angry').style.display='none';
    document.getElementById('again').style.display='none';
    document.getElementById('DrOrlow').style.display='inline';
    setTimeout(showhappy1,1*1000);
    setTimeout(showhappy2,5*1000);
    setTimeout(showbutton5,10*1000);
}