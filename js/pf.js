document.querySelector('.button1').addEventListener('click', function () {
    document.querySelector('.imgContainer').style.transform = 'initial';
});
document.querySelector('.button2').addEventListener('click', function () {
    document.querySelector('.imgContainer').style.transform = 'translate(-1200px)';
});
document.querySelector('.button3').addEventListener('click', function () {
    document.querySelector('.imgContainer').style.transform = 'translate(-2400px)';
});

window.addEventListener('scroll', e=> {
    if(document.documentElement.scrollTop > 50) {
        document.getElementById("right").className ="hide";
        document.querySelector('header .inner').style.height = "50px";
        document.querySelector('header .tnb').style.padding = "10px";            
        document.querySelector('header .search').style.height = "30px";
        document.querySelector('header .search').style.border = "1px solid #858585";
    } else {
        document.getElementById("right").className ="right";
        document.getElementById("right").className ="flex";
        document.getElementById("right").className ="flexAlignCenter";
        document.querySelector('header .inner').style.height = "80px";
        document.querySelector('header .tnb').style.padding = "30px";            
        document.querySelector('header .search').style.height = "40px";
        document.querySelector('header .search').style.border = "1px solid";
    }
});