let myImage = document.querySelector('img.fixed');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src','images/pixelShovelDig.png');
}

myImage.onmouseout = function() {
    let mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src','images/pixelShovel.png');
}