window.onload = function() {

var w = window.innerWidth;
var h = window.innerHeight;
var image = document.getElementById("image");

console.log(w + " and " + h)
//
// var randomX = Math.random()*(w-500);
// var randomY = Math.random()*(h-500);
// console.log("variable changed to "+randomX + " and " + randomY);
//
// image.style.left = randomX;
// image.style.top = randomY;
// console.log("effect: "+image.style.left + " and " + image.style.top);
//


image.onmouseenter = function()
{
    image.style.left = Math.random()*w-500+"px";
    image.style.top = Math.random()*h-500+"px";
}



}


// $('#image').click(function() {
//     var docHeight = $(document).height(),
//         docWidth = $(document).width(),
//         $img = $('#image'),
//         divWidth = $img.width(),
//         divHeight = $img.height(),
//         heightMax = docHeight - divHeight,
//         widthMax = docWidth - divWidth;
//
//     $img.css({
//         left: Math.floor( Math.random() * 1000 ),
//         top: Math.floor( Math.random() * 1000 )
//     });
// });
