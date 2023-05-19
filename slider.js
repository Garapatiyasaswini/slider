var num=0;
var imageArr=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
var  hederTag=document.querySelector("header")

function autoSlider()
{
    num++;
    if(num<=imageArr.length-1)
    {
        hederTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        hederTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    setTimeout(autoSlider,5000)
}
autoSlider()
function sliderRight()
{
    num++;
    if(num<=imageArr.length-1)
    {
        hederTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        hederTag.style.backgroundImage=`url(${imageArr[num]})`


    }
}
function sliderLeft()
{
    num--;
    if(num<0)
    {
        num=imageArr.lenght-1;
        hederTag.style.backgroundImage=`url(${imageArr[num]})`     
    }
    else
    {
        hederTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}