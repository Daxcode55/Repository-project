// slide show
var myIndex = 0;
corousel();

function corousel() {
    var i;
    var x = document.getElementsByClassName("img-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(corousel, 3000);
}


// slide text
var myText = 0;
slideText();

function slideText() {
    var i;
    var x = document.getElementsByClassName("text3");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myText++;
    if (myText > x.length) {myText = 1}
    x[myText-1].style.display = "block";
    setTimeout(slideText, 3000);
}