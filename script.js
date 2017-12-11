window.onload = function() {

var w = window.innerWidth;
var h = window.innerHeight;
var image = document.getElementById("image");

var posX = Math.random()*w;
var posY = -500+Math.random()*h;
image.style.left = posX + "px";
image.style.top = posY + "px";

var reaction = function()
{
    if(posX < w/4)
    {
        posX = Math.random()*w;
        posY = -500+Math.random()*h;
    }
    else
    {
        posX = -350;
        posY = -500+Math.random()*h;
    }
    image.style.left = posX + "px";
    image.style.top = posY + "px";
}

image.onmouseenter = function()
{
    reaction();

}

image.ontouchstart = function()
{
    reaction();

}



}
