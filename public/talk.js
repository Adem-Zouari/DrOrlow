function happy1()
{  
    document.getElementById('page1').style.display='none';
    document.getElementById('page2').style.display='inline';
}

function happy3()
{
    document.getElementById('page2').style.display='none';
    document.getElementById('page3').style.display='inline';
}

function showbutton()
{
    document.getElementById('next').style.display='inline';
}


function happy2()
{
    document.getElementById('page1').style.display='none';
    document.getElementById('sadtext1').style.display='inline';
    setTimeout(showbutton,10*1000);
}

function happy4()
{
    document.getElementById('page2').style.display='none';
    document.getElementById('sadtext1').style.display='inline';
    setTimeout(showbutton,10*1000);
}

function shownext()
{
    document.getElementById('next').style.display='none';
    document.getElementById('sadtext1').style.display='none';
    document.getElementById('sadtext2').style.display='inline';
}