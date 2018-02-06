// tabs
function openCat(evt, catName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for ( i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for ( i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// adaptive toggle menu
function myFunction(){
  var x = document.getElementById("adUl").classList.toggle('active');
} 

// button scroll top appearence
window.onscroll = function () {scrollFunction ()};
function scrollFunction () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scrT").style.display = "block";
    } else {
        document.getElementById("scrT").style.display = "none";
    }
    }

// Scroll top function
    function topFunc() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
