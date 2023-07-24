var caixasBlocos = document.querySelectorAll('infos-left0') [0] ;
 setInterval(function(){
    pulsar()
 }, 1800);
 
caixasBlocos.addEventListener("onMouseover", function pulsar(){
   caixasBlocos.style.marginTop = '40px'
});