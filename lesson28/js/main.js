var butoni1 = document.getElementById("btn1");
var butoni2 = document.getElementById("btn2");
var butoni3 = document.getElementById("btn3");
var teksti = document.getElementById("teksti");
var butoni4 = document.getElementById("btn4");

butoni1.onclick= function(){
    alert('Blerje e suksesshme');
}

butoni2.onmouseover= function(){
    alert('Sapo vendosa mausin permbi meje');
}

butoni3.onmouseleave= function(){
    alert('Ti e largove mausin nga une');
}

butoni4.onclick = function(){
    teksti.style.color ="red";
    teksti.style.background ="grey";
    teksti.style.fontSize ="40px"
}