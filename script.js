window.onload = function() {

var w = window.innerWidth;
var h = window.innerHeight;
var image = document.getElementById("image");

var currentQuarter = Math.floor(Math.random()*4);

randomPositionInQuarter = function(quarter)
{
    var x = 0;
    var y = 100;
    if (quarter == 0)
    {
        x = -500+Math.random()*(w/2);
        y = -500+Math.random()*(y/2);
    }
    if (quarter == 1)
    {
        x = -500+(w/2)+Math.random()*(w/2);
        y = -500+Math.random()*(y/2);
    }
    if (quarter == 2)
    {
        x = -500+(w/2)+Math.random()*(w/2);
        y = -500+(y/2)+Math.random()*(y/2);
    }
    if (quarter == 3)
    {
        x = -500+Math.random()*(w/2);
        y = -500+(y/2)+Math.random()*(y/2);
    }
    return [x, y];
}

var randomInitialPosition = randomPositionInQuarter(currentQuarter);
image.style.left = randomInitialPosition[0] + "px";
image.style.top = randomInitialPosition[1] + "px";

var changeQuarter = function(quarter)
{
    if (quarter == 3){return 0;}
    else {return quarter += 1;}
}


image.onmouseenter = function()
{
    // image.style.left = Math.random()*w-500+"px";
    // image.style.top = Math.random()*h-500+"px";

    currentQuarter = changeQuarter(currentQuarter);
    var randomPosition = randomPositionInQuarter(currentQuarter);
    console.log(currentQuarter);
    image.style.left = randomPosition[0] + "px";
    image.style.top = randomPosition[1] + "px";
}



}
